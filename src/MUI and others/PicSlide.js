import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../components/Video2"
import Video2 from '../components/Video2';


export default function PicSlide() {
  const imageClick = () => {
      <Video2/>
  } 
  
  return (

  <Swiper
      //  style={{width: "60%", paddingBottom: 50}}

      width={460}
        slidesPerView={8}
         spaceBetween={10}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <img onClick={() => imageClick()} src={"https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwY2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" width="120%" style={{marginLeft: 20}}/>
            </SwiperSlide>
        <SwiperSlide>
        <img src={"https://i.scdn.co/image/ab67706c0000bebb234e572f27e2e5518d25eedc"} alt="" width="120%" style={{marginLeft: 20}}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={"https://assets.traveltriangle.com/blog/wp-content/uploads/2019/07/Jacksonville-Cafes.jpg"} alt="" width="140%" style={{marginLeft: 20}}/>
            </SwiperSlide>
        <SwiperSlide>
        <img src={"https://www.holidify.com/images/cmsuploads/compressed/daan-evers-tKN1WXrzQ3s-unsplash_20201202134020.jpg"} alt="" width="117%" style={{marginLeft: 20}}/>
            </SwiperSlide>
        
      </Swiper>
  );
};