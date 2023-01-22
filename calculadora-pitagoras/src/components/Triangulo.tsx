import React from "react";
import Canvas from "./Canvas";

interface TrianguloProps {
    canvasSize: number,
    canvasPadding: number
    valoresAbsolutos: {"catetoA": number, "catetoB": number, "anguloA": number, "anguloB": number, "hipotenusa": number, "altura": number, "h1": number, "h2": number},
    

}

export function Triangulo({canvasSize, valoresAbsolutos, canvasPadding}:TrianguloProps) {
    var valoresRelativos = {
        "catetoA": 0,
        "catetoB": 0,
        "hipotenusa": 0,
        "anguloB": 0,
        "anguloA": 0,
        "altura": 0,
        "h1": 0,
        "h2": 0
      }
    var proporcaoHipotenusa = 0;
    
    function calculoMedidas() {
        const proporcao = ((canvasSize-canvasPadding)/(valoresAbsolutos["catetoA"]>valoresAbsolutos["catetoB"]?valoresAbsolutos["catetoA"]:valoresAbsolutos["catetoB"]));
        valoresRelativos["catetoA"] = valoresAbsolutos['catetoA']*proporcao;
        valoresRelativos["catetoB"] = valoresAbsolutos['catetoB']*proporcao;
        valoresRelativos["hipotenusa"] = valoresAbsolutos['hipotenusa']*proporcao;
        valoresRelativos["altura"] = valoresAbsolutos['altura']*proporcao;
        valoresRelativos["h1"] = valoresAbsolutos['h1']*proporcao;
        valoresRelativos["h2"] = valoresAbsolutos['h2']*proporcao;
        
        proporcaoHipotenusa = (valoresRelativos['h1']*100)/valoresRelativos['hipotenusa']/100;
        console.log(proporcaoHipotenusa);
        
    }
    calculoMedidas()
    var pontoPartida = {"x": (canvasSize/2)-valoresRelativos["catetoB"]/2, "y": (canvasSize/2)-valoresRelativos["catetoA"]/2}

    return <Canvas width={canvasSize} height={canvasSize} draw={(canvas)=>{
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height)

        var grd = ctx.createLinearGradient(100, 100, canvas.width,canvas.height);
        grd.addColorStop(0, "#F29B30");
        grd.addColorStop(1, "#BFB304");

        

        
        console.log(pontoPartida);
        
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(pontoPartida["x"],pontoPartida["y"]); // angulo cateto oposto
        ctx.lineTo(pontoPartida["x"],pontoPartida['y']+valoresRelativos['catetoA']); // cateto oposto: 170px
        ctx.moveTo(pontoPartida["x"],pontoPartida['y']+valoresRelativos['catetoA']); // angulo reto
        ctx.lineTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // cateto adjascente: 270px
        ctx.moveTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // angulo cateto adjascente
        ctx.lineTo(pontoPartida["x"],pontoPartida["y"]); // hipotenusa: 320

        // altura: 275,2
        // centro (150,100)
        
        ctx.moveTo(pontoPartida['x'], pontoPartida['y']+valoresRelativos['catetoA'],200);
        ctx.lineTo(pontoPartida['x']+(proporcaoHipotenusa*valoresRelativos['catetoB']), pontoPartida['y']+(proporcaoHipotenusa)*valoresRelativos['catetoA']);


        ctx.stroke()
        ctx.moveTo(pontoPartida['x'],pontoPartida['y']);
        ctx.arc(pontoPartida['x'],pontoPartida['y'], 40, (Math.PI/180)*90, (Math.PI/180)*valoresAbsolutos['anguloA'], true);
        ctx.moveTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']);
        ctx.arc(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA'],40,(Math.PI/180)*180, (Math.PI/180)*(180+valoresAbsolutos['anguloA']), false);

        
        
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ffffff"
        
        ctx.fillStyle = "white"
        ctx.font = "20px Arial"
        ctx.fillText("A", pontoPartida['x']-18,250);
        ctx.fillText("a", pontoPartida['x']-10,pontoPartida['y']-5);
        ctx.fillText("b", pontoPartida['x']+valoresRelativos['catetoB']+5,pontoPartida['y']+valoresRelativos['catetoA']+5);
        ctx.fillText("B", 250, pontoPartida['y']+valoresRelativos['catetoA']+20);

        ctx.fillText("C", pontoPartida['x']+0.5*valoresRelativos['catetoB'], pontoPartida['y']+(0.45)*valoresRelativos['catetoA']);
        ctx.fillText("H1", pontoPartida['x']+0.25*valoresRelativos['catetoB'], pontoPartida['y']+(0.22)*valoresRelativos['catetoA']);
        ctx.fillText("H2", pontoPartida['x']+0.80*valoresRelativos['catetoB'], pontoPartida['y']+(0.75)*valoresRelativos['catetoA']);
        ctx.fillText("H", pontoPartida['x']+(proporcaoHipotenusa/2*valoresRelativos['catetoB']), pontoPartida['y']+(proporcaoHipotenusa*1.45)*valoresRelativos['catetoA']);

        
        ctx.fillRect(pontoPartida['x'], pontoPartida['y']+valoresRelativos['catetoA']-40, 40, 40);
        ctx.fill();
    }}/>
}