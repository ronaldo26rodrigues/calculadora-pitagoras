import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./components/Canvas";
import Canvas from "./components/Canvas";
import { Triangulo } from "./components/Triangulo";
import { FormInput } from "./components/FormInput";

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
  });

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        botao
      </button>

      <Triangulo
        canvasSize={600}
        canvasPadding={100}
        labelsOn={true}
        alturaOn={true}
        linhaDestacada={linhaDestacada}
        valoresAbsolutos={valoresAbsolutos}
      />
      <form>
        <FormInput
        label="Cateto A"
        linha="a"
        name="catetoA"
        setLinhaDestacada={setLinhaDestacada}
        />
        <FormInput
        label="Cateto B"
        linha="b"
        name="catetoB"
        setLinhaDestacada={setLinhaDestacada}
        />
        <FormInput
        label="Hipotenusa"
        linha="c"
        name="hipotenusa"
        setLinhaDestacada={setLinhaDestacada}
        />
        <FormInput
        label="Angulo A"
        linha="A"
        name="anguloA"
        setLinhaDestacada={setLinhaDestacada}
        />
        <FormInput
        label="Angulo B"
        linha="B"
        name="anguloB"
        setLinhaDestacada={setLinhaDestacada}
        />
        <FormInput
        label="Altura"
        linha="h"
        name="altura"
        setLinhaDestacada={setLinhaDestacada}
        />
        
      </form>
    </div>
  );
}

export default App;
