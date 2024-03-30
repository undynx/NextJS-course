type Categorias = 'Sala' | 'Dormitorio' | 'Cocina' | 'Baño';

type Producto = {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  categoria: Categorias;
}
