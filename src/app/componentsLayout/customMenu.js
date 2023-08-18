'use client';

import { Drawer, IconButton, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import NavList from './navList';
import Logo from './logo';
import { CoolText } from '../globalStyles';

export default function CustomMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (state) => {
    setOpen(state);
  };

  return (
    <div>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: 'darkseagreen' } }}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
          display='flex'
          flexDirection='column'
        >
          <Box
            sx={{
              alignSelf: 'center',
              paddingBottom: 1,
            }}
          >
            <Logo
              route='/'
              image='https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-cactus-flower-png-image_7008872.png'
              description='The logo of a cactus with red flower on it'
            />
          </Box>
          <Typography
            sx={{ alignSelf: 'center', paddingBottom: 2, color: 'white' }}
          >
            <CoolText>Draco Lux</CoolText> Hoard of Crafts
          </Typography>
          <NavList orientation='vertical' />
        </Box>
      </Drawer>
    </div>
  );
}
