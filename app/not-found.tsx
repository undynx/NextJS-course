import React from 'react'
import Image from 'next/image';

import errorSVG from '@assets/icons/error.svg';

const NotFound = () => {
  return (
    <div className='flex flex-col not-found items-center justify-center'>
      <Image src={errorSVG} width={100} alt='' />
      <h2 className='pt-10'>Ups!</h2>
      <span>Parece que esta página no existe</span>
      <a href="/" className='pt-2'>Volver al inicio</a>
    </div>
  )
}

export default NotFound;
