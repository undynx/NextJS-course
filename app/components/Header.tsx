import React from 'react'
import Image from 'next/image';

import logoSVG from '@assets/icons/logo.svg';

const Header = () => {
  return (
    <div className="bg-green-200 p-4 flex items-center">
      <Image
        src={logoSVG}
        width={50}
        alt=""
      />
      <h1 className="pl-2">ECOmarket</h1>
    </div>
  )
}

export default Header
