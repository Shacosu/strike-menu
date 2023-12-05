"use client"
import { useState, useEffect } from 'react';

const NuevoPlatoForm = ({ onPlatoAgregado }) => {
  const [plato, setPlato] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '',
    categoriaId: '',
    subcategoriaId: '',
  });

  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriasResponse = await fetch('/api/categorias');
        const subcategoriasResponse = await fetch('/api/subcategorias');

        if (categoriasResponse.ok && subcategoriasResponse.ok) {
          const categoriasData = await categoriasResponse.json();
          const subcategoriasData = await subcategoriasResponse.json();

          setCategorias(categoriasData);
          setSubcategorias(subcategoriasData);
        } else {
          console.error('Error al obtener categorías o subcategorías');
        }
      } catch (error) {
        console.error('Error al obtener categorías o subcategorías:', error);
      }
    };

    fetchData();
  }, []);

  // Agregar función para obtener subcategorías específicas de una categoría
  const obtenerSubcategoriasPorCategoria = async (categoriaId) => {
    try {
      const response = await fetch(`/api/subcategorias?id=${categoriaId}`);
      if (response.ok) {
        const subcategoriasData = await response.json();
        setSubcategorias(subcategoriasData);
      } else {
        console.error('Error al obtener subcategorías por categoría');
      }
    } catch (error) {
      console.error('Error al obtener subcategorías por categoría:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el nombre del campo es "categoriaId", obtén las subcategorías correspondientes
    if (name === 'categoriaId') {
      obtenerSubcategoriasPorCategoria(value);
    }

    setPlato((prevPlato) => ({ ...prevPlato, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/platos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(plato),
      });

      if (response.ok) {
        const nuevoPlato = await response.json();
        onPlatoAgregado(nuevoPlato);
      } else {
        console.error('Error al agregar el plato');
      }
    } catch (error) {
      console.error('Error al agregar el plato:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={plato.nombre} onChange={handleChange} />
      </div>
      <div>
        <label>Precio:</label>
        <input className='text-black' type="number" name="precio" value={plato.precio} onChange={handleChange} />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea className='text-black' name="descripcion" value={plato.descripcion} onChange={handleChange} />
      </div>
      <div>
        <label>Imagen URL:</label>
        <input type="text" name="imagen" value={plato.imagen} onChange={handleChange} />
      </div>
      <div>
        <label>Categoría:</label>
        <select name="categoriaId" value={plato.categoriaId} onChange={handleChange}>
          <option value="">Seleccione una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Subcategoría:</label>
        <select name="subcategoriaId" value={plato.subcategoriaId} onChange={handleChange}>
          <option value="">Seleccione una subcategoría</option>
          {subcategorias.map((subcategoria) => (
            <option key={subcategoria.id} value={subcategoria.id}>
              {subcategoria.nombre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Agregar Plato</button>
    </form>
  );
};

export default NuevoPlatoForm;
