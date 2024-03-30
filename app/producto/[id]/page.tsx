import React from 'react'
import Image from 'next/image';

import { mockedData } from '@app/data/products';

import dormitorioSVG from '@assets/icons/bedroom.svg';
import salaSVG from '@assets/icons/livingroom.svg';
import cocinaSVG from '@assets/icons/kitchen.svg';
import banioSVG from '@assets/icons/bathroom.svg';
import Button from '@components/Button/Button';

type ProdcutPageProps = {
  params: { id: string }
}

const getImage = (categoria: Categorias) => {
  switch (categoria)  {
    case 'Baño': return banioSVG;
    case 'Cocina': return cocinaSVG;
    case 'Dormitorio': return dormitorioSVG;
    case 'Sala': return salaSVG;
    default: return;
  }
}

const ProductPage = ({ params }: ProdcutPageProps) => {
  const { id } = params;
  const producto = mockedData.find((prod) => prod.id === id);

  return (
    <div className='flex flex-row w-100 bg-element rounded-md p-5 w-100'>
      <div>
        <Image src={getImage(producto!.categoria)} width={80} alt='' />
      </div>

      <div className='flex flex-col pl-5 w-100'>
        <h2>{producto?.titulo}</h2>
        <span>{producto?.descripcion}</span>
        <span className='price-text'>${producto?.precio}</span>
        <div className='w-40 mt-5 relative -right-full'>
          <Button>Agregar al carrito</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
