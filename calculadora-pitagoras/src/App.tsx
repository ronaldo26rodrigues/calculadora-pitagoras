import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./components/Canvas";
import Canvas from "./components/Canvas";
import { Triangulo } from "./components/Triangulo";
import axios from 'axios';

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
          axios.get('http://localhost:5000/calculadora', {
            params:{
          catetoA: 0,
          catetoB: 0,
          hipotenusa: 90,
          anguloA: 30,
          anguloB: 60,
          altura: 0,
          h1: 0,
          h2: 0,}}).then((res)=>{
            console.log(res.data);
            setValoresAbsolutos({...res.data})
          })
        }}
      >
        botao
      </button>

      <Triangulo
        canvasSize={800}
        canvasPadding={200}
        valoresAbsolutos={valoresAbsolutos}
      />
    </div>
  );
}

export default App;
