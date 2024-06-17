import { Box, Container } from '@mui/material';

function Home() {
  return (
    <Container sx={{ border: '1px solid black' }}>
      <Box
        sx={{
          border: '1px solid black',
          height: '800px',
          //width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
          bgcolor: 'primary.main',
        }}
      >
        Home
      </Box>

    </Container>
  );
}

export default Home;
