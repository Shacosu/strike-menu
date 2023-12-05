"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Definición de los componentes
const Card = ({ plato }) => {
	const [expanded, setExpanded] = useState(false);
	const toggleDetails = () => {
    setExpanded(!expanded);
  };
  return (
		<div
		onClick={toggleDetails}
		key={plato.id}
		className="bg-black border-2 border-[#ed6928] mt-3 shadow-lg text-white rounded-lg flex overflow-hidden"
	>
		<div className="p-4 flex-1">
			<div className="text-2xl font-bold mb-2">{plato.nombre}</div>
			<div className="text-lg mb-2">${plato.precio}</div>
			<div className="text-gray-400 cursor-pointer">
				{expanded ? "Ocultar detalles" : "Ver detalles"}
			</div>
			{expanded && <div className="text-gray-400">{plato.descripcion}</div>}
		</div>
		<img src={plato.imagen} alt={plato.nombre} className="w-40 h-40 object-cover" />
	</div>
  );
};

const PlatoList = ({ platos }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-2 container mx-auto px-3">
      {platos.map(plato => (
        <Card key={plato.id} plato={plato} />
      ))}
    </div>
  );
};

// Componente principal
export default function subcategoria({ params }) {
  const id = params.subId[0];
  const [platos, setPlatos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/api/platos?id=${id}`)
      .then((res) => res.json())
      .then((data) => setPlatos(data));
  }, []);
	console.log(setPlatos)

  return (
    <div>
      <h1 className="text-center mt-8 text-3xl font-bold">
        BIENVENIDOS A LA EXPERIENCIA STRIKE
      </h1>
      <h2 className="text-center mt-8 text-2xl font-bold">CARTA</h2>
      <PlatoList platos={platos} />
    </div>
  );
}

