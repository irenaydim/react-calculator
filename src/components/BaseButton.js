import React from 'react'

function BaseButton({value, text, onClick, style}) {
  return <button
    className='pl-2 text-left hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-500'
    value={value}
    style={style}
    onClick={onClick}>{text}</button>
}

export default BaseButton
