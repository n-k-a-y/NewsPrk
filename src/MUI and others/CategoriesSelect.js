import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export default function CategoriesSelect() {
  const [ setCategories] = React.useState('');

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Categories"
          onChange={handleChange}
        >
           <Link style={{color: "black"}} to="/business"><MenuItem>Business</MenuItem></Link>
           <Link style={{color: "black"}} to="/entertainment"><MenuItem>Entertainment</MenuItem></Link>
          <Link style={{color: "black"}} to="/feature"> <MenuItem>Features</MenuItem></Link>
          <Link style={{color: "black"}} to="/sports"><MenuItem>Sports</MenuItem></Link>
          <Link style={{color: "black"}} to="/trending"> <MenuItem>Trending</MenuItem></Link>
        </Select>
      </FormControl>
    </Box>
  );
}
