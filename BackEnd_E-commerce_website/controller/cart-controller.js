const Cart = require("../model/cart.schema");


/// ........................................... Add to Cart........................................
const addToCart = async(req,res)=>{
//     try{
//         const productId = req.body.productId;
//         const quantity = req.body.quantity;
//         const userId = req.user.user_id;

//         let cart = await Cart.findOne({ userId });

//         if(cart){
//             const itemIndex = cart.items.findIndex(p => p.productId.toString() === productId);

//             if(itemIndex > -1){
//                 cart.items[itemIndex].quantity += quantity || 1;
//             }else{
//                 cart.items.push({productId, quantity : quantity || 1});
//             }
//             await cart.save();
//         }else{
//             cart = await Cart.create({
//                 userId,
//                 items: [{
//                     productId,
//                     quantity: quantity || 1
//                 }]
//             });
//         }



//         const fullCart = await Cart.findOne({ userId }).populate("items.productId");
        
//         res.status(200).json({message: "Product added successfully", cart: fullCart});

//     }catch(err){
//         res.status(500).json({message: err.message});
//     }
// }

try {
        const { productId, quantity } = req.body;
        
        // Apnar middleware-e jodi req.user = verifyToken thake
        // Tobe check korun token-e 'user_id' achhe naki sudhu 'id'
        const userId = req.user.user_id || req.user.id || req.user._id;

        console.log("Logged-in User ID:", userId);
        console.log("Adding Product ID:", productId);

        if (!userId || !productId) {
            return res.status(400).json({ message: "User or Product ID missing" });
        }

        let cart = await Cart.findOne({ userId });

        if (cart) {
            const itemIndex = cart.items.findIndex(p => p.productId.toString() === productId.toString());

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += (quantity || 1);
            } else {
                cart.items.push({ productId, quantity: quantity || 1 });
            }
            await cart.save();
        } else {
            cart = await Cart.create({
                userId,
                items: [{ productId, quantity: quantity || 1 }]
            });
        }

        const fullCart = await Cart.findOne({ userId }).populate("items.productId");
        res.status(200).json({ message: "Success", cart: fullCart });

    } catch (err) {
        console.error("Backend Error:", err.message);
        res.status(500).json({ message: err.message });
    }
}





/// ........................................... Remove from Cart........................................
const removeFromCart = async(req,res) =>{
    try{
        const productId = req.body.productId;
        // const userId = req.user.user_id;
        const userId = req.user.user_id || req.user.id || req.user._id;

        const cart = await Cart.findOneAndUpdate(
            {userId},
            {$pull: {items: {productId : productId}}},
            {new: true}
        ).populate("items.productId");

        if(!cart){
            // return res.status(404).json({message: "Cart not found"});
            return res.status(200).json({ message: "Cart is empty", cart: { items: [] } });
        }else{
            res.status(200).json({ message: "Item removed from cart", cart });
        }

    }catch(err){
        res.status(500).json({message: err.message});
    }
}


/// ........................................... update Cart items quantity ........................................
const updateQuantity = async (req,res) =>{
    try{
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        const userId = req.user.user_id;

        if(quantity < 1){
            return res.status(400).json({ message: "Quantity must be at least 1"});
        }

        const cart = await Cart.findOneAndUpdate(
            {userId, "items.productId": productId},
            {
                $set: {"items.$.quantity": quantity}
            },
            { new: true}
        ).populate("items.productId");

        if (!cart) {
            return res.status(404).json({ message: "Cart or Product not found" });
        }

        res.status(200).json({ message: "Quantity updated", cart });

    }catch(err){
        res.status(500).json({message : err.message});
    }
}



/// ........................................... Get Cart Details ........................................
// const getCartDetails = async (req, res) => {
//     try {
//         // Auth middleware theke userId-ta nichhi
//         const userId = req.user.user_id || req.user.id || req.user._id;

//         // User-er specific cart-ta khujchi r product details populate korchi
//         const cart = await Cart.findOne({ userId }).populate("items.productId");

//         if (!cart) {
//             // Jodi cart na thake (mane user kichu add koroni), tobe empty array pathachhi
//             return res.status(200).json({ message: "Cart is empty", cart: { items: [] } });
//         }

//         res.status(200).json({ message: "Cart fetched successfully", cart });

//     } catch (err) {
//         console.error("Get Cart Error:", err.message);
//         res.status(500).json({ message: err.message });
//     }
// }

const getCartDetails = async (req, res) => {
    try {
        const userId = req.user.user_id || req.user.id || req.user._id;
        let cart = await Cart.findOne({ userId }).populate("items.productId");

        if (!cart) {
            return res.status(200).json({ message: "Cart is empty", cart: { items: [] } });
        }

        // FIX: null productId items গুলো DB থেকেই সরিয়ে দাও
        const validItems = cart.items.filter(item => item.productId !== null);
        
        if (validItems.length !== cart.items.length) {
            cart.items = validItems;
            await cart.save();
        }

        res.status(200).json({ message: "Cart fetched successfully", cart });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


/// ...........................................  Cart clear ........................................
const clearCart = async (req, res) => {
    try {
        const userId = req.user.user_id || req.user.id || req.user._id;
        await Cart.findOneAndUpdate(
            { userId },
            { $set: { items: [] } },
            { new: true }
        );
        res.status(200).json({ message: "Cart cleared successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addToCart, removeFromCart, updateQuantity, getCartDetails, clearCart };

