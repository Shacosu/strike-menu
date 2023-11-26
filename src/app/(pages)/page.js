import React from "react";

export default function Categorias() {
	return (
		<div>
			<h1 className="text-center mt-8 text-3xl font-bold">
				BIENVENIDOS A LA EXPERIENCIA STRIKE
			</h1>
			<h2 className="text-center mt-8 text-2xl font-bold">CARTA</h2>
			<div className="grid grid-cols-1 gap-4 mt-8 container mx-auto px-12">
				<div className="bg-black border-4 border-[#ed6928] mt-3 shadow-lg text-white text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500">SUSHI</div>
				<div className="bg-black border-4 border-[#ed6928] mt-3 shadow-md text-white text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500">FUSIÓN</div>
				<div className="bg-black border-4 border-[#ed6928] mt-3 shadow-md text-white text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500">BEBESTIBLES</div>
			</div>
		</div>
	);
}
