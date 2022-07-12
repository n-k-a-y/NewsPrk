import React from "react";
import "../../src/Video.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Video (){
  const current = new Date();
  const date = `July ${current.getDate()}, ${current.getFullYear()}`;
    return (

      <div style={{position: "relative",
        }}>
 {/* <video 
  style={{ marginTop: 30, paddingLeft: 100}} 
 src={"video1"} width="100%"  controls="controls"  autoPlay={true} /> */}

        <img src="http://newsprk.quomodosoft.com/static/media/sider-top.cd20cea8.jpg" alt="" width="130%"/> 
        <a href="https://www.youtube.com/"><PlayCircleIcon style={{ position: "absolute", top: "8px",left: "640px", color: "red", fontSize: 50}}/></a>
        <a href="" style={{position: "absolute", bottom: "140px",left: "30px", fontSize: 15}}>TECHNOLOGY / {date}</a>
        <a href="" style={{position: "absolute", bottom: "70px",left: "30px", fontSize: 25}}>Japan’s virus success has puzzled the world. Is its luck running out? </a>
        <a href="" style={{position: "absolute",  bottom: "20px",left: "30px", fontSize: 15}}>The property, complete with a 30-seat screening from room, a 100-seat amphitheatre and a swimming pond with sandy shower...</a>
              </div>
    );
  }


export default Video;