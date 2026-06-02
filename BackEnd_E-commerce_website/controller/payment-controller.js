// const PaytmChecksum = require("../paytm/PaytmChecksum");

// const { v4: uuid } = require("uuid");


// const addPaymentGateway = async(req,res)=>{
//     try{
//         let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
//         let paytmParams = {};

//         paytmParams['MID'] = process.env.PAYTM_MID;
//         paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
//         paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
//         paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
//         paytmParams['ORDER_ID'] = uuid();
//         paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
//         paytmParams['TXN_AMOUNT'] = "100";
//         paytmParams['CALLBACK_URL'] = "http://localhost:3000/callback";
//         paytmParams['EMAIL'] = `abc@gmail.com`;
//         paytmParams['MOBILE_NO'] = '1234567891';

//         // let paytmchecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
//         let checksumHash  = await PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey);

//         // let params = {
//         //     ...paytmParams, "CHECKSUMHASH" : PaytmChecksum
//         // }
//         // let params = {
//         //     ...paytmParams, "CHECKSUMHASH" : paytmChecksumHash
//         // }
//         let params = {
//             ...paytmParams,
//             "CHECKSUMHASH": checksumHash  // FIX: generated hash পাঠাও, module না
//         };

//         res.status(200).json(params);
//     }catch(err){
//         console.log(err);
//         res.status(500).json({err: err.message});
//     }

// }

// const paytmResponse = (req, res) => {
//     console.log("Paytm Callback:", req.body);
//     const { STATUS, ORDERID } = req.body;

//     if (STATUS === 'TXN_SUCCESS') {
//         // FIX: 3000 না, frontend port 5000
//         res.redirect(`http://localhost:5000/success?orderId=${ORDERID}`);
//     } else {
//         // FIX: 3000 না, frontend port 5000
//         res.redirect(`http://localhost:5000/failure?orderId=${ORDERID}`);
//     }
// };

// module.exports = { addPaymentGateway, paytmResponse }







//--------------------------------------------- Razorpay -------------------------------------
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Step 1: Order create korbe
const createOrder = async (req, res) => {
    try {
        const { amount } = req.body; // amount in rupees

        const options = {
            amount: amount * 100, // Razorpay paise-e nay, tai *100
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        
        res.status(200).json({
            success: true,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId: process.env.RAZORPAY_KEY_ID // Frontend-e lagbe
        });

    } catch (err) {
        console.error("Razorpay Order Error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};

// Step 2: Payment verify korbe
const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Signature verify - ei step ta security-r jonno khub important
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            // Payment successful
            res.status(200).json({ 
                success: true, 
                message: "Payment verified successfully",
                paymentId: razorpay_payment_id
            });
        } else {
            res.status(400).json({ success: false, message: "Payment verification failed" });
        }

    } catch (err) {
        console.error("Payment Verify Error:", err);
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = { createOrder, verifyPayment };