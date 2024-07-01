import React from 'react'
import { SwiperCont } from '../../Swiper';
import { Image } from '../../image';
import Products from '../../components/card';

const Homepage = () => {
  return (
    <div>
        <SwiperCont/>
        <Image/>
        <Products/>
    </div>
  )
}

export default Homepage