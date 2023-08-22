'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';

const SocialIcons = () => {
  const socialLinks = [
    {
      href: 'https://github.com/LeoN3K0',
      icon: Facebook,
      color: 'rgba(46,139,87, 0.5)',
      text: 'FaceBook',
    },
    {
      href: '#',
      icon: Instagram,
      color: 'rgba(139,46,98, 0.5)',
      text: 'Instagram',
    },
    {
      href: '#',
      icon: Pinterest,
      color: 'rgba(46,139,87, 0.5)',
      text: 'Pinterest',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'fixed',
        top: '35%',
        left: 0,
        zIndex: 1000,
      }}
    >
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        const isHovered = index === hoveredIndex;
        return (
          <Link key={index} href={link.href} passHref legacyBehavior>
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{
                width: '160px',
                height: '60px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: isHovered ? '0px' : '-120px',
                transition: 'margin-left 0.3s',
                backgroundColor: link.color,
                textDecoration: 'none',
                color: 'white',
                paddingRight: '5px',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span style={{ marginLeft: 10 }}>{link.text}</span>
              <IconComponent style={{ fontSize: 30 }} />
            </a>
          </Link>
        );
      })}
    </Box>
  );
};

export default SocialIcons;
