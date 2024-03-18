import React from 'react'
import Image from 'next/image';

import Button from '../Button/Button';
import logoSVG from '@assets/icons/logo.svg';
import cartSVG from '@assets/icons/cart.svg';

const Header = () => {
  return (
    <div className="bg-green-200 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={logoSVG}
          width={50}
          alt=""
        />
        <h1 className="pl-2">ECOmarket</h1>
      </div>
      <div>
        <Button>
          <Image src={cartSVG} width={30} alt="cart" />
        </Button>
      </div>
    </div>
  )
}

export default Header
