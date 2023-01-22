import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/Canvas'
import Canvas from './components/Canvas'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">

      <button onClick={()=>{
        setCount(count+10)
        console.log(count);
        
      }}>Direita</button>
      
      <Canvas draw={(ctx)=>{
          ctx.clearRect(0,0,500,500)
          ctx.beginPath();
          ctx.moveTo(30+count,30); // angulo cateto oposto
          ctx.lineTo(30+count,200); // cateto oposto: 170px
          ctx.moveTo(30+count,200); // angulo reto
          ctx.lineTo(300+count,200); // cateto adjascente: 270px
          ctx.moveTo(300+count,200); // angulo cateto adjascente
          ctx.lineTo(30+count,30); // hipotenusa: 320


          ctx.arc(30+count,30, 40+count, (Math.PI/180)*90, (Math.PI/180)*33, true);
          ctx.moveTo(300+count,200);
          ctx.arc(300+count,200,40,(Math.PI/180)*180, (Math.PI/180)*212, false);

          ctx.moveTo(30+count,170);
          ctx.lineTo(60+count,170);
          ctx.moveTo(60+count,170);
          ctx.lineTo(60+count,200);

          // altura: 275,2
          // centro (150,100)

          ctx.moveTo(30+count,200);
          ctx.lineTo(105+count, 77);


          ctx.stroke();
      }}/>
    </div>
  )
}

export default App
