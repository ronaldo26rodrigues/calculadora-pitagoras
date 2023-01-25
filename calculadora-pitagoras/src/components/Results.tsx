import React from "react";
import { Triangle } from "../models/Triangle";
import { HorizontalLine } from "./HorizontalLine";

interface ResultsProps {
    valoresAbsolutos: Triangle
}

export function Results({valoresAbsolutos}: ResultsProps) {
    const {altura, anguloA, anguloB, catetoA, catetoB, h1, h2, hipotenusa, area} = valoresAbsolutos
    return <div className="flex flex-col text-3xl xl:items-start gap-y-2 ">
        <p className="">Cateto a: {catetoA}</p>
        <HorizontalLine/>
        <p>Cateto b: {catetoB.toFixed(2)}</p>
        <HorizontalLine/>
        <p>Hipotenusa: {hipotenusa.toFixed(2)}</p>
        <HorizontalLine/>
        <p>Ângulo A: {anguloA.toFixed(2)}</p>
        <HorizontalLine/>
        <p>Ângulo B: {anguloB.toFixed(2)}</p>
        <HorizontalLine/>
        <p>Segmento AC: {h1.toFixed(2)}</p>
        <HorizontalLine/>
        <p>Segmento CB: {h2.toFixed(2)}</p>
        <HorizontalLine/>
        <p>Área: {area.toFixed(2)}</p>
    </div>
}