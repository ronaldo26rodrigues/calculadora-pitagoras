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

  const screenSize = window.innerWidth
  console.log(screenSize);
  

  return (
    <div className="justify-center text-center p-2 mt-8">
      <div>
        <h1 className="text-6xl mb-16">
          Teorema de Pitágoras
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row sm:justify-between h-max  text-center items-center xl:items-start gap-y-12">
        <FormCalc setLinhaDestacada={setLinhaDestacada} valoresAbsolutos={valoresAbsolutos} setValoresAbsolutos={setValoresAbsolutos}/>
        <TriangleShape
          canvasSize={screenSize<620?0.8*screenSize:600}
          canvasPadding={120}
          labelsOn={true}
          alturaOn={true}
          linhaDestacada={linhaDestacada}
          valoresAbsolutos={valoresAbsolutos}
        />
        <Results valoresAbsolutos={valoresAbsolutos} />
      </div>
      <div className="flex xl:absolute mt-24 align-baseline right-20 bottom-4 justify-end  flex-col xl:items-end xl:text-end">
      <p >Construído com React e Flask para a seleção de estágio da <a href="https://www.cromai.com" className="text-[#09c184]">Cromai</a></p>
      <p className="">Feito por <a href="https://github.com/ronaldo26rodrigues" className="text-[#09c184]">Ronaldo Rodrigues</a></p>
      </div>
    </div>
  );
}

export default App;
