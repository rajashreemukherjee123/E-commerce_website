// import { Typography,Box,styled } from '@mui/material'
// import React, { useEffect, useState } from 'react'


// const Header = styled(Box)`
//     padding: 15px 24px;
//     background: #fff;
//     border-bottom: 4px solid #f0f0f0
// `;

// const Heading = styled(Typography)`
//     color: #878787;
// `;

// const Container = styled(Box)`
//     padding: 24px;
//     background: #fff;
//     & > p{
//         margin-bottom: 20px;
//         font-size: 14px
//     }
//     & > h6 {
//         margin-bottom: 20px;
//     }
// `;

// const Price = styled(Box)`
//     float: right;
// `;

// const Discount = styled(Typography)`
//     color: green;
//     font-weight: 500;
// `;


// const TotalView = ({cartItems}) => {

//     const [price, setPrice] = useState(0);
//     const [discount,setDiscount] = useState(0);

//     useEffect(() => {
//         totalAmount();
//     },[cartItems])


//     // const totalAmount = ()=>{
//     //     let price = 0, discount = 0;
//     //     cartItems.map(item => {
//     //         const product = item.productId; // Populate use korle productId object thake
//     //         if (item.productId && item.productId.price) {
//     //         price += product.price.mrp;
//     //         discount += (product.price.mrp - product.price.cost);
//     //         }
//     //     });
//     //     setPrice(price);
//     //     setDiscount(discount); 
//     // }
//     const totalAmount = () => {
//     let price = 0, discount = 0;
//     cartItems.map(item => {
//         // Product-er original price * quantity
//         price += item.productId.price.mrp * item.quantity;
//         // Discounted price calculation
//         discount += (item.productId.price.mrp - item.productId.price.cost) * item.quantity;
//     });
//     setPrice(price);
//     setDiscount(discount);
// }

//   return (
//     <Box>
//         <Header>
//             <Heading>PRICE DETAILS</Heading>
//         </Header>

//         <Container>
//             <Typography>Price ({cartItems?.length} item)
//                 <Price component="span">₹{price}</Price>
//             </Typography>
//             <Typography>Discount
//                 <Price component="span">-₹{discount}</Price>
//             </Typography>
//             <Typography>Delivery Charges
//                 <Price component="span">₹40</Price>
//             </Typography>
//             <Typography variant='h6'>Total Amount
//                 <Price component="span">₹{price - discount + 40}</Price>
//             </Typography>
//             <Discount>You will save ₹{discount - 40} on this order</Discount>


//         </Container>
//     </Box>
//   )
// }

// export default TotalView


import { Typography, Box, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 4px solid #f0f0f0
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px
    }
    & > h6 {
        margin-bottom: 20px;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 500;
`;

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    // FIX: cartItems dependency-te change hoile re-calculate hobe
    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let totalPrice = 0, totalDiscount = 0;
        cartItems.forEach(item => {
            if (item.productId && item.productId.price) {
                totalPrice += item.productId.price.mrp * item.quantity;
                totalDiscount += (item.productId.price.mrp - item.productId.price.cost) * item.quantity;
            }
        });
        setPrice(totalPrice);
        setDiscount(totalDiscount);
    };

    // FIX: Total quantity instead of array length for "Price (N items)" label
    const totalQty = cartItems?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                {/* FIX: Shows "Price (3 items)" when qty is 3, not "Price (1 item)" */}
                <Typography>Price ({totalQty} item{totalQty !== 1 ? 's' : ''})
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Typography variant='h6'>Total Amount
                    <Price component="span">₹{price - discount + 40}</Price>
                </Typography>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    );
};

export default TotalView;
