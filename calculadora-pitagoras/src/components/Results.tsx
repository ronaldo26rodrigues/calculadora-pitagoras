import React from "react";
import { Triangle } from "../models/Triangle";

interface ResultsProps {
    valoresAbsolutos: Triangle
}

export function Results({valoresAbsolutos}: ResultsProps) {
    const {altura, anguloA, anguloB, catetoA, catetoB, h1, h2, hipotenusa, area} = valoresAbsolutos
    return <div className="flex flex-col text-3xl items-start gap-4 ">
        <p className="hover:text-2xl">Cateto a: {catetoA}</p>
        <p>Cateto b: {catetoB}</p>
        <p>Hipotenusa: {hipotenusa}</p>
        <p>Ângulo A: {anguloA}</p>
        <p>Ângulo B: {anguloB}</p>
        <p>Segmento AC: {h1}</p>
        <p>Segmento CB: {h2}</p>
        <p>Área: {area}</p>
    </div>
}