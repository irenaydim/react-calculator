import React, {useState} from "react";
import { useKeyPress } from "./useKeyPress";
import ProgrammerKeypad from "./ProgrammerKeypad"

function ProgrammerCalculator() {
  const [currVal, setCurrVal] = useState('')
  const [prevVal, setPrevVal] = useState('')
  const [lastOp, setLastOp] = useState('')
  const [base, setBase] = useState(10)
  const [clearCurr, setClearCurr] = useState(false)

  useKeyPress(onKeyPress, ['0', '1', '2', '3', '4', '5','6','7','8','9', 'A', 'B', 'C', 'D', 'E', 'F', 'Enter', 'Delete', 'Escape', 'Backspace']);

  function onKeyPress(value) {
    if (/^[0-9A-F]$/.test(value)) {
      handleDigit(value)
    } else if (/^[&|^]$/.test(value) || value === '<<' || value === '>>') {
      handleOperation(value)
    } else if (value === 'Enter') {
      handleEquals()
    } else if (value === '+/-') {
      handleSignToggle()
    } else if (value === 'Delete' || value === 'Escape') {
      clearAll()
    } else if (value === 'Backspace') {
      handleBack()
    }
  }

  function handleDigit(digit) {
    setCurrVal(clearCurr ? digit : currVal + digit)
    if (clearCurr) {
      setClearCurr(false)
    }
  }

  function clearAll() {
    setCurrVal('')
    setPrevVal('')
    setLastOp('')
    setClearCurr(false)
  }

  function handleEquals() {
    if (currVal && prevVal && lastOp) {
      setCurrVal(calculate(parseInt(prevVal, base), parseInt(currVal, base), lastOp, base))
      setLastOp('')
      setPrevVal('')
      setClearCurr(true)
    }
  }

  function handleOperation(op) {
    if (currVal && prevVal && !clearCurr) {
      const res = calculate(parseInt(prevVal, base), parseInt(currVal, base), op, base)
      setCurrVal(res)
      setPrevVal(res)
    } else {
      setPrevVal(currVal || '0')
    }
    setLastOp(op)
    setClearCurr(true)
  }

  function handleSignToggle() {
    setCurrVal(calculate(0, parseInt(currVal, base) || '0', '+/-', base))
  }

  function handleBack() {
    setCurrVal(currVal.slice(0, -1))
  }

  function calculate(n1, n2, op, base = 10) {
    switch(op) {
      case '&': return (n1 & n2).toString(base)
      case '|': return (n1 | n2).toString(base)
      case '^': return (n1 ^ n2).toString(base)
      case '<<': return (n1 << n2).toString(base)
      case '>>': return (n1 >> n2).toString(base)
      case '+/-': return (n2 * -1).toString(base)
      default: return n2
    }
  }

  function changeBase({target: {value}}) {
    let newBase = value === 'hex' ? 16 : value === 'oct' ? 8 : value === 'bin' ? 2 : 10
    setCurrVal((parseInt(currVal, base) || '').toString(newBase))
    setBase(newBase)
  }

  return (
    <>
    <p className="w-full p-0 pr-2 font-mono text-sm text-right">{`${prevVal} ${lastOp}`}</p>
        <input type="text" disabled className="w-full p-1 font-mono text-lg text-right dark:bg-slate-800 dark:text-slate-50" value={currVal} />
      <div className="grid grid-cols-1 gap-0 font-mono dark:bg-slate-800 dark:text-slate-50">
        <button className='pl-2 text-left hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-500' style={{ borderLeftWidth: base === 16 ? '5px' : 0}} value="hex" onClick={changeBase}>{`Hex ${(parseInt(currVal, base) || '').toString(16)}`}</button>
        <button className='pl-2 text-left hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-500' style={{ borderLeftWidth: base === 10 ? '5px' : 0}} value="dec" onClick={changeBase}>{`Dec ${(parseInt(currVal, base) || '').toString(10)}`}</button>
        <button className='pl-2 text-left hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-500' style={{ borderLeftWidth: base === 8 ? '5px' : 0}} value="oct" onClick={changeBase}>{`Oct ${(parseInt(currVal, base) || '').toString(8)}`}</button>
        <button className='pl-2 text-left hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-500' style={{ borderLeftWidth: base === 2 ? '5px' : 0}} value="bin" onClick={changeBase}>{`Bin ${(parseInt(currVal, base) || '').toString(2)}`}</button>
      </div>
      <ProgrammerKeypad onKeyPress={onKeyPress} base={base} />
      </>
  );
}

export default ProgrammerCalculator;
