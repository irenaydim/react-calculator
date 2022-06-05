import React from "react";

function ProgrammerKeypad({ onKeyPress }) {
  return (
    <div className="grid grid-cols-4 text-slate-900 dark:text-slate-50 font-mono">
    <button value={'Delete'} className="p-2 bg-orange-300 dark:bg-orange-600 hover:bg-orange-400 dark:hover:bg-orange-700 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>AC</button>
    <button value={'Backspace'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black text-2xl" onClick={({target: {value}}) => onKeyPress(value)}>&#8678;</button>
    <button value={'%'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>%</button>
    <button value={'/'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>/</button>
    <button value={'1'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>1</button>
    <button value={'2'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>2</button>
    <button value={'3'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>3</button>
    <button value={'+'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>+</button>
    <button value={'4'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>4</button>
    <button value={'5'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>5</button>
    <button value={'6'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>6</button>
    <button value={'-'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>-</button>
    <button value={'7'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>7</button>
    <button value={'8'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>8</button>
    <button value={'9'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>9</button>
    <button value={'*'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>*</button>
    <button value={'+/-'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>+/-</button>
    <button value={'0'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>0</button>
    <button value={'.'} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>.</button>
    <button value={'Enter'} className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black" onClick={({target: {value}}) => onKeyPress(value)}>=</button>
    </div>
  );
}

export default ProgrammerKeypad;
