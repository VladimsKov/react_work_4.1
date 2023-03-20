import {useState} from "react";
import hexRgb from "../functions"
import React from "react";
const bgElem = document.getElementById('root');
bgElem.style.backgroundColor = 'gray';

export default function ColorsConvert() {
  const[color, setColor] = useState('');
  const[rgbColor, setRgbColor] = useState('');
    
  const colorChange = (evt) => {    
    setColor(()=> evt.target.value);
    setRgbColor(()=> '');
    bgElem.style.backgroundColor = "gray";          
  }
  const outPutColor = (evt) => {
    evt.preventDefault();
    let outColor = hexRgb(color);
    outColor = outColor?  `rgb(${outColor.r}, ${outColor.g}, ${outColor.b})` : "ошибка";
    if (!color) outColor = '';
    setRgbColor(()=> outColor);
    switch (outColor) {
      case "ошибка" : bgElem.style.backgroundColor = "red";
      break;
      case '' : bgElem.style.backgroundColor = "gray";
      break;
      default: bgElem.style.backgroundColor = outColor;  
    }    
  }
  
  return (
    <div className="container">
    <form onSubmit={outPutColor}>         
    <input id="inputfield" 
    value={color}
    onChange={colorChange}
    onBlur={outPutColor}
    autoFocus/>
    </form>
    <div id="outfield">{rgbColor}</div>
    </div>  
    )
  } 
  
  
  