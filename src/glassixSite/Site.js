//import { TextField, Button } from '@mui/material';
import './Site.css'

export default function Site() {
  return (
    <div className='grid-container'>
      <div className='sidebar'>
        <label className='search'>
          {/* <Button variant='contained'>Search</Button>
          <TextField
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            size='small'
          /> */}
        </label>
      </div>
      <div className='chat'></div>
      <div className='data'></div>
    </div>
  );
}