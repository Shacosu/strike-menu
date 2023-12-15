"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-center mt-8 text-4xl bg-gradient-to-b bg-clip-text from-[#ed6928] via-orange-500 to-orange-100 text-transparent">
        BIENVENIDOS A LA EXPERIENCIA STRIKE
      </h1>
      <h2 className="text-center  text-3xl font-bold my-5">CARTA</h2>
      <div className="grid grid-cols-1 gap-4 container mx-auto px-9 ">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            onClick={() => router.push(`/categoria/${categoria.id}`)}
            className="bg-black border border-[#ed6928] mt-6 shadow-md text-white text-center text-2xl h-14 flex justify-center items-center rounded-2xl shadow-orange-300 uppercase"
          >
            {categoria.nombre}
          </div>
        ))}
      </div>
			
		 
        
      

    </div>
  );
}
