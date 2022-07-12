import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LanguageSelect() {
    const [language, setLanguage] = React.useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return ( 
        <Box sx = {
            {
                width: 120,
                color: "blue",
            }
        } >
        <FormControl fullWidth >
        <InputLabel id = "demo-simple-select-label" > Language </InputLabel> 
        <Select labelId = "demo-simple-select-label"
        id = "demo-simple-select"
        value = { language }
        label = "Language"
        onChange = { handleChange } >
        
        <MenuItem value = { 10 }> English </MenuItem> 
        <MenuItem value = { 20 }> Armenian </MenuItem> 
        <MenuItem value = { 30 }> Russian </MenuItem> 
        <MenuItem value = { 40 }> Chinese </MenuItem>

       
         </Select> 
        </FormControl> 
        </Box>
    );
}