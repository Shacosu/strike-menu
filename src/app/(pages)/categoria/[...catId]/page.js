"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

export default function Categoria({ params }) {
  const id = params.catId[0];
  const [subcategorias, setSubcategorias] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/subcategorias?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Ordenar las subcategorias por "id" después de recibir los datos
        const sortedSubcategorias = data.sort((a, b) => a.id - b.id);

        setSubcategorias(sortedSubcategorias);

        console.log(sortedSubcategorias);
      });
      
  }, [id]);

  

  return (
    <div>
      <h1 className="text-center mt-8 text-4xl bg-gradient-to-b bg-clip-text from-[#ed6928] via-orange-500 to-orange-100 text-transparent">
        BIENVENIDOS A LA EXPERIENCIA STRIKE
      </h1>
      <h2 className="text-center  text-3xl font-bold my-5  ">CARTA</h2>
      <div className="grid grid-cols-1 gap-4 container mx-auto px-9 mb-20 ">
        {subcategorias.map((subcategoria) => (
          <div
            key={subcategoria.id}
            onClick={() => router.push(`/subcategoria/${subcategoria.id}`)}
            className="bg-black border border-[#ed6928] mb-3 shadow-md text-white text-center text-2xl h-14 flex justify-center items-center rounded-2xl shadow-orange-300 uppercase"
          >
            {subcategoria.nombre}
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 left-4 text-xs w-14 h-14 text-[#e05600]">
        <ArrowLeftCircleIcon onClick={() => router.back()} />
      </div>
    </div>
  );
}
