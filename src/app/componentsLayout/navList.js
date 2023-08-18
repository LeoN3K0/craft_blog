'use client';

import React, { forwardRef } from 'react';
import { Tabs, Tab } from '@mui/material';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'About', href: '/about' },
];

const LinkTab = forwardRef(({ href, ...rest }, ref) => (
  <Link href={href} passHref ref={ref} legacyBehavior>
    <Tab component='a' {...rest} />
  </Link>
));
LinkTab.displayName = 'LinkTab';

export default function NavList({ orientation }) {
  return (
    <Tabs
      value={false}
      textColor='primary'
      indicatorColor='primary'
      orientation={orientation}
    >
      {links.map((link, index) => (
        <LinkTab
          key={index}
          label={link.name}
          href={link.href}
          sx={{
            color: 'white',
            borderBottom:
              orientation === 'vertical' ? '1px solid white' : 'none',
            '&:hover': {
              color: 'orange',
              borderBottom: '1px solid orange',
              textShadow: `0 0 7px white, 
                        0 0 10px white, 
                        0 0 21px orange, 
                        0 0 42px orange, 
                        0 0 82px orange, 
                        0 0 92px orange, 
                        0 0 102px orange, 
                        0 0 151px orange`,
            },
          }}
        />
      ))}
    </Tabs>
  );
}
