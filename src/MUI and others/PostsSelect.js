import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PostsSelect() {
  const [ setPosts] = React.useState('');

  const handleChange = (event) => {
    setPosts(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Posts</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Posts"
          onChange={handleChange}
        >
          <MenuItem >General Posts</MenuItem>
          <MenuItem >Video posts</MenuItem>
          <MenuItem >Audio Posts</MenuItem>
          <MenuItem >Sidebars</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
