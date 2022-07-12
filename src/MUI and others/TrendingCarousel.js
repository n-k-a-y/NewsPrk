
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PicSlide() {
  return (<div > 
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
<div>Top 10 Best Movies Of 2022 So Far: Great Movies To Watch Now!</div>      
      </SwiperSlide>
      <SwiperSlide>
      <div>Top 10 Best Movies Of 2022 So Far: Great Movies To Watch Now!</div>      
      </SwiperSlide>
      <SwiperSlide>
      <div>Top 10 Best Movies Of 2022 So Far: Great Movies To Watch Now!</div>      
         

      </SwiperSlide>
      <SwiperSlide>
      <div>Top 10 Best Movies Of 2022 So Far: Great Movies To Watch Now!</div>      
          
      </SwiperSlide>
    </Swiper>
    </div>
  );
};