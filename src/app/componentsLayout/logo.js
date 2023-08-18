'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ route, image, description, width, height }) {
  return (
    <>
      {route !== '' ? (
        <Link href={route}>
          <Image src={image} width={width} height={height} alt={description} />
        </Link>
      ) : (
        <Image src={image} width={width} height={height} alt={description} />
      )}
    </>
  );
}
