import React, { useEffect, useRef } from "react";

interface CanvasProps {
  draw: (canvas: any) => void;
  [x: string]: any;
}

const Canvas = ({ draw, ...rest }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as any;

    draw(canvas);
  }, [draw]);

  return <canvas ref={canvasRef} {...rest} className="rounded-lg shadow-lg" />;
};

export default Canvas;
