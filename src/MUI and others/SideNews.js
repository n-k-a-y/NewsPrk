import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  maxWidth: 360,
  bgcolor: 'whitesmoke',
  marginTop: 2,
  float: "right"
};

export default function SideNews() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
          <img src={"http://newsprk.quomodosoft.com/static/media/tab1.81e238f1.jpg"} alt=""  width= "100px" height="77px" style={{paddingRight: 10}} />
          <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
          <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
        <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Copa America: Luis Suarez from devastated US.</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <img src={"http://newsprk.quomodosoft.com/static/media/tab2.4a35178d.jpg"} alt="" width= "100px" height="77px" style={{paddingRight: 10}} />
          <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
          <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
          <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Nancy Zhang, a Chinese busy woman and Dhaka</ListItemText>
      </ListItem>
      <ListItem button>
      <img src={"http://newsprk.quomodosoft.com/static/media/tab3.1470a81a.jpg"} alt=""  width= "100px" height="77px"style={{paddingRight: 10}} />
          <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
          <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
          <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >U.S. Response subash says he will label regions by risk of...
          </ListItemText>      </ListItem>
      <Divider light />
      <ListItem button>
      <img src={"http://newsprk.quomodosoft.com/static/media/tab4.b5c547ba.jpg"} alt=""  width= "100px" height="77px" style={{paddingRight: 10}} />
          <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
          <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
          <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Venezuela elan govt and opposite the property collect.</ListItemText>  </ListItem>
          <Divider/>
          <ListItem button>
          <img src={"http://newsprk.quomodosoft.com/static/media/tab5.b44c7b12.jpg"} alt=""  width= "100px" height="77px" style={{paddingRight: 10}} />
          <h3 style={{position: "absolute", fontSize: 12, marginLeft: 100, marginBottom: 70, color: "dodgerblue"}}>TECHNOLOGY</h3>
          <div style={{position: "absolute", fontSize: 12, marginLeft: 190, marginBottom: 70, color: "grey", marginTop: 10}}>/15 June, 2022</div>
        <ListItemText primaryTypographyProps={{fontSize: '13px', marginTop: "20px"}} >Cheap smartphone sensor could help you old food safe.</ListItemText>
      </ListItem>
    </List>
  );
}
