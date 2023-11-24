"use client";
import React from "react";

export default function Categoria({ params }) {
	const id = params.catId[0];

	return <div>page {id}</div>;
}
