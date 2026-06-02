// import React, { useState, useCallback, useContext } from 'react'

// import {Badge, Box, IconButton, styled, Typography} from '@mui/material';

// import { DataContext } from '../../context/DataProvider';

// import { useLocation, useNavigate } from 'react-router-dom';

// //Icon
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


// //Components LoginDialog
// import LoginDialog from '../login/LoginDialog';
// import Profile from './Profile';
// import CartItem from '../cart/CartItem';
// import { useSelector } from 'react-redux';




// const IconContainer = styled(Box)(({ theme, mobileIconView }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',

//     '& .MuiIconButton-root': {
//         backgroundColor: '#F6F6F6',
//         borderRadius: '8px',
//         color: 'inherit',
//         height: '36px',
//         width: '36px',
//         padding: '0px',
//         transition: 'background 0.3s ease',
//     },

//     '& .MuiIconButton-root:hover': {
//         background: '#EDEDED',
//     },

    
//     [theme.breakpoints.down('md')]: {
//         display: mobileIconView ? 'flex' : 'none',
//         flexDirection: mobileIconView ? 'flex':'row',
//         alignItems: 'flex-start',
//         gap: '15px'
//     },
// }));

// const IconButtons = ({ mobileIconView }) => {
   
//   const [open,setOpen] = useState(false);

//   const { account, setAccount } = useContext(DataContext);

//   const { cartItems } =useSelector(state => state.cart);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const isCartActive = location.pathname === '/cart';

//   const openDialog = ()=>{
//     setOpen(true);
//   }

//   // move to Cart page function
//   const handleCartClick = () => {
//     if (account) {
//         navigate('/cart'); // Login thakle cart page-e jabe
//     } else {
//         setOpen(true); // Login na thakle login dialog khulbe
//     }
//   }

//   return (
//     <IconContainer mobileIconView={mobileIconView}>
//        {/* User */}
//       {
//         account ? (<Profile account = {account} setAccount={setAccount} />) : 
            
//             (<IconButton onClick={openDialog}
//               sx={{ 
//             // Jodi user /cart page-e thake (isCartActive === true)
//             // Tobe color Purple (#8A33FD) hobe, naile gray ba default thakbe
//             color: isCartActive ? '#8A33FD' : 'inherit', 
//             backgroundColor: isCartActive ? '#f0e6ff' : '#F6F6F6',
            
//             // Hover korle jeno color chole na jay tai logic
//             '&:hover': {
//                 backgroundColor: isCartActive ? '#e5d5ff' : '#EDEDED'
//             }
//         }}
//             >    
//             <PermIdentityIcon />
//             </IconButton>)
//       }

//       {/* Wishlist */}
//       <IconButton size="small" >
//         <FavoriteBorderIcon fontSize="small"/>
//       </IconButton>

      

       

//         {/* Cart */}
//       <IconButton onClick={handleCartClick} >
//         <Badge badgeContent={cartItems?.length} color='secondary'>
//             <ShoppingCartOutlinedIcon/>
//         </Badge>
//       </IconButton>

//       <LoginDialog open={open} setOpen={setOpen} />
//     </IconContainer>
//   )
// }

// export default IconButtons


import React, { useState, useContext } from 'react'
import { Badge, Box, IconButton, styled } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { useLocation, useNavigate } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const IconContainer = styled(Box)(({ theme, mobileIconView }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .MuiIconButton-root': {
        backgroundColor: '#F6F6F6',
        borderRadius: '8px',
        color: 'inherit',
        height: '36px',
        width: '36px',
        padding: '0px',
        transition: 'background 0.3s ease',
    },
    '& .MuiIconButton-root:hover': {
        background: '#EDEDED',
    },
    [theme.breakpoints.down('md')]: {
        display: mobileIconView ? 'flex' : 'none',
        flexDirection: mobileIconView ? 'flex' : 'row',
        alignItems: 'flex-start',
        gap: '15px'
    },
}));

const IconButtons = ({ mobileIconView }) => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const location = useLocation();
    const isCartActive = location.pathname === '/cart';

    // FIX: Total quantity (sum of all item quantities) instead of array length
    // This shows "3" if you have 1 item with qty 3, instead of showing "1"
    const totalCartQty = cartItems?.reduce((sum, item) => sum + (item.quantity || 1), 0) || 0;

    const openDialog = () => setOpen(true);

    const handleCartClick = () => {
        if (account) {
            navigate('/cart');
        } else {
            setOpen(true);
        }
    };

    return (
        <IconContainer mobileIconView={mobileIconView}>
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <IconButton
                    onClick={openDialog}
                    sx={{
                        color: isCartActive ? '#8A33FD' : 'inherit',
                        backgroundColor: isCartActive ? '#f0e6ff' : '#F6F6F6',
                        '&:hover': {
                            backgroundColor: isCartActive ? '#e5d5ff' : '#EDEDED'
                        }
                    }}
                >
                    <PermIdentityIcon />
                </IconButton>
            )}

            <IconButton size="small">
                <FavoriteBorderIcon fontSize="small" />
            </IconButton>

            <IconButton onClick={handleCartClick}>
                {/* FIX: Use totalCartQty instead of cartItems?.length */}
                <Badge badgeContent={totalCartQty} color='secondary'>
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>

            <LoginDialog open={open} setOpen={setOpen} />
        </IconContainer>
    );
};

export default IconButtons;
