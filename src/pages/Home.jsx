import { Box, Container } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="l" sx={{ border: '1px solid black' }}>
      <Box
        sx={{
          border: '1px solid orange',
          height: '770px',
          //width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        }}
      >
        Home
      </Box>

    </Container>
  );
}

export default Home;
