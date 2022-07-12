import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useNavigate } from "react-router-dom";

export default function HomeSelect() {
  const [ setHome] = React.useState('');

  const handleChange = (event) => {
    setHome(event.target.value);
  };
  // const navigate = useNavigate()
  //  function handleSubmit(event) {
  //   event.preventDefault();
  //   navigate("../success", { replace: true });
  // }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Home</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Home"
          onChange={handleChange}
        >
          <Link style={{color: "black"}} to="/home" > <MenuItem >Home 1</MenuItem></Link>
          <Link style={{color: "black"}} to="/homeDark" > <MenuItem >Home Dark</MenuItem></Link>
          <MenuItem >Home 2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
