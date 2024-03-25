'use client';

import React, { useState } from 'react'
import Image from 'next/image';

import Button from '@components/Button/Button';
import Navbar from '@components/Navbar/Navbar';

import logoSVG from '@assets/icons/logo.svg';
import menuSVG from '@assets/icons/menu.svg';
import Link from 'next/link';

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
      <div className="bg-blue-100 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href='/'>
            <Image
              src={logoSVG}
              width={50}
              alt=""
            />
          </Link>
          <h1 className="pl-2">Capellari Muebles</h1>
        </div>
        <div>
          <Button onClick={() => setOpenNavbar((state) => !state)}>
            <Image src={menuSVG} width={30} alt="cart" />
          </Button>
        </div>
      </div>

      <Navbar isOpen={openNavbar} onClose={() => setOpenNavbar(false)} />
    </>
  )
}

export default Header
