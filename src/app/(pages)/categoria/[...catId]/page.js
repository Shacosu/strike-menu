"use client";
import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

export default function Categoria({ params }) {
	const id = params.catId[0];
	const [subcategorias, setSubcategorias] = useState([])
	const  router = useRouter()

	useEffect(() =>{
		fetch(`http://localhost:3000/api/subcategorias?id=${id}`)
		.then(res => res.json())
		.then(data => setSubcategorias(data))
	},[])

	console.log(subcategorias)

	return(
		<div>
			<h1 className="text-center mt-8 text-3xl font-bold">
				BIENVENIDOS A LA EXPERIENCIA STRIKE
			</h1>
			<h2 className="text-center mt-8 text-2xl font-bold">CARTA</h2>
			<div className="grid grid-cols-1 gap-4 mt-8 container mx-auto px-12">
				{subcategorias.map(subcategoria => (
					<div key={subcategoria.id} onClick={() => router.push(`/subcategoria/${subcategoria.id}`)} className="bg-black border-2 border-[#ed6928] mt-3 shadow-lg text-white text-center text-2xl font-bold h-14 flex justify-center items-center rounded shadow-gray-500 uppercase">{subcategoria.nombre}</div>
				))}
			</div>
		</div>
	)
}
