import React from "react";

function ProgrammerKeypad({ onKeyPress, base }) {
  return (
    <div className="grid grid-cols-5 text-slate-50 font-mono">
    <button value={'Delete'} className="p-2 bg-orange-600 hover:bg-orange-700 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>AC</button>
    <button value={'Backspace'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>{"<-"}</button>
    <button value={'&'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>&</button>
    <button value={'|'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>|</button>
    <button value={'^'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>^</button>
    <button value={'0'} className="p-2 bg-slate-700 hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>0</button>
    <button value={'1'} className="p-2 bg-slate-700 hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>1</button>
    <button value={'2'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>2</button>
    <button value={'3'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>3</button>
    <button value={'<<'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>{"<<"}</button>
    <button value={'4'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>4</button>
    <button value={'5'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>5</button>
    <button value={'6'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>6</button>
    <button value={'7'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>7</button>
    <button value={'>>'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 2}>{">>"}</button>
    <button value={'8'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 8}>8</button>
    <button value={'9'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 8}>9</button>
    <button value={'A'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 10}>A</button>
    <button value={'B'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 10}>B</button>
    <button value={'+/-'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>+/-</button>
    <button value={'C'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 10}>C</button>
    <button value={'D'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 10}>D</button>
    <button value={'E'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 10}>E</button>
    <button value={'F'} className="p-2 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-600 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)} disabled={base <= 10}>F</button>
    <button value={'Enter'} className="p-2 bg-slate-800 hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>=</button>
    </div>
  );
}

export default ProgrammerKeypad;
