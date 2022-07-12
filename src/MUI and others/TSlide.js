import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import '../../src/Homepage.css'

export default function TSlide() {
  const current = new Date();
  const date = `July ${current.getDate()}, ${current.getFullYear()}`;
  return (
    <>
       <h2 style={{marginLeft: 50}}>Trending News</h2>
      <Swiper
      id='homeSlideFlw'
        style={{width: 800, height: 500}}
        slidesPerView={2}
         spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='item'>
            <div style={{ color: "black"}}>
              <img src='http://newsprk.quomodosoft.com/static/media/trendbig1.cef620c6.jpg' alt='' width={355}/>
              <b><a href='' style={{ bottom: "140px",left: "30px", fontSize: 15, color: "dodgerblue" }}>TECHNOLOGY</a></b>
              <a href='' style={{ bottom: "140px",left: "30px", fontSize: 15, color: "grey" }}>/{date}</a>
              <b><p><a href='' style={{ bottom: "70px",left: "30px", fontSize: 25, color: "black"}}>There may be no consoles in the future as exec says</a></p></b>
              <p style={{  bottom: "20px",left: "30px", fontSize: 15, color: "grey"}}>The property, complete with a 30-seat screening from room, a 100-seat amphitheatre and a swimming pond with sandy shower...</p>
            </div>
            </SwiperSlide>
        <SwiperSlide className='item'>
          <div style={{ color: "black"}}>
              <img src='http://newsprk.quomodosoft.com/static/media/trendbig2.17b0470b.jpg' alt='' width={355}/>
              <b><a href='' style={{ bottom: "140px",left: "30px", fontSize: 15, color: "dodgerblue" }}>TECHNOLOGY</a></b>
              <a href='' style={{ bottom: "140px",left: "30px", fontSize: 15, color: "grey" }}>/{date}</a> 
              <b><p/><a href='' style={{ bottom: "70px",left: "30px", fontSize: 25, color: "black"}}>Japan’s virus success has puzzled the world. Is its luck running out? </a></b>
              <p/><a href='' style={{  bottom: "20px",left: "30px", fontSize: 15, color: "grey"}}>The property, complete with a 30-seat screening from room, a 100-seat amphitheatre and a swimming pond with sandy shower...</a>
            </div>
            </SwiperSlide>
        
      </Swiper>
    </>
  );
}
