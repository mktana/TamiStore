import { Box, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

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
        <h1>Oops!</h1>
        <p>404v - Page Not Found</p>
        <Link to='/'>Back To Home Page</Link>
      </Box>
    </Container>
  );
}

export default NotFound;
