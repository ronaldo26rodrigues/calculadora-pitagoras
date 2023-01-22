import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./components/Canvas";
import Canvas from "./components/Canvas";
import { Triangulo } from "./components/Triangulo";

function App() {
  const canvasSize = 500;
  const canvasPadding = 60;

  const [count, setCount] = useState(3);

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
        valoresAbsolutos={valoresAbsolutos}
      />
    </div>
  );
}

export default App;
