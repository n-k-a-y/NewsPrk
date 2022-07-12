import Carousel from '../MUI and others/Carousel'
import SideNews from '../MUI and others/SideNews'
import Video from './Video'
import PicSlide from '../MUI and others/PicSlide'
import FSlide from '../MUI and others/FSlide'
import TSlide from '../MUI and others/TSlide'
import MostView from '../MUI and others/MostView'
import "../../src/Homepage.css"
import FollowUs from './FollowUs'



function HomePage(){
    return(
        <>
        <div style={{backgroundColor: "whitesmoke", width: "100%"}}>
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
        </>
    )
}

export default HomePage;