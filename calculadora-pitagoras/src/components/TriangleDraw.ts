import { Triangle } from "../models/Triangle";

interface TrianguloDrawProps {
    canvas:any
    valoresAbsolutos: Triangle
    valoresRelativos: Triangle
    pontoPartida: {
        x:number
        y:number
    }
    proporcaoHipotenusa: number
    canvasSize: number
    alturaOn: boolean
    labelsOn: boolean
    linhaDestacada: string
}

export function TrianguloDraw({canvas, valoresAbsolutos, valoresRelativos, pontoPartida, proporcaoHipotenusa, canvasSize, alturaOn, labelsOn, linhaDestacada}: TrianguloDrawProps) {
    const {catetoA, catetoB, altura, anguloA, anguloB, h1, h2, hipotenusa} = valoresRelativos;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height)

    var grd = ctx.createLinearGradient(100, 100, canvas.width,canvas.height); // cor de fundo do canvas
    grd.addColorStop(0, '#09c184');
    grd.addColorStop(1, '#0c5149');

    
    console.log(valoresRelativos.catetoA);
    
    
    console.log(pontoPartida);
    
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.beginPath(); 
    ctx.moveTo(pontoPartida.x,pontoPartida.y); // posiciona o cursor no ponto A
    ctx.lineTo(pontoPartida.x,pontoPartida.y+ catetoA); // desenha o cateto a
    ctx.moveTo(pontoPartida.x,pontoPartida.y+ catetoA); // posiciona o cursor no ponto do angulo reto
    ctx.lineTo(pontoPartida.x+catetoB,pontoPartida.y+catetoA); // desenha o cateto b
    ctx.moveTo(pontoPartida.x+catetoB,pontoPartida.y+catetoA); // posiciona o cursor no ponto B
    ctx.lineTo(pontoPartida.x,pontoPartida.y); // desenha a hipotenusa
    
    ctx.moveTo(pontoPartida.x, pontoPartida.y+catetoA); // posiciona o cursor no ponto do angulo reto
    if(alturaOn) ctx.lineTo(pontoPartida.x+((proporcaoHipotenusa)*catetoB), pontoPartida.y+((proporcaoHipotenusa)*catetoA)); // desenha a reta h (altura)
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(pontoPartida.x,pontoPartida.y); // posiciona o cursor no ponto A
    ctx.arc(pontoPartida.x,pontoPartida.y, 40, (Math.PI/180)*90, (Math.PI/180)*valoresAbsolutos['anguloA'], true); // desenha o ângulo do ponto A
    ctx.moveTo(pontoPartida.x+catetoB,pontoPartida.y+catetoA); // posiciona o cursor no ponto B
    ctx.arc(
        pontoPartida.x+catetoB,
        pontoPartida.y+catetoA,
        40,
        (Math.PI/180)*180, 
        (Math.PI/180)*(180+valoresAbsolutos['anguloA']), 
        false); //desenha o ângulo do ponto B
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.beginPath()
    
    
    ctx.lineWidth = 5;
    
    
    ctx.font = '22px Arial'

    function txtLegenda(valor:number, seZero: string, eAngulo=false) {
        return `${valor==0?seZero:valor.toFixed(2)}${eAngulo?'º':''}`
    }

    // legendas
    if(labelsOn){
        ctx.textAlign = 'end';
        ctx.fillText(txtLegenda(valoresAbsolutos.catetoA, 'a'), pontoPartida.x-18,canvasSize/2);
        ctx.textAlign = 'start';
        ctx.fillText(txtLegenda(valoresAbsolutos.anguloA, 'A', true), pontoPartida.x-10,pontoPartida.y-5);
        ctx.fillText(txtLegenda(valoresAbsolutos.anguloB, 'B'), pontoPartida.x+catetoB+5,pontoPartida.y+catetoA+10);
        ctx.fillText(txtLegenda(valoresAbsolutos.catetoB, 'b'), canvasSize/2, pontoPartida.y+catetoA+25);

        ctx.fillText(txtLegenda(valoresAbsolutos.hipotenusa, 'c'), pontoPartida.x+0.5*catetoB, pontoPartida.y+(0.45)*catetoA);
        ctx.font = '20px Arial'
    
        if(alturaOn) ctx.fillText(txtLegenda(valoresAbsolutos.h1, 'm'), pontoPartida.x+0.25*catetoB, pontoPartida.y+(0.22)*catetoA);
        if(alturaOn) ctx.fillText(txtLegenda(valoresAbsolutos.h2, 'n'), pontoPartida.x+0.80*catetoB, pontoPartida.y+(0.75)*catetoA);
        if(alturaOn) ctx.fillText(txtLegenda(valoresAbsolutos.altura, 'h'), pontoPartida.x+(proporcaoHipotenusa/1.5*catetoB), (pontoPartida.y+catetoA)-(((1-proporcaoHipotenusa)/2)*catetoA));
    }
    
    ctx.fillRect(pontoPartida.x, pontoPartida.y+catetoA-40, 40, 40); // quadrado do ângulo reto
    ctx.fill();
    ctx.fillStyle = 'red'
    switch (linhaDestacada) {
        case 'a':
            ctx.moveTo(pontoPartida.x,pontoPartida.y); // posiciona o cursor no ponto A
            ctx.lineTo(pontoPartida.x,pontoPartida.y+catetoA); // desenha o cateto a
            break;
        case 'b':
            ctx.moveTo(pontoPartida.x,pontoPartida.y+catetoA); // posiciona o cursor no ponto do angulo reto
            ctx.lineTo(pontoPartida.x+catetoB,pontoPartida.y+catetoA); // desenha o cateto b
            break;
        case 'c':
            ctx.moveTo(pontoPartida.x+catetoB,pontoPartida.y+catetoA); // posiciona o cursor no ponto B
            ctx.lineTo(pontoPartida.x,pontoPartida.y); // desenha a hipotenusa
            break;
        case 'h':
            ctx.moveTo(pontoPartida.x, pontoPartida.y+catetoA); // posiciona o cursor no ponto do angulo reto
            if(alturaOn) ctx.lineTo(pontoPartida.x+((proporcaoHipotenusa)*catetoB), pontoPartida.y+((proporcaoHipotenusa)*catetoA)); // desenha a reta h (altura)
            break;
        case 'A':
            ctx.moveTo(pontoPartida.x,pontoPartida.y); // posiciona o cursor no ponto A
            ctx.arc(pontoPartida.x,pontoPartida.y, 40, (Math.PI/180)*90, (Math.PI/180)*valoresAbsolutos['anguloA'], true); // desenha o ângulo do ponto A
            // ctx.fill()
            break;
        case 'B':
            ctx.moveTo(pontoPartida.x+catetoB,pontoPartida.y+catetoA); // posiciona o cursor no ponto B
    ctx.arc(
        pontoPartida.x+catetoB,
        pontoPartida.y+catetoA,
        40,
        (Math.PI/180)*180, 
        (Math.PI/180)*(180+valoresAbsolutos['anguloA']), 
        false); //desenha o ângulo do ponto B
        // ctx.fill()
            break;
        default:
            break;
    }
    ctx.strokeStyle = '#ff0000';
    (linhaDestacada=='A'||linhaDestacada=='B')?ctx.fill():ctx.stroke()

}