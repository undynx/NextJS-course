import { mockedData } from '@app/data/products';
import ProductList from '@components/ProductList/ProductList';
import { capitalize } from '@utils/helpers';
import React from 'react'

type CategoriaPageProps = {
  params: { categoria: string }
}

const Categoria = ({ params }: CategoriaPageProps) => {
  const { categoria } = params;

  const filteredProductos = mockedData.filter((producto) => producto.categoria === categoria);
  return (
    <div>
      <h1>{capitalize(categoria)}</h1>
      <ProductList productos={filteredProductos} />
    </div>
  )
}

export default Categoria;
