import React from 'react'

function KeypadButton({ text, value: buttonValue, onClick, disabled, color = 'light' }) {
  const className = color === 'highlight'
    ? 'p-2 select-none bg-orange-300 dark:bg-orange-600 hover:bg-orange-400 dark:hover:bg-orange-700 hover:font-black'
    : color === 'dark'
      ? 'p-2 select-none bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-900 hover:font-black'
      : 'p-2 select-none bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:bg-slate-50 dark:disabled:bg-slate-600 disabled:hover:font-normal hover:font-black'

  return (
    <button
      type="button"
      value={buttonValue}
      className={className}
      onClick={({ target: { value } }) => onClick(value)} disabled={disabled}
    >
      {text}
    </button>)
}

export default KeypadButton
