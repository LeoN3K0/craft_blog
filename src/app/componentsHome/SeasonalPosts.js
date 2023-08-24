'use client';

import { Paper, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function SeasonalPosts() {
  const seasons = [
    {
      name: 'Winter',
      icon: 'winter-icon', // Replace with the actual winter icon class
      color: '#3498db', // Replace with the appropriate winter color
    },
    {
      name: 'Spring',
      icon: 'spring-icon', // Replace with the actual spring icon class
      color: '#2ecc71', // Replace with the appropriate spring color
    },
    {
      name: 'Summer',
      icon: 'summer-icon', // Replace with the actual summer icon class
      color: '#f39c12', // Replace with the appropriate summer color
    },
    {
      name: 'Fall',
      icon: 'fall-icon', // Replace with the actual fall icon class
      color: '#e74c3c', // Replace with the appropriate fall color
    },
  ];
  const now = new Date();
  const currentMonth = now.getMonth();

  // Determine the current season
  const currentSeason = seasons[Math.floor(((currentMonth + 1) % 12) / 3)];

  // Determine the next season
  const nextSeasonIndex =
    (currentMonth + 1) % 12 >= 9
      ? 0
      : Math.floor(((currentMonth + 1) % 12) / 3) + 1;
  const nextSeason = seasons[nextSeasonIndex];

  return (
    <Paper
      elevation={0}
      sx={{
        margin: '50px 20px',
        padding: '20px 0px',
      }}
    ></Paper>
  );
}
