import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Carousel() {
  
  return (
    <Swiper
    style={{width: "100%", marginTop: 20}}
      spaceBetween={50}
      slidesPerView={3}
      loop={true} 
    >
      <SwiperSlide>
          <img  src={"http://newsprk.quomodosoft.com/static/media/hside4.9619e50d.jpg"}   alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15}}>The home decoration document: photograph of an...
          </div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>
      </SwiperSlide>
      <SwiperSlide>
          <img src={"http://newsprk.quomodosoft.com/static/media/hside5.e0bfac1a.jpg"} alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15}}>U.S. Response subash says he will label regions by risk of...</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>

      </SwiperSlide>
      <SwiperSlide>
          <img src={"http://newsprk.quomodosoft.com/static/media/hside6.437dad9b.jpg"} alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15}}>Stimul package will transform the government fundamentally.</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>


      </SwiperSlide>
      <SwiperSlide>
      <img src={"http://newsprk.quomodosoft.com/static/media/hside1.7efb90e8.jpg"} alt="" width= "120px" style={{position: "absolute"}}/>
          <div style={{marginLeft: 140, fontSize: 15}}>U.S. Response subash says he will label regions by risk of...</div>
          <div style={{marginLeft: 140, fontSize: 15, color: "grey"}}>People have been infected</div>

      </SwiperSlide>
    </Swiper>
  );
};