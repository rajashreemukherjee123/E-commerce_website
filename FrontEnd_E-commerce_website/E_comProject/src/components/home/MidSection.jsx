import React from 'react'


import {imageURL} from '../constants/data'
import { Grid, styled,Box } from "@mui/material"


const ImageWrapper = styled(Box)`
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;

    /* --- Default: Mobile & Tablet (Niche niche thakbe) --- */
    flex-direction: column; 
    
    & > img {
        width: 100%;
        height: auto;
        margin-bottom: 10px; /* Proti image-er niche gap */
    }

    /* --- Laptop/Desktop (960px er upore) --- */
    /* iPad Air ba Mini-r width pray 820px porjonto hoy, 
       tai amra 960px (MUI md breakpoint) er niche sob niche niche rakhbo */
    @media (min-width: 960px) {
        flex-direction: row; 
        & > img {
            width: 32.5%; /* 3-te pashapashi */
            margin-bottom: 0; /* Boro screen-e niche gap dorkar nei */
        }
    }
`

const MidSection = () => {
  return (
    // <Grid lg={12} md={12} sm={12}  xs={12} container>
    //lg={4} md={4} sm={4}  xs={4}
    <ImageWrapper > 
      {
        imageURL.map((image,index) => (
            // <Grid item key={index} >
                <img src={image} alt='promo' key={index}  />
            // </Grid>
        ))
      }
    </ImageWrapper>
  )
}

export default MidSection
