import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 5,
        marginLeft: 10,
        '& > *': {
          m: 1,
        },
      }}
    >
      
      <ButtonGroup variant="text" aria-label="text button group">
         <a href='https://twitter.com/'> <Button><TwitterIcon/></Button>  </a>
          <Button><FacebookIcon/></Button>
          <Button><YouTubeIcon/></Button>
          <Button><InstagramIcon/></Button>
      </ButtonGroup>
    </Box>
  );
}