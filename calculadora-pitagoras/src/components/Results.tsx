import React from "react";
import { Triangle } from "../models/Triangle";
import { HorizontalLine } from "./HorizontalLine";
import { ResultItem } from "./ResultItem";

interface ResultsProps {
    valoresAbsolutos: Triangle
}

export function Results({valoresAbsolutos}: ResultsProps) {
    const {altura, anguloA, anguloB, catetoA, catetoB, h1, h2, hipotenusa, area} = valoresAbsolutos
    return <div className="flex flex-col text-3xl xl:items-start gap-y-2 ">
        <ResultItem label="Cateto a" value={catetoA}/>
        <HorizontalLine/>
        <ResultItem label="Cateto b" value={catetoB}/>
        <HorizontalLine/>
        <ResultItem label="Hipotenusa" value={hipotenusa}/>
        <HorizontalLine/>
        <ResultItem label="Ângulo A" value={anguloA}/>
        <HorizontalLine/>
        <ResultItem label="Ângulo B" value={anguloB}/>
        <HorizontalLine/>
        <ResultItem label="Segmento AC" value={h1}/>
        <HorizontalLine/>
        <ResultItem label="Segmento CB" value={h2}/>
        <HorizontalLine/>
        <ResultItem label="Área" value={area}/>
    </div>
}