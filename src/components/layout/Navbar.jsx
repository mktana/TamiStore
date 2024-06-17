import { AppBar, Typography, Toolbar, Box, IconButton } from '@mui/material';
import {Link} from 'react-router-dom'
import { BiMessageRoundedDots } from "react-icons/bi";


function Navbar() {
  return (
    <Box>
    <AppBar position='static'>
      <Toolbar>
       <IconButton size='large' edge="start" aria-label='icon' sx={{display:{xs: 'none', md: 'flex'}}}>
        <Link to='/'>
          <BiMessageRoundedDots color='orange' />
          </Link>
        </IconButton>
      
        <Typography variant='h5' fontWeight='600' component="div" sx={{flexGrow: 1}} >
                GLASSIX-SITE
        </Typography>
    </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar