import React from 'react';
import '../../src/NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeSelect from "../MUI and others/HomeSelect"
import PagesSelect from "../MUI and others/PagesSelect"
import PostsSelect from "../MUI and others/PostsSelect"
import CategoriesSelect from "../MUI and others/CategoriesSelect"
import { Button } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageSelect from "../MUI and others/LanguageSelect"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TrendingCarousel from '../MUI and others/TrendingCarousel'
import { Link } from 'react-router-dom';
import DD from './DD';
import Search from './Search';



function NavBar () {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    return (<>
    <Search/>
    <div style={{marginLeft: "8%", marginRight: "8%"}}>
     <div style={{borderBottom: "1px dashed grey"}} id='navbarTop'>
        <div className='navbar-flex-item' style={{backgroundColor: "tomato", width: 100, height: 30, color: "white"}}>Trending</div>
        <div className='navbar-flex-item' style={{width: "63%", color: "grey"}}><TrendingCarousel/></div>
        <div className='navbar-flex-item' style={{borderRight: "1px solid grey", color: "grey"}}>{date}</div>
        <div className='navbar-flex-item' style={{color: "grey"}}>
            <TwitterIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
        </div>
    </div>
    <div  id='navbarMain'>
    <div> <FeedIcon className='navbar-flex-item' style= {{ marginTop: 30, color: "#269BFF", fontSize: 40, position: "absolute"}}/>
        <div >  <h1 style={{paddingLeft: 70, fontFamily: "serif", fontSize: 40}} >Newsprk</h1></div></div>
        {/* <div className='navbar-flex-item' style={{backgroundColor: "grey", width: "50%", height: 100, marginTop: 40, color: "white"}}>
            <div id='navbarAd' style={{marginTop: 5}}>
                <div className='navbar-flex-item'>
                  <h1>  <FeedIcon/>
                    Newspark</h1>
                </div>
                <div className='navbar-flex-item' style={{borderLeft: "1px solid white", borderRight: "1px solid white" }}>
                    Newspark responsive newspaper and <br/> magazine Wordpress theme.
                </div>
                <div className='navbar-flex-item'>
                    ADS 
                    <br/>670X85px Area!
                </div>
            </div>
        </div>           */}
    </div>
       
    <div id='navbarMain'>
        <div className='navbar-flex-item'>
               <DD/> 
        </div>

        <div className='navbar-flex-item'>
            <Button style= {{color: "black", backgroundColor: "#EBECF0", height: 45, textTransform: "none", fontFamily: "monospace", fontWeight: "bold", fontSize: 13}}>World</Button>
        </div>
        <div className='navbar-flex-item'>
        <Button style= {{color: "black", backgroundColor: "#EBECF0", height: 45, textTransform: "none", fontFamily: "sans-serif",  fontFamily: "monospace", fontWeight: "bold", fontSize: 13}}>Sports</Button>
        </div>
        <div className='navbar-flex-item'>
        <Button style= {{color: "black", backgroundColor: "#EBECF0", height: 45, textTransform: "none", fontFamily: "sans-serif",  fontFamily: "monospace", fontWeight: "bold", fontSize: 13}}>Contact</Button>
        </div>
        <div className='navbar-flex-item'> 
            <SearchIcon style = {{ marginTop: 15, color: "grey", fontSize: 35}}/>
            <AccountCircleIcon style = {{marginTop: 15, color: "grey",  fontSize: 35}}/>
        </div>
        <div className='navbar-flex-item'>
            <LanguageSelect/>
        </div>
        <div >
            <WbSunnyIcon style={{color: "#269BFF", marginTop: 8, fontSize: 40,position: "absolute"}}/>
            <h2 style= {{ marginTop: 0, position: "absolute", marginLeft: 45}}>20°C</h2>
            <h4 style= {{color: "grey", marginTop: 30, position: "absolute", marginLeft: 45}}>Yerevan</h4>
        </div>
    </div>
     </div>
            </>
    )
            }
          

export default NavBar;