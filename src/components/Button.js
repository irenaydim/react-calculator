import React from 'react'

function Button({value, onClick}) {
  return <button value={value} className="p-2 hover:bg-slate-900 hover:font-black" onClick={onClick}>{value}</button>
}

export default Button
