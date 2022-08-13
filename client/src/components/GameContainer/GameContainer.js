import * as React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../GameContainer/GameContainer.css';

import  GameCards  from '../GameCards/GameCards';

export default function GameContainer() {
  return (
    <Container className="card-container" maxWidth="lg">
      <Box className='box'sx={{ flexGrow: 1 ,bgcolor: '#f0fff0', height: '100vh' }}>
      <Grid className='game-grid'container justifyContent='space-evenly' spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <GameCards /> 
         <GameCards /> 
         <GameCards /> 
         
      </Grid>
      <Grid className='game-grid'container justifyContent='space-evenly' spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <GameCards /> 
         <GameCards /> 
         <GameCards /> 
         
      </Grid>
      </Box>
      </Container>
  );
}