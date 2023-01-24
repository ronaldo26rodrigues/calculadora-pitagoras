import React from "react";
import Canvas from "./Canvas";


interface TrianguloProps {
  canvasSize: number;
  canvasPadding: number;
  labelsOn: boolean;
  alturaOn: boolean;
  linhaDestacada: string
  valoresAbsolutos: {catetoA: number;
    catetoB: number;
    anguloA: number;
    anguloB: number;
    hipotenusa: number;
    altura: number;
    h1: number;
    h2: number;}
}

export function Triangulo({canvasSize, valoresAbsolutos, canvasPadding, labelsOn, alturaOn, linhaDestacada}:TrianguloProps) {
    var valoresRelativos = {
      catetoA: 0,
      catetoB: 0,
      hipotenusa: 0,
      anguloB: 0,
      anguloA: 0,
      altura: 0,
      h1: 0,
      h2: 0,
    }; // estes valores são calculados para que o triângulo se encaixe na área do canvas
    
    var proporcaoHipotenusa = 0; // valor da reta m, cateto de um dos triângulos formados pela reta da altura
    
    // calcula as medidas relativas ao canvas, partindo dos valores vindos da calculadora
    function calculoMedidasRelativas() {
        // o maior cateto encaixa no tamanho máximo do canvas, e os demais valores são calculados a partir desta proporção
        const proporcao = ((canvasSize-canvasPadding)/(valoresAbsolutos["catetoA"]>valoresAbsolutos["catetoB"]?valoresAbsolutos["catetoA"]:valoresAbsolutos["catetoB"])); 
        valoresRelativos["catetoA"] = valoresAbsolutos['catetoA']*proporcao;
        valoresRelativos["catetoB"] = valoresAbsolutos['catetoB']*proporcao;
        valoresRelativos["hipotenusa"] = valoresAbsolutos['hipotenusa']*proporcao;
        valoresRelativos["altura"] = valoresAbsolutos['altura']*proporcao;
        valoresRelativos["h1"] = valoresAbsolutos['h1']*proporcao;
        valoresRelativos["h2"] = valoresAbsolutos['h2']*proporcao;
        
        proporcaoHipotenusa = (valoresRelativos['h1']*100)/valoresRelativos['hipotenusa']/100;
        valoresRelativos.anguloA = valoresAbsolutos.anguloA
        valoresRelativos.anguloB = valoresAbsolutos.anguloB
    }
    calculoMedidasRelativas()
    // calcula o ponto de partida do desenho, para que o triângulo fique centralizado
    var pontoPartida = {"x": (canvasSize/2)-valoresRelativos["catetoB"]/2, "y": (canvasSize/2)-valoresRelativos["catetoA"]/2}

    return <Canvas width={canvasSize} height={canvasSize} draw={(canvas)=>{

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height)

        var grd = ctx.createLinearGradient(100, 100, canvas.width,canvas.height); // cor de fundo do canvas
        grd.addColorStop(0, "#F29B30");
        grd.addColorStop(1, "#BFB304");

        

        
        console.log(pontoPartida);
        
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.beginPath(); 
        ctx.moveTo(pontoPartida["x"],pontoPartida["y"]); // posiciona o cursor no ponto A
        ctx.lineTo(pontoPartida["x"],pontoPartida['y']+valoresRelativos['catetoA']); // desenha o cateto a
        ctx.moveTo(pontoPartida["x"],pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto do angulo reto
        ctx.lineTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // desenha o cateto b
        ctx.moveTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto B
        ctx.lineTo(pontoPartida["x"],pontoPartida["y"]); // desenha a hipotenusa
        
        ctx.moveTo(pontoPartida['x'], pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto do angulo reto
        if(alturaOn) ctx.lineTo(pontoPartida['x']+((proporcaoHipotenusa)*valoresRelativos['catetoB']), pontoPartida['y']+((proporcaoHipotenusa)*valoresRelativos['catetoA'])); // desenha a reta h (altura)
        ctx.strokeStyle = "#ffffff"
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(pontoPartida['x'],pontoPartida['y']); // posiciona o cursor no ponto A
        ctx.arc(pontoPartida['x'],pontoPartida['y'], 40, (Math.PI/180)*90, (Math.PI/180)*valoresAbsolutos['anguloA'], true); // desenha o ângulo do ponto A
        ctx.moveTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto B
        ctx.arc(
            pontoPartida['x']+valoresRelativos['catetoB'],
            pontoPartida['y']+valoresRelativos['catetoA'],
            40,
            (Math.PI/180)*180, 
            (Math.PI/180)*(180+valoresAbsolutos['anguloA']), 
            false); //desenha o ângulo do ponto B
            ctx.fillStyle = "white"
            ctx.fill()
            ctx.beginPath()
        
        
        ctx.lineWidth = 5;
        
        
        ctx.font = "24px Arial"

        function txtLegenda(valor:number, seZero: string, eAngulo=false) {
            return `${valor==0?seZero:valor.toFixed(2)}${eAngulo?"º":""}`
        }

        // legendas
        if(labelsOn){
            ctx.textAlign = "end";
            ctx.fillText(txtLegenda(valoresAbsolutos.catetoA, "a"), pontoPartida['x']-18,canvasSize/2);
            ctx.textAlign = "start";
            ctx.fillText(txtLegenda(valoresAbsolutos.anguloA, "A", true), pontoPartida['x']-10,pontoPartida['y']-5);
            ctx.fillText(txtLegenda(valoresAbsolutos.anguloB, "B"), pontoPartida['x']+valoresRelativos['catetoB']+5,pontoPartida['y']+valoresRelativos['catetoA']+10);
            ctx.fillText(txtLegenda(valoresAbsolutos.catetoB, "b"), canvasSize/2, pontoPartida['y']+valoresRelativos['catetoA']+25);

            ctx.fillText(txtLegenda(valoresAbsolutos.hipotenusa, "c"), pontoPartida['x']+0.5*valoresRelativos['catetoB'], pontoPartida['y']+(0.45)*valoresRelativos['catetoA']);
            ctx.font = "20px Arial"
        
            ctx.fillText(txtLegenda(valoresAbsolutos.h1, "m"), pontoPartida['x']+0.25*valoresRelativos['catetoB'], pontoPartida['y']+(0.22)*valoresRelativos['catetoA']);
            ctx.fillText(txtLegenda(valoresAbsolutos.h2, "n"), pontoPartida['x']+0.80*valoresRelativos['catetoB'], pontoPartida['y']+(0.75)*valoresRelativos['catetoA']);
            if(alturaOn) ctx.fillText(txtLegenda(valoresAbsolutos.altura, "h"), pontoPartida['x']+(proporcaoHipotenusa/1.5*valoresRelativos['catetoB']), (pontoPartida['y']+valoresRelativos['catetoA'])-(((1-proporcaoHipotenusa)/2)*valoresRelativos['catetoA']));
        }
        
        ctx.fillRect(pontoPartida['x'], pontoPartida['y']+valoresRelativos['catetoA']-40, 40, 40); // quadrado do ângulo reto
        ctx.fill();
        ctx.fillStyle = "red"
        switch (linhaDestacada) {
            case "a":
                ctx.moveTo(pontoPartida["x"],pontoPartida["y"]); // posiciona o cursor no ponto A
                ctx.lineTo(pontoPartida["x"],pontoPartida['y']+valoresRelativos['catetoA']); // desenha o cateto a
                break;
            case "b":
                ctx.moveTo(pontoPartida["x"],pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto do angulo reto
                ctx.lineTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // desenha o cateto b
                break;
            case "c":
                ctx.moveTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto B
                ctx.lineTo(pontoPartida["x"],pontoPartida["y"]); // desenha a hipotenusa
                break;
            case "h":
                ctx.moveTo(pontoPartida['x'], pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto do angulo reto
                if(alturaOn) ctx.lineTo(pontoPartida['x']+((proporcaoHipotenusa)*valoresRelativos['catetoB']), pontoPartida['y']+((proporcaoHipotenusa)*valoresRelativos['catetoA'])); // desenha a reta h (altura)
                break;
            case "A":
                ctx.moveTo(pontoPartida['x'],pontoPartida['y']); // posiciona o cursor no ponto A
                ctx.arc(pontoPartida['x'],pontoPartida['y'], 40, (Math.PI/180)*90, (Math.PI/180)*valoresAbsolutos['anguloA'], true); // desenha o ângulo do ponto A
                // ctx.fill()
                break;
            case "B":
                ctx.moveTo(pontoPartida['x']+valoresRelativos['catetoB'],pontoPartida['y']+valoresRelativos['catetoA']); // posiciona o cursor no ponto B
        ctx.arc(
            pontoPartida['x']+valoresRelativos['catetoB'],
            pontoPartida['y']+valoresRelativos['catetoA'],
            40,
            (Math.PI/180)*180, 
            (Math.PI/180)*(180+valoresAbsolutos['anguloA']), 
            false); //desenha o ângulo do ponto B
            // ctx.fill()
                break;
            default:
                break;
        }
        ctx.strokeStyle = "#ff0000";
        (linhaDestacada=="A"||linhaDestacada=="B")?ctx.fill():ctx.stroke()
    }}/>
}