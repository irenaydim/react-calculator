import React from "react";
import KeypadButton from './KeypadButton'

const keys = [
  { text: 'AC', value: 'Delete', color: 'highlight' },
  { text: '⇦', value: 'Backspace', color: 'dark' },
  { text: '%', value: '%', color: 'dark' },
  { text: '/', value: '/', color: 'dark' },
  { text: '1', value: '1', color: 'light' },
  { text: '2', value: '2', color: 'light' },
  { text: '3', value: '3', color: 'light' },
  { text: '+', value: '+', color: 'dark' },
  { text: '4', value: '4', color: 'light' },
  { text: '5', value: '5', color: 'light' },
  { text: '6', value: '6', color: 'light' },
  { text: '-', value: '-', color: 'dark' },
  { text: '7', value: '7', color: 'light' },
  { text: '8', value: '8', color: 'light' },
  { text: '9', value: '9', color: 'light' },
  { text: '*', value: '*', color: 'dark' },
  { text: '+/-', value: '+/-', color: 'light' },
  { text: '0', value: '0', color: 'light' },
  { text: '.', value: '.', color: 'light' },
  { text: '=', value: 'Enter', color: 'dark' },
]

function StandardKeypad({ onKeyPress }) {
  return (
    <div className="grid grid-cols-4 text-slate-900 dark:text-slate-50 font-mono">
      {
        keys.map(({text, value, color}) => <KeypadButton text={text} value={value} onClick={onKeyPress} color={color} onKeyPress={onKeyPress} />)
      }
    </div>
  );
}

export default StandardKeypad;
