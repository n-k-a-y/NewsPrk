import React from "react"
import FeedIcon from '@mui/icons-material/Feed';
import '../Footer.css'
import VariantButtonGroup from "./ButtonGroup";
import Twitter from "@mui/icons-material/Twitter";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Button } from "@mui/material";

function Footer(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div 
         style={{backgroundColor: "#17222B", color: "white"}}
        > 
            <div style={{marginLeft: "8%", marginRight: "8%"}}>  
                         <FeedIcon style= {{ color: "blue", fontSize: 40}}/>
                        <h1>Newsprk</h1>
                        <VariantButtonGroup/>
            <Button style={{ float: "right",backgroundColor: "#1091FF", color: "white", height: 55}}>SING UP</Button>
           <input style={{float: "right", width: 200, height: 50}} type={"email"} placeholder="Your email address."/>
              
                 <div id="main" style={{borderTop:"1px dashed grey"}}>
                    <div className="footer1"  style={{borderRight:"1px dashed grey", marginTop: 20, height: "300px", paddingLeft: 40}}>
                        <h2 style={{color:"#17222B" }} >News Categories</h2>
                        <div className="firstColumn" >
                            <a href="url" className="footerText">Politics</a>       
                           <p/> <a className="footerText" href="url">Business</a>  
                           <p/>  <a className="footerText" href="url">TECHNOLOGY</a>   
                           <p/> <a className="footerText" href="url">Science</a>   
                           <p/>  <a className="footerText" href="url">Health</a>    
                           <p/>  <a className="footerText" href="url">Sports</a>   
                           <p/> <a className="footerText" href="url">Entertainment</a> 

                        </div>
                        <div className="secondColumn" style={{marginLeft: 100}}>
                            <a className="footerText" href="url">Education</a>       
                            <p/> <a  className="footerText" href="url">Obituaries</a>
                            <p/>  <a  className="footerText" href="url">Corrections</a>
                            <p/> <a  className="footerText" href="url">Education</a>
                            <p/>  <a  className="footerText" href="url">Today’s Paper</a>
                            <p/> <a  className="footerText" href="url">Corrections</a>
                            <p/> <a className="footerText" href="url">Food</a>
                        </div>
                    </div>
            <div className="footer2" style={{ marginTop: 20, height: "300px", paddingLeft: 40}} >
                <h2 >Living</h2>
                    <div className="firstColumn">
                        <a className="footerText" href="url">Crossword</a>             
                        <p/> <a className="footerText" href="url" >Food</a>     
                        <p/><a className="footerText" href="url">Automobiles</a>  
                        <p/><a className="footerText" href="url">Education</a>  
                        <p/><a className="footerText" href="url">Health</a>  
                        <p/><a className="footerText" href="url">Magazine</a>   
                        <p/><a className="footerText" href="url">Weddings</a>  

                    </div>
                <div className="secondColumn" style={{marginLeft: 100}}>
                       <p/> <a  className="footerText" href="url">Classifieds</a>       
                       <p/> <a  className="footerText" href="url">Photography</a>
                       <p/> <a  className="footerText" href="url">NYT Store</a>
                       <p/><a className="footerText" href="url">Journalism</a>
                       <p/><a className="footerText" href="url">Public Editor</a>
                       <p/> <a className="footerText" href="url">Tools & Services</a>
                       <p/> <a className="footerText" href="url">My Account</a>
                </div>
            </div>
        
            <div style={{borderLeft:"1px dashed grey",marginTop: 20}} id="footer3">
                <h2 style={{paddingLeft: 10}}>More news</h2>
                <div className="flex-item" style={{borderBottom:"1px dashed grey", marginLeft: 40, marginRight: 40}} >
                    <h1 style={{marginLeft: 310, position: "absolute", color: "grey", padding: 0}}>1</h1>

                    <sub>TECHNOLOGY / June 23, 2022</sub>
                    <p> Nancy Zhang, a chinese busy woman and dhaka</p> 
                </div>
                <div className="flex-item" style={{borderBottom:"1px dashed grey", marginLeft: 40, marginRight: 40}}>
                  <h1 style={{marginLeft: 310, position: "absolute", color: "grey", padding: 0}}>2</h1>

                  <sub> TECHNOLOGY / June 23, 2022</sub>
                  <p>  Nancy Zhang, a chinese busy woman and dhaka</p>
                </div>
                <div className="flex-item" style={{borderBottom:"1px dashed grey", marginLeft: 40, marginRight: 40}}>
                    <h1 style={{marginLeft: 310, position: "absolute", color: "grey", padding: 0}}>3</h1>

                    <sub> TECHNOLOGY / June 23, 2022</sub>
                    <p>  Nancy Zhang, a chinese busy woman and dhaka</p>

                </div>
                <div className="flex-item" style={{borderBottom:"1px dashed grey", marginLeft: 40, marginRight: 40}}>
                    <h1 style={{marginLeft: 310, position: "absolute", color: "grey", padding: 0}}>4</h1>

                    <sub> TECHNOLOGY / June 23, 2022</sub>
                    <p>  Nancy Zhang, a chinese busy woman and dhaka</p>

                </div>
                <div className="flex-item" style={{ marginLeft: 40, marginRight: 40}}>
                <h1 style={{marginLeft: 310, position: "absolute", color: "grey", padding: 0}}>5</h1>
                <sub> TECHNOLOGY / June 23, 2022</sub>
                  <p>  Nancy Zhang, a chinese busy woman and dhaka</p>

                </div>
            </div>
           
                </div>
                       <div id="opinionTwitter" style={{borderTop: "1px dashed grey"}}>
                        <div className="opItem" style={{borderRight: "1px dashed grey", marginTop: 30}}>
                <h2>Opinion</h2>
                <a  className="footerText" href="url">Today’s Opinion</a>       
                       <p/> <a  className="footerText" href="url">Op-Ed Contributing</a>
                       <p/> <a  className="footerText" href="url">Contributing Writers</a>
                       <p/><a className="footerText" href="url">Business News</a>
                       <p/><a className="footerText" href="url">Collections</a>
                       <p/> <a className="footerText" href="url">Today’s Paper</a>
                       <p/> <a className="footerText" href="url">Saturday Review</a>
                       <p/> <a className="footerText" href="url">Product Review</a>
</div>

            <div id="footer3" className="opItem" style={{width: "50%", marginTop: 30}}>
                <h2>Twitter feed</h2>
                <div className="flex-item">
                    <Twitter style={{color: "#1091FF"}}/>
                Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project…<div style={{color:"#1091FF" }}> @newspark #TECHNOLOGY https://dribbble.com/subash_chandra</div>
               <p style={{color: "grey"}}>{date}</p>
                </div>
                <div className="flex-item" style={{borderTop: "1px dashed grey"}}>
                    <Twitter style={{color: "#1091FF" }}/>
                Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project…<div style={{color:"#1091FF" }}> @newspark #TECHNOLOGY https://dribbble.com/subash_chandra</div>
                <p style={{color: "grey"}}>{date}</p>
                </div>
                <div className="flex-item" style={{ borderTop: "1px dashed grey"}}>
                    <Twitter style={{color: "#1091FF"}}/>
                Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project… <div style={{color:"#1091FF" }}> @newspark #TECHNOLOGY https://dribbble.com/subash_chandra</div>
                <p style={{color: "grey"}}>{date}</p>
                </div>
            </div>
            <div className="opItem" style={{borderLeft: "1px dashed grey", marginTop: 30}}>
            <h2>Newspark news services</h2>

            <PhoneAndroidIcon/>
            On your mobile

          <p/>  <MicNoneOutlinedIcon/>
            On smart speakers

           <p/> <EmailOutlinedIcon/>
            Contact Newspark news
            </div>
        </div>
            
        </div>      
        <div style={{backgroundColor: "#232D36", color: "grey", height: 80 ,marginTop: 20, alignItems: "center"}}>
           ©Copyright 2020, All Rights Reserved
           <span style={{float: "right"}}>About Advertise Privacy & Policy Contact us </span>
            </div>
    </div>
    )
}

export default Footer