'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import Button from '../Button/Button';

import logoSVG from '@assets/icons/logo.svg';
import menuSVG from '@assets/icons/menu.svg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(true);
  useEffect(() => {
    console.log(openNavbar)
  }, [openNavbar])
  return (
    <>
      <div className="bg-pink-100 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logoSVG}
            width={50}
            alt=""
          />
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
