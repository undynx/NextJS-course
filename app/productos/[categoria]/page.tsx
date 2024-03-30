import { capitalize } from '@utils/helpers';
import React from 'react'

type CategoriaPageProps = {
  params: { categoria: string }
}

const Categoria = ({ params }: CategoriaPageProps) => {
  const { categoria } = params;
  return (
    <div>
      <h1>{capitalize(categoria)}</h1>
    </div>
  )
}

export default Categoria;
