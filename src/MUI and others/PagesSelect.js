import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PagesSelect() {
  const [ setPages] = React.useState('');

  const handleChange = (event) => {
    setPages(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Pages"
          onChange={handleChange}
        >
          <MenuItem>About</MenuItem>
          <MenuItem>Archive</MenuItem>
          <MenuItem>Contact us</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
