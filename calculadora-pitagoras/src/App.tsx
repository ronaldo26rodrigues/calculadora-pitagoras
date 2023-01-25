import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./components/Canvas";
import Canvas from "./components/Canvas";
import { TriangleShape } from "./components/TriangleShape";
import { FormInput } from "./components/FormInput";
import { FormCalc } from "./components/FormCalc";
import { Results } from "./components/Results";
import { Triangle } from "./models/Triangle";

function App() {
  const canvasSize = 500;
  const canvasPadding = 60;

  const [count, setCount] = useState(3);
  const [linhaDestacada, setLinhaDestacada] = useState("");

  var [valoresAbsolutos, setValoresAbsolutos] = useState({
    catetoB: 3,
    catetoA: 4,
    hipotenusa: 5,
    anguloB: 36.87,
    anguloA: 53.13,
    altura: 2.4,
    h1: 3,
    h2: 2,
    area: 6,
  } as Triangle);

  return (
    <div className="">
      <div>
        <h1 className="text-6xl mb-16">
          Teorema de Pitágoras
        </h1>
      </div>
      <div className="flex justify-around h-max">
        <Results valoresAbsolutos={valoresAbsolutos} />
        <TriangleShape
          canvasSize={500}
          canvasPadding={100}
          labelsOn={true}
          alturaOn={true}
          linhaDestacada={linhaDestacada}
          valoresAbsolutos={valoresAbsolutos}
        />
        <FormCalc setLinhaDestacada={setLinhaDestacada} valoresAbsolutos={valoresAbsolutos} setValoresAbsolutos={setValoresAbsolutos}/>
      </div>
      <div className="absolute right-20 bottom-4 justify-end flex flex-col items-end">
      <p >Construído com React e Flask para a seleção de estágio da <a href="https://www.cromai.com" className="text-[#09c184]">Cromai</a></p>
      <p className="">Feito por <a href="https://github.com/ronaldo26rodrigues" className="text-[#09c184]">Ronaldo Rodrigues</a></p>
      </div>
    </div>
  );
}

export default App;
