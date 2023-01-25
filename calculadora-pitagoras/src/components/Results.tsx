import React from "react";
import { Triangle } from "../models/Triangle";

interface ResultsProps {
    valoresAbsolutos: Triangle
}

export function Results({valoresAbsolutos}: ResultsProps) {
    const {altura, anguloA, anguloB, catetoA, catetoB, h1, h2, hipotenusa, area} = valoresAbsolutos
    return <div className="flex flex-col text-3xl items-start gap-y-4 ">
        <p className="">Cateto a: {catetoA}</p>
        <p>Cateto b: {catetoB.toFixed(2)}</p>
        <p>Hipotenusa: {hipotenusa.toFixed(2)}</p>
        <p>Ângulo A: {anguloA.toFixed(2)}</p>
        <p>Ângulo B: {anguloB.toFixed(2)}</p>
        <p>Segmento AC: {h1.toFixed(2)}</p>
        <p>Segmento CB: {h2.toFixed(2)}</p>
        <p>Área: {area.toFixed(2)}</p>
    </div>
}