import React from 'react'

function KeypadButton({text, value, onClick, disabled, color = 'light'}) {
  return <button
    value={value} 
    className={color === 'highlight'
      ? "p-2 bg-orange-300 dark:bg-orange-600 hover:bg-orange-400 dark:hover:bg-orange-700 hover:font-black"
      : color === 'dark'
        ? "p-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black"
        : "p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:bg-slate-50 dark:disabled:bg-slate-600 disabled:hover:font-normal hover:font-black"}
    onClick={({target: {value}}) => onClick(value)} disabled={disabled}>
      {text}
    </button>
}

export default KeypadButton
