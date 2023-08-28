'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, Paper, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css';

export default function RecentPosts() {
  const dummyPosts = [
    {
      title: 'Post 1',
      imageUrl: '/landscape1.jpg',
    },
    {
      title: 'Post 2',
      imageUrl: '/landscape2.jpg',
    },
    {
      title: 'Post 3',
      imageUrl: '/landscape3.jpg',
    },
    {
      title: 'Post 4',
      imageUrl: '/landscape4.jpg',
    },
    {
      title: 'Post 5',
      imageUrl: '/landscape5.jpg',
    },
  ];

  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentPostIndex(next % dummyPosts.length);
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Paper
      elevation={0}
      sx={{
        marginTop: '100px',
        marginLeft: '20px',
        marginRight: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        style={{ maxWidth: 1200, width: 1200, height: 275 }}
        sx={{ backgroundColor: 'whitesmoke' }}
      >
        <Box sx={{ width: { xs: '80%', md: '90%' }, margin: '0 auto' }}>
          <Slider {...settings}>
            {dummyPosts.map((post, index) => (
              <Box key={index}>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    transform:
                      currentPostIndex === index ? 'scale(1)' : 'scale(0.8)',
                    transition: 'transform 0.3s',
                    position: 'relative',
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'whitesmoke',
                      width: '100%',
                      marginX: 1,
                      marginBottom: 2,
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                      transform: `scale(${
                        index === currentPostIndex ? 1 : 0.8
                      })`,
                      transition: 'transform 0.3s',
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='180'
                      image={post.imageUrl}
                      alt={`Post ${index + 1}`}
                      sx={{
                        borderBottom: '2px solid #862e8b',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        opacity: index === currentPostIndex ? 0 : 1,
                        pointerEvents: 'none',
                      }}
                    />
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ p: 2 }}
                    >
                      {post.title}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Card>
    </Paper>
  );
}
