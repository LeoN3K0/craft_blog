'use client';

import React, { useState } from 'react';
import { Box, Card, Paper, Typography, IconButton } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const dummyPosts = [
  {
    title: 'Post 1',
    imageUrl: '/landscape1.jpg',
    content: 'Content for Post 1...',
  },
  {
    title: 'Post 2',
    imageUrl: '/landscape2.jpg',
    content: 'Content for Post 2...',
  },
  {
    title: 'Post 3',
    imageUrl: '/landscape3.jpg',
    content: 'Content for Post 3...',
  },
  {
    title: 'Post 4',
    imageUrl: '/landscape4.jpg',
    content: 'Content for Post 4...',
  },
  {
    title: 'Post 5',
    imageUrl: '/landscape5.jpg',
    content: 'Content for Post 5...',
  },
];

export default function RecentPosts() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const currentPost = dummyPosts[currentPostIndex];

  const handlePreviousPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : dummyPosts.length - 1
    );
  };

  const handleNextPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex < dummyPosts.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Paper
      elevation={0}
      style={{
        margin: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        style={{ maxWidth: 1200, width: 1200 }}
        sx={{ backgroundColor: 'whitesmoke' }}
      >
        <Grid2 container>
          <Grid2 xs={12} sx={{ padding: 2 }}>
            <Typography variant='h5'>{currentPost.title}</Typography>
          </Grid2>
          <Grid2
            xs={2}
            sm={1}
            md={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton onClick={handlePreviousPost}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Grid2>
          <Grid2
            xs={8}
            sm={10}
            md={10}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Image
              src={currentPost.imageUrl}
              alt='Your Image'
              width={700}
              height={350}
              style={{ width: '100%' }}
            />
          </Grid2>
          <Grid2
            xs={2}
            sm={1}
            md={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton onClick={handleNextPost}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid2>
          <Grid2 xs={12} sx={{ padding: 2 }}>
            <Typography>{currentPost.content}</Typography>
          </Grid2>
        </Grid2>
      </Card>
    </Paper>
  );
}
