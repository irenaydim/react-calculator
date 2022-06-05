import React from "react";
import KeypadButton from "./KeypadButton"

const keys = [
  { text: 'AC', value: 'Delete', color: 'highlight' },
  { text: '⇦', value: 'Backspace', color: 'dark' },
  { text: '&', value: '&', color: 'dark' },
  { text: '|', value: '|', color: 'dark' },
  { text: '!', value: '!', color: 'dark' },
  { text: '0', value: '0', color: 'light' },
  { text: '1', value: '1', color: 'light' },
  { text: '2', value: '2', color: 'light', checkBase: true },
  { text: '3', value: '3', color: 'light', checkBase: true },
  { text: '<<', value: '<<', color: 'dark' },
  { text: '4', value: '4', color: 'light', checkBase: true },
  { text: '5', value: '5', color: 'light', checkBase: true },
  { text: '6', value: '6', color: 'light', checkBase: true },
  { text: '7', value: '7', color: 'light', checkBase: true },
  { text: '>>', value: '>>', color: 'dark' },
  { text: '8', value: '8', color: 'light', checkBase: true },
  { text: '9', value: '9', color: 'light', checkBase: true },
  { text: 'A', value: 'A', color: 'light', checkBase: true },
  { text: 'B', value: 'B', color: 'light', checkBase: true },
  { text: '+/-', value: '+/-', color: 'light' },
  { text: 'C', value: 'C', color: 'light', checkBase: true },
  { text: 'D', value: 'D', color: 'light', checkBase: true },
  { text: 'E', value: 'E', color: 'light', checkBase: true },
  { text: 'F', value: 'F', color: 'light', checkBase: true },
  { text: '=', value: 'Enter', color: 'dark' },
]

function ProgrammerKeypad({ onKeyPress, base }) {
  return (
    <div className="grid grid-cols-5 text-slate-900 dark:text-slate-50 font-mono">
      {
        keys.map(({text, value, color, checkBase}) =>
          <KeypadButton 
            text={text}
            value={value} 
            onClick={onKeyPress} 
            color={color} 
            onKeyPress={onKeyPress} 
            disabled={checkBase ? (!isNaN(value) && parseInt(value) >= base) || (isNaN(value) && base <= 10) : false} />)
      }
    </div>
  );
}

export default ProgrammerKeypad;
