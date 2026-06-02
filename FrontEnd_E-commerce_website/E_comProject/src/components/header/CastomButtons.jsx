import React from 'react'

import {Box, Button, Typography} from '@mui/material'
import {styled} from '@mui/material/styles'

import { NavLink } from 'react-router-dom'

// const ButtonCastom = styled(Box)`
//     display: flex;
//     gap: 32px;
//     align-items: center;

//     & > p { 
//         cursor: pointer;
        
//         font-weight: 500;
//         font-size: 14px; 
//         white-space: nowrap;
//         transition: all 0.2s ease-in-out;
//     }
//     & > p:hover {
//         color: #8f72f7; 
//     }
// `;

const ButtonCastom = styled(Box)(({ theme, mobileView }) => ({
    display: 'flex',
    gap: '32px',
    alignItems: 'center',

    
    '& > p': { 
        cursor: 'pointer', 
        fontWeight: '500',
        fontSize: '14px', 
        whiteSpace: 'nowrap',
        transition: 'all 0.2s ease-in-out',
    },

    '& > p:hover': {
        color: '#8f72f7', 
    },

    // Responsive Design
    
    [theme.breakpoints.down('md')]: {
        display: mobileView ?'flex':'none',
        flexDirection: mobileView ? 'column':'row',
        alignItems: 'flex-start',
        gap: '15px'
    },
}));



const CastomButtons = ({ mobileView }) => {
  return (
    <ButtonCastom mobileView={mobileView}>
        
        <NavLink to='/' style={({ isActive }) => ({
          color: isActive ? '#124dee' : 'inherit', 
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: 'none',
          marginRight: '20px'
        })} >
            <Typography>Home</Typography>
        </NavLink>
        <Typography>Fashion</Typography>
        <Typography>Mobile</Typography>
        <Typography>Electronic</Typography>
        <Typography>Appliances</Typography>
        <Typography>Beauty</Typography>
    
    </ButtonCastom>
  )
}

export default CastomButtons
