import React from "react";

export default function Categorias() {
	return (
		<div>
			<h1 className="text-center mt-8 text-3xl font-bold">
				BIENVENIDOS A LA EXPERIENCIA CRAFT
			</h1>
			<h2 className="text-center mt-8 text-2xl font-bold">CATEGORIAS</h2>
			<div className="grid grid-cols-2 gap-4 mt-8 container mx-auto px-8">
				<div className="bg-white shadow-md text-black text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500">CERVEZAS</div>
				<div className="bg-white shadow-md text-black text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500">CERVEZAS</div>
				<div className="bg-white shadow-md text-black text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500">CERVEZAS</div>
			</div>
		</div>
	);
}
