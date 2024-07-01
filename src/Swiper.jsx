// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperData } from './swiperInfo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SwiperCont = ()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperData.map((item,index)=>{
            return(
                <div key={index}>
                    <SwiperSlide>
                            <img className='img-swiper' src={item.imageURL} alt="" />
                    </SwiperSlide>
                </div>
            )
        })}
       
      </Swiper>
    </>
  );
}
