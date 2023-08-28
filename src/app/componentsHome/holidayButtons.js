'use client';

import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import holidays from '../utils/holidayData';
import { useHolidayState } from '../utils/holidayStateContext';

export default function HolidayButtons({ season, seasonColor }) {
  const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);
  const { selectedHoliday, setSelectedHoliday } = useHolidayState();

  const filteredHolidays = holidays.filter(
    (holiday) => holiday.season === season
  );

  const sliderSettings = {
    infinite: true,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    centerPadding: '0',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentHolidayIndex(next % filteredHolidays.length);
      setSelectedHoliday(filteredHolidays[currentHolidayIndex].name);
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

  useEffect(() => {
    setSelectedHoliday(filteredHolidays[currentHolidayIndex].name);

    return () => {
      console.log(selectedHoliday);
    };
  }, [currentHolidayIndex]);

  return (
    <Box sx={{ width: '75%', marginY: 5 }}>
      <Slider {...sliderSettings}>
        {filteredHolidays.map((holiday, index) => (
          <Box
            key={index}
            sx={{
              marginX: { xs: '25%', sm: '10%', md: '25%' },
            }}
          >
            <Button
              variant='contained'
              sx={{
                width: '50%',
                marginTop: 0.05,
                transform: `scale(${index === currentHolidayIndex ? 1 : 0.8})`,
                transition: 'transform 0.3s',
                backgroundColor: seasonColor,
                '&:hover': {
                  backgroundColor: seasonColor,
                  opacity: 0.5,
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  opacity: index === currentHolidayIndex ? 0 : 1,
                  pointerEvents: 'none',
                }}
              />
              {holiday.name}
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
