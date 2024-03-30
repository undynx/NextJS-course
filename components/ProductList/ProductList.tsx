import ProductCard from '@components/ProctCard/ProductCard';
import React from 'react'

type ProductListProps = {
  productos: Producto[];
}

const ProductList = ({ productos }: ProductListProps) => {
  return (
    <div className='flex flex-wrap'>
      {productos.map((producto) => <ProductCard key={producto.id} producto={producto} />)}
    </div>
  )
}

export default ProductList
