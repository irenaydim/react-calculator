import React from 'react'

function BaseButton({ value, text, onClick, componentStyle }) {
  return (
    <button
      type="button"
      className="pl-2 break-all text-sm text-left hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-500"
      value={value}
      style={componentStyle}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default BaseButton
