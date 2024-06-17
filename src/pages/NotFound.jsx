import { Link } from 'react-router-dom';
import { Box, Card, Container } from '@mui/material';

function NotFound() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Card sx={{height:'300px', width: '300px', bgcolor: '#e3f2fd', display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',}}>
        <h1>Oops!</h1>
        <p>404v - Page Not Found</p>
        <Link to='/'>
        Back To Home Page</Link>
        </Card>
      </Box>
    </Container>
  );
}

export default NotFound;
