import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';

export default function FSlide() {
  const current = new Date();
  const date = `July ${current.getDate()}, ${current.getFullYear()}`;
  return ( <>
    <h1 style={{marginLeft: 50, fontStyle: "italic"}}>Feature News</h1>
    <Swiper
       style={{width: "100%", paddingBottom: 50}}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      <div style={{position: "relative"}}>
        <SwiperSlide>
          <div id='featureNews'>
            <img src={"http://newsprk.quomodosoft.com/static/media/feature2.be97b50f.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
            <b><a href="url" style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12}}>TECHNOLOGY / {date}</a>
            <a href="url" style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15}}>Best garden wing supplies for the horticu ltural</a></b>
          </div>  
            </SwiperSlide>
        <SwiperSlide>
        <div id='featureNews'>
            <img src={"http://newsprk.quomodosoft.com/static/media/feature3.3f5ab883.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
            <b><a href="url" style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12}}>TECHNOLOGY / {date}</a>
            <a href="url" style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15}}>Copa America: Luis Suarez from devastated US.</a></b>
          </div>  
            </SwiperSlide>

        <SwiperSlide>
        <div id='featureNews'>
        <img src={"http://newsprk.quomodosoft.com/static/media/feature4.e2e49bfc.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
        <b><a href="url" style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12}}>TECHNOLOGY / {date}</a>
            <a href="url" style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15}}>Best garden wing supplies for the horticu ltural</a></b>
          </div>  
            </SwiperSlide>
            
        <SwiperSlide>
          <div id='featureNews'>
            <img src={"http://newsprk.quomodosoft.com/static/media/feature3.3f5ab883.jpg"} alt="" width="255px" height="320px" style={{marginLeft: 20}}/>
            <b><a href="url" style={{position: "absolute", bottom: "80px",left: "30px", fontSize: 12}}>TECHNOLOGY / {date}</a>
            <a href="url" style={{position: "absolute", bottom: "30px",left: "30px", fontSize: 15}}>Copa America: Luis Suarez from devastated US.</a></b>
            </div>
          </SwiperSlide>
            
        </div>
      </Swiper>
      </>
  );
};