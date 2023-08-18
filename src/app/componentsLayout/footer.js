import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Logo from './logo';

export default function Footer() {
  return (
    <footer style={footerStyles}>
      <Logo
        route=''
        image='https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-cactus-flower-png-image_7008872.png'
        description='The logo of a cactus with red flower on it'
        width={25}
        height={25}
      />
      <Typography sx={{ pl: 1 }}>Draco Lux Hoard of Crafts</Typography>
      <CopyrightIcon fontSize='small' sx={{ px: 1 }} />
      <Typography>2023</Typography>
    </footer>
  );
}

const footerStyles = {
  display: 'flex',
  flexDirection: 'row',
  border: 'solid darkseagreen',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed', // Set the footer to a fixed position
  bottom: 0, // Stick it to the bottom
  width: '100%', // Make it span the entire width
  backgroundColor: 'white', // Set a background color if needed
  padding: '10px', // Add some padding to the footer
};
