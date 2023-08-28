'use client';

import { AppBar, Box, Typography } from '@mui/material';
import Logo from './logo';
import NavList from './navList';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SearchBar from './searchbar';
import CustomMenu from './customMenu';
import { CoolText } from '../globalStyles';

export default function NavBar() {
  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'darkseagreen' }}>
      <Grid2 container spacing={1}>
        <Grid2
          xs={1}
          sm={1}
          md={3}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <NavList orientation='horizontal' />
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <CustomMenu />
          </Box>
        </Grid2>
        <Grid2
          xs={5}
          sm={7}
          md={6}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                display: { xs: 'none', sm: 'block' },
                pr: 1,
              }}
            >
              <CoolText>Draco Lux</CoolText>
            </Typography>
            <Logo
              route='/'
              image='https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-cactus-flower-png-image_7008872.png'
              description='The logo of a cactus with red flower on it'
              width={75}
              height={75}
            />
            <Typography
              sx={{
                display: { xs: 'none', sm: 'block' },
                pl: 1,
              }}
            >
              Hoard of Crafts
            </Typography>
          </Box>
        </Grid2>
        <Grid2
          xs={6}
          sm={4}
          md={3}
          display='flex'
          alignItems='center'
          sx={{ pr: 2, justifyContent: 'flex-end' }}
        >
          <Box>
            <SearchBar />
          </Box>
        </Grid2>
      </Grid2>
    </AppBar>
  );
}
