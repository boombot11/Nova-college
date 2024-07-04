'use client'
import React, { useState } from "react";
import styles from './light.css';

const LightCircle = () => {
  const [position, setPosition] = useState({ x: 292 ,y:303 });

  const handleMouseMove = (event) => {
    var a;
    var b;
    console.log(event.pageY+ "  :A: "+event.pageX)
    console.log(event.clientX+"  :B:   "+event.clientY)
    if(event.clientX>event.pageX)a=event.clientX-event.pageX;else{a=event.pageX-event.clientX}
    if(event.clientY>event.pageY)b=event.clientY-event.pageY;else{b=event.pageY-event.clientY}
    setPosition({ x: event.pageX, y: event.pageY-200 });
  };

  return (
    <div id="Play"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:"none",
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: "absolute",
          top: position.y - 10,
          left: position.x - 10,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "white",
          boxShadow: "0 0 10px white",
        }}
      />
    </div>
  );
};


export default function Light  ()  {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <LightCircle />
      </div>
    );
  };