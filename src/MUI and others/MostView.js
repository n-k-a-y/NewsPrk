import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';




export default function MostView() {
  const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'whitesmoke',
  marginTop: 20
};

  return (<>
      <h2 >Most View</h2>

      <Swiper
        style={{width: "40%", marginTop: 20}}
        slidesPerView={1}
      // spaceBetween={5}
     
      className="mySwiper"
      >
      <SwiperSlide>
      <div >

            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                  <img src={"https://media.istockphoto.com/photos/come-join-us-for-a-coffee-picture-id1150956580?k=20&m=1150956580&s=612x612&w=0&h=A6xv5WT5YJtj-9eGHL17MZ0DFDIXjAZQbzVBGjYB7R0="} alt="" width= "90px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Copa America: Luis Suarez from devastated US.</ListItemText>
                <h1 style={{color: "grey"}}>1</h1>
              </ListItem>
              <Divider />
              <ListItem button divider>
              <img src={"https://i.pinimg.com/originals/bd/62/94/bd629455ccb838f04cebeac5d82c0d50.jpg"} alt="" width= "90px" height="80px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                  <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Nancy Zhang, a Chinese busy woman and Dhaka</ListItemText>
                  <h1 style={{color: "grey"}}>2</h1>
              </ListItem>
              <ListItem button>
              <img src={"https://numpaint.com/wp-content/uploads/2020/08/aesthetic-blue-old-car-paint-by-numbers.jpg"} alt="" width= "110px" height="80px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                  <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >U.S. Response subash says he will label regions by risk of...
                  </ListItemText>
                  <h1 style={{color: "grey"}}>3</h1>
              </ListItem>
              <Divider light />
              <ListItem button>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgYHDTlfXGhDoj-034SXNgWV1ojLeU5uwAw&usqp=CAU"} alt="" width= "75px" height="80px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                  <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Venezuela elan govt and opposite the property collect.</ListItemText>
                  <h1 style={{color: "grey"}}>4</h1>
                        </ListItem>
                  <Divider/>
                  <ListItem button>
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWIwzszkkm39g1_o-EofzHuXIACqOW1gZfg&usqp=CAU"} alt="" width= "75px" height="100px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Cheap smartphone sensor could help you old food safe.</ListItemText>
                <h1 style={{color: "grey"}}>5</h1>
              </ListItem>
            </List>
          </div>
              </SwiperSlide>


      <SwiperSlide>
          <div >
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                  <img src={"https://media.istockphoto.com/photos/come-join-us-for-a-coffee-picture-id1150956580?k=20&m=1150956580&s=612x612&w=0&h=A6xv5WT5YJtj-9eGHL17MZ0DFDIXjAZQbzVBGjYB7R0="} alt="" width= "90px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Copa America: Luis Suarez from devastated US.</ListItemText>
                <h1 style={{color: "grey"}}>6</h1>
              </ListItem>
              <Divider />
              <ListItem button divider>
              <img src={"https://i.pinimg.com/originals/bd/62/94/bd629455ccb838f04cebeac5d82c0d50.jpg"} alt="" width= "90px" height="80px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                  <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Nancy Zhang, a Chinese busy woman and Dhaka</ListItemText>
                  <h1 style={{color: "grey"}}>7</h1>
              </ListItem>
              <ListItem button>
              <img src={"https://numpaint.com/wp-content/uploads/2020/08/aesthetic-blue-old-car-paint-by-numbers.jpg"} alt="" width= "110px" height="80px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                  <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >U.S. Response subash says he will label regions by risk of...
                  </ListItemText>
                  <h1 style={{color: "grey"}}>8</h1>
              </ListItem>
              <Divider light />
              <ListItem button>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgYHDTlfXGhDoj-034SXNgWV1ojLeU5uwAw&usqp=CAU"} alt="" width= "75px" height="80px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                  <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Venezuela elan govt and opposite the property collect.</ListItemText>
                  <h1 style={{color: "grey"}}>9</h1>
                        </ListItem>
                  <Divider/>
                  <ListItem button>
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWIwzszkkm39g1_o-EofzHuXIACqOW1gZfg&usqp=CAU"} alt="" width= "75px" height="100px" style={{paddingRight: 10}} />
                  <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
                  <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
                <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Cheap smartphone sensor could help you old food safe.</ListItemText>
                <h1 style={{color: "grey"}}>10</h1>
              </ListItem>
            </List>
          </div>    
          </SwiperSlide>

      </Swiper>


    </>
  );
}


