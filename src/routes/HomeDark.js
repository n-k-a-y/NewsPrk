import React from "react";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import NavBar from "../components/Navbar";
import Video from "../components/Video";
import Carousel from "../MUI and others/Carousel";
import FSlide from "../MUI and others/FSlide";
import MostView from "../MUI and others/MostView";
import PicSlide from "../MUI and others/PicSlide";
import SideNews from "../MUI and others/SideNews";
import TSlide from "../MUI and others/TSlide";

export default function HomeDark(){
    return(<>
    <div style={{backgroundColor: "#233340"}}><NavBar/></div>
    <div style={{backgroundColor: "#17222B" ,width: "100%"}}>
            <div style={{marginLeft: "8%", marginRight: "8%"}}>
            <Carousel/>
        
                <div id='homepageMain'>
                    <div className='homepageItem'><Video/></div>
                    <div className='homepageItem'><SideNews/></div>
                </div>  
            <PicSlide/>
            <FSlide/>     
            <div id='homeSlideFlw'>
                <div className='item'><TSlide/></div>
                <div className='item'><FollowUs/></div>
                <div className='item'> </div>
            </div>
              <MostView/>
              
             </div>
        </div>
        <Footer/>
  
        </>
    )
}