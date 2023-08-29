import React from 'react';
import { Paper, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function WhyUs() {
  return (
    <Paper
      elevation={2}
      square
      sx={{
        backgroundColor: 'rgba(32, 178, 170, 0.2)',
        marginTop: '100px',
        marginY: 5,
        paddingX: 10,
        paddingY: 5,
      }}
    >
      <Grid2 container justifyContent='center' spacing={1}>
        <Grid2
          xs={12}
          sm={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' gutterBottom>
            Here at Draco Lux Hoards of Crafts
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          sm={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='body1'>
            We're more than just a crafting blog. We're passionate crafters
            dedicated to exploring the rich world of crafts and sharing the
            history and inspirations of every craft with you while weaving a
            story.
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' paddingBottom={2}>
            Inspiration
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ pr: 2 }}>
            We're here to inspire your creativity and help you discover new
            crafting ideas that you can incorporate into your projects.
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' paddingBottom={2}>
            Diversity
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ pl: 2 }}>
            We explore crafts from various cultures and traditions, giving you a
            well-rounded perspective on the world of crafting.
          </Typography>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
