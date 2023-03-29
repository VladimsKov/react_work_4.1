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
    if (evt.target.value.length < 7) {
      bgElem.style.backgroundColor = "gray";
      setRgbColor(()=> ""); 
    } else {      
      let outColor = hexRgb(evt.target.value);
      outColor = outColor?  `rgb(${outColor.r}, ${outColor.g}, ${outColor.b})` : "ошибка";
      if (outColor === "ошибка") {
        bgElem.style.backgroundColor = "red";
      } else {
        bgElem.style.backgroundColor = outColor;
      }     
      setRgbColor(()=> outColor);      
    }    
  }
  
  return (
    <div className="container">
    <form onSubmit={(evt)=> evt.preventDefault()}>         
    <input id="inputfield" 
    value={color}
    onChange={colorChange}    
    autoFocus/>
    </form>
    <div id="outfield">{rgbColor}</div>
    </div>  
    )
  }
  
  
  