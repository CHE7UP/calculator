

import React from 'react';
import './App.css';


function App() {

const [expression, setExpression] = React.useState('0');
const [lastPressed, setLastPressed] = React.useState("");


const display=(symbol)=>{

 
   if(/[+*/]/.test(symbol)){
     if(/[+*/-]/.test(lastPressed)){
      const lastNumIdx = expression.split('').reverse().findIndex(char => /[0-9]/.test(char) && char !== ' ');
      setExpression( prev => prev.slice(0,prev.length- lastNumIdx) + ' ' + symbol + ' ')
     } else {
       setExpression(prev => prev + symbol + ' ');
     }
   }else{
     setExpression(prev=> (prev==='0')? symbol : expression + symbol);
   }
    setLastPressed(symbol);
}


const calculate=()=>{
 setExpression(eval(expression));
};  
// this is the function that will be called when the button is clicked
const decimal=()=>{
   let arr=expression.split(/[-+/*]+/);
    let last=arr.slice(-1)[0];
    if (!last.includes(".")){
      setExpression(prev => prev+'.')
    }
    return;
}

const allClear = () => {
  setExpression('0');
  setLastPressed('');
}
  const clear = () => {
    setExpression(prev=> 
      prev
      .split("")
      .slice(0, prev.length-1)
      .join("")
      );
    
  }
  return (
    <div className="container">
     <div className="grid">
        <div className="dis"id ="display" >
        {expression} 
        </div>
         <div onClick={allClear} className="padButton AC maroon" id="clear">AC</div>
         <div onClick={clear} className="padButton C maroon">C</div>
         <div onClick={()=>display("/")} className="padButton div blue" id="divide">/</div>
         <div onClick={()=>display("*")} className="padButton times blue" id="multiply">X</div>
         <div onClick={()=>display("7")} className="padButton seven darkgray" id="seven">7</div>
         <div onClick={()=>display("8")} className="padButton eight darkgray" id="eight">8</div>
         <div onClick={()=>display("9")} className="padButton nine darkgray" id="nine">9</div>
         <div onClick={()=>display("-")} className="padButton minus blue" id="subtract">-</div>
         <div onClick={()=>display("4")} className="padButton four darkgray" id="four">4</div>
         <div onClick={()=>display("5")} className="padButton five darkgray" id="five">5</div>
         <div onClick={()=>display("6")} className="padButton six darkgray"
         id="six">6</div>
         <div onClick={()=>display("+")} className="padButton plus blue"
         id="add" >+</div>
         <div onClick={()=>display("1")} className="padButton one darkgray" id="one">1</div>
         <div onClick={()=>display("2")} className="padButton two darkgray" id="two" >2</div>
         <div onClick={()=>display("3")} className="padButton three darkgray" id="three" >3</div>
         <div onClick={calculate} className="padButton equals green" id="equals">=</div>
         <div onClick={()=>display("0")} className="padButton zero darkgray"id="zero" >0</div>
         <div onClick={decimal} className="padButton dot darkgray" id="decimal">.</div>
     </div>
    </div>
  );
}

export default App;
