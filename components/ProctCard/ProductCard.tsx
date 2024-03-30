'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import cartSVG from '@assets/icons/cart.svg';

type ProductCardProps = {
  producto: Producto;
}

const ProductCard = ({ producto }: ProductCardProps) => {
  const { titulo, precio, id } = producto;
  return (
    <Link
      href={`/producto/${id}`}
      className='flex flex-col justify-around bg-element w-52 h-62 m-2 p-4 rounded-lg'
    >
      <h3>{titulo}</h3>
      <div className='flex justify-between pt-5 items-center'>
        <span className='price-text'>${precio}</span>
        <button onClick={(e) => e.preventDefault()}>
          <Image src={cartSVG} width={20} alt='' />
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
