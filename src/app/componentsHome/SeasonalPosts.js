'use client';

import {
  Paper,
  Typography,
  Card,
  CardMedia,
  Box,
  SvgIcon,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import HolidayButtons from './holidayButtons';
import { useHolidayState } from '../utils/holidayStateContext';
import FallIcon from '../componentsGlobal/FallIcon';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

export default function SeasonalPosts() {
  const { selectedHoliday } = useHolidayState();
  const seasons = [
    {
      name: 'Winter',
      icon: <AcUnitIcon />,
      color: '#3498db',
    },
    {
      name: 'Spring',
      icon: <LocalFloristIcon />,
      color: '#2ecc71',
    },
    {
      name: 'Summer',
      icon: <FlareIcon />,
      color: '#ffc6bd',
    },
    {
      name: 'Autumn',
      icon: <FallIcon />,
      color: '#e74c3c',
    },
  ];

  const now = new Date();
  const currentMonth = now.getMonth();

  const currentSeasonIndex =
    currentMonth >= 2 && currentMonth <= 4
      ? 1
      : currentMonth >= 5 && currentMonth <= 7
      ? 2
      : currentMonth >= 8 && currentMonth <= 10
      ? 3
      : 0;

  const currentSeason = seasons[currentSeasonIndex];

  return (
    <Paper
      elevation={0}
      square
      sx={{
        margin: '50px 0px',
        padding: '20px 0px',
      }}
    >
      <Grid2 container justifyContent='center'>
        <Grid2
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h5'
            paddingBottom={2}
            color={currentSeason.color}
            sx={{
              marginLeft: { xs: 0, md: 5 },
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            {currentSeason.icon}
            {currentSeason.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: { xs: 0, md: 5 },
            }}
          >
            <Card
              sx={{
                backgroundColor: 'whitesmoke',
                width: '40%',
                marginX: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component='img'
                height='180'
                image='/landscape3.jpg'
                alt="Blog Owner's Suggested Post Image"
                sx={{
                  borderBottom: '2px solid #862e8b',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              />
              <Typography variant='body2' color='text.secondary' sx={{ p: 2 }}>
                Post Title
              </Typography>
            </Card>
            <Card
              sx={{
                backgroundColor: 'whitesmoke',
                width: '40%',
                marginX: 2,
                '&:hover': {
                  transform: 'scale(1.05) ',
                  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component='img'
                height='180'
                image='/landscape3.jpg'
                alt="Blog Owner's Suggested Post Image"
                sx={{
                  borderBottom: '2px solid #862e8b',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              />
              <Typography variant='body2' color='text.secondary' sx={{ p: 2 }}>
                Post Title
              </Typography>
            </Card>
          </Box>
        </Grid2>
        <Grid2
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HolidayButtons
            season={currentSeason.name.toLowerCase()}
            seasonColor={currentSeason.color}
          />
        </Grid2>
        <Grid2
          xs={12}
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h5'
            paddingBottom={2}
            color={currentSeason.color}
            sx={{ marginRight: { xs: 0, md: 5 }, fontWeight: 'bold' }}
          >
            {selectedHoliday}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: { xs: 0, md: 5 },
            }}
          >
            <Card
              sx={{
                backgroundColor: 'whitesmoke',
                width: '40%',
                marginX: 2,
                '&:hover': {
                  transform: 'scale(1.05) ',
                  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component='img'
                height='180'
                image='/landscape5.jpg'
                alt="Community's Top Rated Post Image"
                sx={{
                  borderBottom: '2px solid #862e8b',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              />
              <Typography variant='body2' color='text.secondary' sx={{ p: 2 }}>
                Post Title
              </Typography>
            </Card>
            <Card
              sx={{
                backgroundColor: 'whitesmoke',
                width: '40%',
                marginX: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardMedia
                component='img'
                height='180'
                image='/landscape5.jpg'
                alt="Community's Top Rated Post Image"
                sx={{
                  borderBottom: '2px solid #862e8b',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              />
              <Typography variant='body2' color='text.secondary' sx={{ p: 2 }}>
                Post Title
              </Typography>
            </Card>
          </Box>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
