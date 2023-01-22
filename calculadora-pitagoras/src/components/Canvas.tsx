import React, { useEffect, useRef } from "react";

interface CanvasProps {
    draw: (ctx:any)=>void
}

const Canvas = ({draw, ...rest}:CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
    const canvas = canvasRef.current as any;
    const ctx = canvas.getContext('2d');

    draw(ctx);

    }, [draw])

    return <canvas ref={canvasRef} {...rest} width="500" height="500"/>
} 

export default Canvas