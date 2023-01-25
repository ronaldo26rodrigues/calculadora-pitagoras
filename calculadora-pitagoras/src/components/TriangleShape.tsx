import React, { useState } from "react";
import Canvas from "./Canvas";
import { Triangle } from "../models/Triangle";
import { TrianguloDraw } from "./TriangleDraw";


interface TrianguloProps {
  canvasSize: number;
  canvasPadding: number;
  labelsOn: boolean;
  alturaOn: boolean;
  linhaDestacada: string;
  valoresAbsolutos: Triangle;
}

export function TriangleShape({
  canvasSize,
  valoresAbsolutos,
  canvasPadding,
  linhaDestacada,
}: TrianguloProps) {
  var valoresRelativos = {
    catetoA: 0,
    catetoB: 0,
    hipotenusa: 0,
    anguloB: 0,
    anguloA: 0,
    altura: 0,
    h1: 0,
    h2: 0,
    area: 0,
  }; // estes valores são calculados para que o triângulo se encaixe na área do canvas

  const [labelsOn, setLabelsOn] = useState(true)
  const [alturaOn, setAlturaOn] = useState(true)

  var proporcaoHipotenusa = 0; // valor da reta m, cateto de um dos triângulos formados pela reta da altura
  var { catetoA, catetoB, altura, anguloA, anguloB, h1, h2, hipotenusa } =
    valoresRelativos;
  // calcula as medidas relativas ao canvas, partindo dos valores vindos da calculadora
  function calculoMedidasRelativas() {
    // o maior cateto encaixa no tamanho máximo do canvas, e os demais valores são calculados a partir desta proporção
    console.log(valoresAbsolutos);
    
    const proporcao =
      (canvasSize - canvasPadding) /
      (valoresAbsolutos["catetoA"] > valoresAbsolutos["catetoB"]
        ? valoresAbsolutos["catetoA"]
        : valoresAbsolutos["catetoB"]);
    valoresRelativos.catetoA = valoresAbsolutos["catetoA"] * proporcao;
    valoresRelativos.catetoB = valoresAbsolutos["catetoB"] * proporcao;
    valoresRelativos.hipotenusa = valoresAbsolutos["hipotenusa"] * proporcao;
    valoresRelativos.altura = valoresAbsolutos["altura"] * proporcao;
    valoresRelativos.h1 = valoresAbsolutos["h1"] * proporcao;
    valoresRelativos.h2 = valoresAbsolutos["h2"] * proporcao;

    proporcaoHipotenusa =
      (valoresRelativos.h1 * 100) / valoresRelativos.hipotenusa / 100;
    valoresRelativos.anguloA = valoresAbsolutos.anguloA;
    valoresRelativos.anguloB = valoresAbsolutos.anguloB;
  }
  calculoMedidasRelativas();
  // calcula o ponto de partida do desenho, para que o triângulo fique centralizado
  var pontoPartida = {
    x: canvasSize / 2 - valoresRelativos.catetoB / 2,
    y: canvasSize / 2 - valoresRelativos.catetoA / 2,
  };

  return (
    <div>

    <Canvas
      width={canvasSize}
      height={canvasSize}
      draw={(canvas) => {
          TrianguloDraw({
              canvas,
              canvasSize,
              alturaOn,
              labelsOn,
              linhaDestacada,
              pontoPartida,
              proporcaoHipotenusa,
              valoresAbsolutos,
              valoresRelativos,
            });
        }}
        />
        <div className="flex items-center justify-around my-4">
            <div className="flex items-center">
                <input type="checkbox" name="labelsOn" id="labelsOn" className="accent-blue-600 mx-2" checked={labelsOn} onClick={()=>{setLabelsOn(!labelsOn)}}/>
                <span>Legendas</span>
            </div>
            <div>
                <input type="checkbox" name="alturaOn" id="alturaOn" className="accent-blue-600 mx-2" checked={alturaOn} onClick={()=>{setAlturaOn(!alturaOn)}}/>
                <span>Altura</span>
            </div>
        </div>
    </div>
  );
}
