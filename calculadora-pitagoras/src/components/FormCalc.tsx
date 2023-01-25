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

    const [errorText, setErrorText] = useState("")
  return (
    <>
      <div className=" flex flex-col w-2/12 items-center">
        <form className="flex flex-col space-y-4 text-center justify-center">
          <FormInput
            label="Cateto A"
            linha="a"
            name="catetoA"
            id="catetoA"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.catetoA}
            onChange={(value) => {
              setFormValues({...formValues, catetoA: value });
              
            }}
          />
          <FormInput
            label="Cateto B"
            linha="b"
            name="catetoB"
            id="catetoB"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.catetoB}
            onChange={(value) => {
              setFormValues({...formValues, catetoB: value });
            }}
          />
          <FormInput
            label="Hipotenusa"
            linha="c"
            name="hipotenusa"
            id="hipotenusa"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.hipotenusa}
            onChange={(value) => {
              setFormValues({...formValues, hipotenusa: value });
            }}
          />
          <FormInput
            label="Angulo A"
            linha="A"
            name="anguloA"
            id="anguloA"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.anguloA}
            onChange={(value) => {
              document.getElementById('anguloB').value = `${90-value}`
              formValues.anguloB = 90-value
              setFormValues({...formValues, anguloA: value });
            }}
          />
          <FormInput
            label="Angulo B"
            linha="B"
            name="anguloB"
            id="anguloB"
            setLinhaDestacada={setLinhaDestacada}
            ifUndefined={valoresAbsolutos.anguloB}
            onChange={(value) => {
              document.getElementById('anguloA').value = `${90-value}`
              formValues.anguloA = 90-value
              setFormValues({...formValues, anguloB: value });
            }}
          />
          
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-10 rounded"
          onClick={() => {
            console.log(formValues);
            const inputs = document.querySelectorAll('input')
                for (let i = 0; i < inputs.length; i++) {
                  const element = inputs[i];
                  element.value = ""
                  console.log(element);
                  
                }
            axios
              .get("http://ronaldo26rodrigues.pythonanywhere.com/calculadora", {
                params: {
                  catetoA: formValues.catetoA,
                  catetoB: formValues.catetoB,
                  hipotenusa: formValues.hipotenusa,
                  anguloA: formValues.anguloA,
                  anguloB: formValues.anguloB,
                  altura: formValues.altura,
                  h1: formValues.h1,
                  h2: formValues.h2,
                  area: formValues.area,
                },
              })
              .then((res) => {
                console.log(res.data);
                var response = { ...res.data }
                setValoresAbsolutos({ ...res.data });
                setErrorText('')
              }).catch((error)=>{
                if(error.response.status==400) setErrorText(error.response.data);
                if(error.response.status==500) setErrorText('Algo deu errado');
              });
              setFormValues({
                catetoB: 0,
            catetoA: 0,
            hipotenusa: 0,
            anguloB: 0,
            anguloA: 0,
            altura: 0,
            h1: 0,
            h2: 0,
            area: 0,
            } as Triangle)
          }}
        >
          Calcular
        </button>
        <p className="text-red-600">{errorText}</p>
      </div>
    </>
  );
}
