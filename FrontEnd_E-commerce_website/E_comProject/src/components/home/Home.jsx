import React, { useEffect } from 'react'
import Banner from './Banner' 
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';


import {Box, styled} from '@mui/material'


import { getProducts} from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';


// const Component = styled(Box)`
//     padding 20px 10px;
// `;

const Home = () => {

  const {products, loading} = useSelector(state => state.getProducts)
  // const {products} = getProducts; //getProducts.products
  console.log(products);

  // { products: [{},{},{}]}

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    <>
    
      <Banner/>
      { !loading && products && products.length > 0 && <MidSlide products={products} title="Deal of the Day" timer={true}/> }
      
      { !loading && products && products.length > 0 && <Slide products={products} title="Discounts for You" timer={false} /> }
      { !loading && products && products.length > 0 && <Slide products={products} title="Suggesting Items" timer={false}/> }
      <MidSection/>
      { !loading && products && products.length > 0 && <Slide products={products} title="Top Selection" timer={false}/> }
      { !loading && products && products.length > 0 && <Slide products={products} title="Recommended Items" timer={false}/> }
      { !loading && products && products.length > 0 && <Slide products={products} title="Trending Offers" timer={false}/> }
      { !loading && products && products.length > 0 && <Slide products={products} title="Season's top picks" timer={false}/> }
      { !loading && products && products.length > 0 && <Slide products={products} title="Top's Deals on Accessories" timer={false}/> }

    </>
  )
}

export default Home
