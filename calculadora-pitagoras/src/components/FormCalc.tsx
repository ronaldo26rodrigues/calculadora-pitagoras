import React, { useState } from "react";
import { FormInput } from "./FormInput";
import axios from "axios";
import { Triangle } from "../models/Triangle";

interface FormCalcProps {
  setLinhaDestacada: Function;
  valoresAbsolutos: Triangle;
  setValoresAbsolutos: Function;
}

export function FormCalc({
  setLinhaDestacada,
  valoresAbsolutos,
  setValoresAbsolutos,
}: FormCalcProps) {
    const [formValues, setFormValues] = useState({
        catetoB: 0,
    catetoA: 0,
    hipotenusa: 0,
    anguloB: 0,
    anguloA: 0,
    altura: 0,
    h1: 0,
    h2: 0,
    area: 6,
    } as Triangle);
  return (
    <>
      <div className="flex flex-col">
        <form className="flex flex-col space-y-4 ">
          <FormInput
            label="Cateto A"
            linha="a"
            name="catetoA"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.catetoA}
            onChange={(value) => {
              setFormValues({...valoresAbsolutos, catetoA: value });
              
            }}
          />
          <FormInput
            label="Cateto B"
            linha="b"
            name="catetoB"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.catetoB}
            onChange={(value) => {
              setFormValues({...valoresAbsolutos, catetoB: value });
            }}
          />
          <FormInput
            label="Hipotenusa"
            linha="c"
            name="hipotenusa"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.hipotenusa}
            onChange={(value) => {
              setFormValues({...valoresAbsolutos, hipotenusa: value });
            }}
          />
          <FormInput
            label="Angulo A"
            linha="A"
            name="anguloA"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.anguloA}
            onChange={(value) => {
              setFormValues({...valoresAbsolutos, anguloA: value });
            }}
          />
          <FormInput
            label="Angulo B"
            linha="B"
            name="anguloB"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.anguloB}
            onChange={(value) => {
              setFormValues({...valoresAbsolutos, anguloB: value });
            }}
          />
          <FormInput
            label="Altura"
            linha="h"
            name="altura"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.altura}
            onChange={(value) => {
              setFormValues({...valoresAbsolutos, altura: value });
            }}
          />
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-10 rounded"
          onClick={() => {
            console.log(valoresAbsolutos);

            axios
              .get("http://localhost:5000/calculadora", {
                params: {
                  catetoA: valoresAbsolutos.catetoA,
                  catetoB: valoresAbsolutos.catetoB,
                  hipotenusa: valoresAbsolutos.hipotenusa,
                  anguloA: valoresAbsolutos.anguloA,
                  anguloB: valoresAbsolutos.anguloB,
                  altura: valoresAbsolutos.altura,
                  h1: valoresAbsolutos.h1,
                  h2: valoresAbsolutos.h2,
                  area: valoresAbsolutos.area,
                },
              })
              .then((res) => {
                console.log(res.data);
                setValoresAbsolutos({ ...res.data });
              });
          }}
        >
          Calcular
        </button>
      </div>
    </>
  );
}
