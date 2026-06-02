// import React, { useState, useEffect } from 'react'
// import { bannerData } from '../constants/data';

// // MUI Icons (optional but recommended)
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const Banner = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent(prev => (prev + 1) % bannerData.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   //  Prev / Next function
//   const prevSlide = () => {
//     setCurrent(prev => (prev === 0 ? bannerData.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent(prev => (prev + 1) % bannerData.length);
//   };

//   return (
//     <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      
//       {/* Image */}
//       <img
//         src={bannerData[current].url}
//         alt="banner"
//         style={{ width: '100%', height: '350px', objectFit: 'cover' }}
//       />

//       {/*  Left Arrow */}
//       <button
//         onClick={prevSlide}
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '10px',
//           transform: 'translateY(-50%)',
//           background: 'transparent',
//           border: 'none',
//         //   borderRadius: '50%',
//         //   padding: '10px',
//           cursor: 'pointer',
//           color: "#fff"
//         }}
//       >
//         <ArrowBackIosNewIcon />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         style={{
//           position: 'absolute',
//           top: '50%',
//           right: '10px',
//           transform: 'translateY(-50%)',
//           background: 'transparent',
//           border: 'none',
//         //   borderRadius: '50%',
//         //   padding: '10px',
//           cursor: 'pointer',
//           color: "#fff"
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </button>

//       {/* Dots */}
//       <div style={{ textAlign: 'center', position: 'absolute', bottom: 10, width: '100%' }}>
//         {bannerData.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setCurrent(i)}
//             style={{
//               display: 'inline-block',
//               width: 10,
//               height: 10,
//               borderRadius: '50%',
//               margin: '0 4px',
//               background: i === current ? '#fff' : 'rgba(255,255,255,0.5)',
//               cursor: 'pointer'
//             }}
//           />
//         ))}
//       </div>

//     </div>
//   )
// }

// export default Banner;



import React, { useState, useEffect } from 'react';
import { bannerData } from '../constants/data';
import { Box, styled, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BannerContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '100vw', // Jate viewport-er baire na jay
    overflow: 'hidden', // Side scroll bondho korar jonno
    position: 'relative',
    height: '280px',
    
    [theme.breakpoints.up('sm')]: {
        height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
        height: '180px',
    },
    
    // Nest Hub (Landscape mobile devices) er jonno speshal fix
    '@media (max-height: 600px)': {
        height: '220px'
    }
}));

const BannerImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block' // Image-er niche faka jayga bondho kore
});

const ArrowButton = styled(IconButton)(({ theme, position }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [position]: '5px', // Ektu bhetore chapiye dewa
    color: "#fff",
    zIndex: 2, // Jate image-er upore thake
    backgroundColor: 'rgba(0,0,0,0.15)',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '4px',
        '& svg': {
            fontSize: '1rem'
        }
    }
}));

const DotContainer = styled(Box)({
    textAlign: 'center',
    position: 'absolute',
    bottom: '8px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    zIndex: 2
});

const Dot = styled(Box)(({ active }) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: active ? '#fff' : 'rgba(255,255,255,0.4)',
    cursor: 'pointer',
    transition: '0.2s'
}));

const Banner = () => {
    const [current, setCurrent] = useState(0);

    // Auto scroll logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % bannerData.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [current]);

    const prevSlide = () => setCurrent(prev => (prev === 0 ? bannerData.length - 1 : prev - 1));
    const nextSlide = () => setCurrent(prev => (prev + 1) % bannerData.length);

    return (
        <BannerContainer>
            <BannerImage src={bannerData[current].url} alt="banner" />

            <ArrowButton position="left" onClick={prevSlide}>
                <ArrowBackIosNewIcon />
            </ArrowButton>

            <ArrowButton position="right" onClick={nextSlide}>
                <ArrowForwardIosIcon />
            </ArrowButton>

            <DotContainer>
                {bannerData.map((_, i) => (
                    <Dot key={i} active={i === current} onClick={() => setCurrent(i)} />
                ))}
            </DotContainer>
        </BannerContainer>
    );
};

export default Banner;