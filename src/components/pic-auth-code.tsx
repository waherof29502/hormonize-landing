import React, { useState, useEffect, useRef, FC } from "react";

interface PicAuthCodeProps {
  code: () => string;
}

const PicAuthCode: FC<PicAuthCodeProps> = (props) => {
  const config = {
    contentWidth: 150,
    contentHeight:50,
    backgroundColorMin: 180,
    backgroundColorMax: 240,
    fontSizeMin: 5,
    fontSizeMax: 5,
    colorMin: 50,
    colorMax: 160,
    lineColorMin: 40,
    lineColorMax: 180,
    dotColorMin: 0,
    dotColorMax: 255,
  };

  const [identifyCode, setIdentifyCode] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    refresh();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    identifyCode && drawPic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifyCode]);

  const randomNum = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomColor = (min: number, max: number): string => {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return `rgba(${r},${g}, ${b}, 1)`;
  };

  const drawText = (ctx: CanvasRenderingContext2D, txt: string, i: number): void => {
    ctx.fillStyle = randomColor(config.colorMin, config.colorMax);
    ctx.font = `20px sans-serif`;
    const x = (i + 1) * (config.contentWidth / (identifyCode.length + 1));
    const y = config.contentHeight / 2 + randomNum(-10, 12);
    const deg = randomNum(-40, 50);

    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);

    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  };

  const drawLine = (ctx: CanvasRenderingContext2D): void => {
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = randomColor(config.lineColorMin, config.lineColorMax);
      ctx.beginPath();
      ctx.moveTo(randomNum(0, config.contentWidth), randomNum(0, config.contentHeight));
      ctx.lineTo(randomNum(0, config.contentWidth), randomNum(0, config.contentHeight));
      ctx.stroke();
    }
  };

  const drawDot = (ctx: CanvasRenderingContext2D): void => {
    for (let i = 0; i < 10; i++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(randomNum(0, config.contentWidth), randomNum(0, config.contentHeight), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const refresh = (): void => {
    setIdentifyCode(props.code());
  };

  const drawPic = (): void => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      ctx.fillStyle = randomColor(config.backgroundColorMin, config.backgroundColorMax);
      ctx.fillRect(0, 0, config.contentWidth, config.contentHeight);

      for (let i = 0; i < identifyCode.length; i++) {
        drawText(ctx, identifyCode[i], i);
      }

      // drawLine(ctx);
      drawDot(ctx);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={config.contentWidth}
      height={config.contentHeight}
      onClick={refresh}
    />
  );
};

export default PicAuthCode;
