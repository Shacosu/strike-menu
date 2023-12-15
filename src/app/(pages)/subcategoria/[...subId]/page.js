"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'

// Función para truncar la descripción a un número específico de palabras


// Definición de los componentes
const Card = ({ plato, openModal }) => {
 

  return (
    <div
      className="bg-black border-2 border-[#ed6928] mt-3 shadow-lg text-white rounded-lg flex overflow-hidden"
      onClick={() => openModal(plato)}
    >
      <div className="p-2 flex-1 h-40 w-40 " >
        <div className="text-lg">{plato.nombre}</div>
        <div className="text-base mt-1">${plato.precio}</div>
        <div className="text-gray-400 line-clamp-3">{plato.descripcion}</div>
        
      </div>
        
        
      <img
        src={plato.imagen}
        alt={plato.nombre}
        className="w-36 object-cover"
      />
    </div>
  );
};

const PlatoList = ({ platos, openModal }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-2 container mx-auto px-3">
      {platos.map((plato) => (
        <Card key={plato.id} plato={plato} openModal={openModal} />
      ))}
    </div>
  );
};

// Componente principal
export default function subcategoria({ params }) {
  const id = params.subId[0];
  const [platos, setPlatos] = useState([]);
  const [selectedPlato, setSelectedPlato] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/platos?id=${id}`)
      .then((res) => res.json())
      .then((data) => setPlatos(data));
  }, []);

  const openModal = (plato) => {
    setSelectedPlato(plato);
  };

  const closeModal = () => {
    setSelectedPlato(null);
  };

  return (
    <div>
      <h1 className="text-center mt-8 text-4xl bg-gradient-to-b bg-clip-text from-[#ed6928] via-orange-500 to-orange-100 text-transparent">
        BIENVENIDOS A LA EXPERIENCIA STRIKE
      </h1>
      <h2 className="text-center text-3xl font-bold my-5">CARTA</h2>
      <PlatoList platos={platos} openModal={openModal} />

      {/* Modal */}
      {selectedPlato && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="bg-[#414447] p-3 rounded-lg z-10"
            style={{ width: "400px" }}
          >
            <div className="relative" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`${selectedPlato.video}?autoplay=1&modestbranding=1&controls=0&showinfo=0&rel=0`}
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-2xl mb-2 mt-2 text-[#e05600]">
              {selectedPlato.nombre}
            </h2>
            <p className="text-white-600">{selectedPlato.descripcion}</p>
            <button
              className="mt-4 float-right bg-[#ed6928] text-white py-2 px-4 rounded hover:bg-[#e05600] transition duration-300"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
          
        </div>
      )}
      <div className="fixed bottom-4 left-4 text-xs w-14 h-14 text-[#e05600]">
      <ArrowLeftCircleIcon onClick={() => router.back()} />
    </div>
    </div>
  );
}
