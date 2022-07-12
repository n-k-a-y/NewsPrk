import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../src/Homepage.css"



export default function FollowUs(){
    return(
        <>
        <h2>Follow us</h2>
            <div id="flw">

                <div className="flwItem" style={{backgroundColor: "darkblue", position: "absolute", width: 100, height: 50, color: "white"}}> 
                <FacebookIcon style={{marginTop: 10, position: "absolute"}}/>
                <div style={{marginLeft: 40}}>34,456 
                Fans</div></div>

                <div className="flwItem" style={{backgroundColor: "deepskyblue", position: "absolute", marginLeft: 125, width: 100, height: 50, color: "white"}}> 
                <TwitterIcon style={{marginTop: 10, position: "absolute"}}/>
                <div style={{marginLeft: 30}}>34,456 
                Followers</div></div>


                <div className="flwItem" style={{backgroundColor: "red", position: "absolute", marginLeft: 250, width: 110, height: 50, color: "white"}}> 
                <YouTubeIcon style={{marginTop: 10, position: "absolute"}}/>
                <div style={{marginLeft: 25}}>34,456 
                Subscribers</div></div>


                <div className="flwItem" style={{backgroundColor: "purple", position: "absolute", marginTop: 75, width: 100, height: 50, color: "white"}}> 
                <InstagramIcon style={{marginTop: 10, position: "absolute"}}/>
                <div style={{marginLeft: 30}}>34,456 
                Followers</div></div>


                <div className="flwItem" style={{backgroundColor: "skyblue", position: "absolute", marginLeft: 125, marginTop: 75, width: 100, height: 50, color: "white"}}> 
                {/* <FontAwesomeIcon icon="fa-brands fa-vimeo" style={{marginTop: 10, position: "absolute"}}/>  */}
                <div style={{marginLeft: 40}}>34,456 
                Fans</div></div>



                <div className="flwItem" style={{ backgroundColor: "darkblue", position: "absolute", marginLeft: 250, marginTop: 75, width: 110, height: 50, color: "white"}}> 
                <LinkedInIcon style={{marginTop: 10, position: "absolute"}}/>
                <div style={{marginLeft: 23}}>34,456 
                Connections</div></div>
            </div>
        </>
    )
}