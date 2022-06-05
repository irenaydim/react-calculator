import React, {useState} from "react";
import { useKeyPress } from "./useKeyPress";
import StandardKeypad from "./StandardKeypad"

function StandardCalculator() {
  const [currVal, setCurrVal] = useState('')
  const [prevVal, setPrevVal] = useState('')
  const [lastOp, setLastOp] = useState('')
  const [clearCurr, setClearCurr] = useState(false)

  useKeyPress(onKeyPress, ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5','6','7','8','9', 'Enter', 'Delete', 'Escape', 'Backspace']);

  function onKeyPress(value) {
    if (/^[0-9]$/.test(value)) {
      handleDigit(value)
    } else if (/^[/\-+*]$/.test(value)) {
      handleOperation(value)
    } else if (value === 'Enter') {
      handleEquals()
    } else if (value === '%') {
      handlePercent()
    } else if (value === '+/-') {
      handleSignToggle()
    } else if (value === 'Delete' || value === 'Escape') {
    clearAll()
  } else if ( value === 'Backspace') {
    handleBack()
  }else if (value === '.') {
      handleDot()
    }
  }

  function handleDigit(digit) {
    setCurrVal(currVal !== '0' && !clearCurr ? currVal + digit : digit)
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
      setCurrVal(calculate(prevVal, currVal, lastOp))
      setLastOp('')
      setPrevVal('')
      setClearCurr(true)
    }
  }

  function handleOperation(op) {
    if (currVal && prevVal && !clearCurr) {
      const res = calculate(prevVal, currVal, op)
      setCurrVal(res)
      setPrevVal(res)
    } else {
      setPrevVal(currVal || '0')
    }
    setLastOp(op)
    setClearCurr(true)
  }

  function handlePercent() {
    if (lastOp === '+' || lastOp === '-') {
      setCurrVal(calculate(prevVal, currVal, '%'))
    } else {
      setCurrVal(calculate(1, currVal, '%'))
    }
    setClearCurr(true)
  }

  function handleSignToggle() {
    setCurrVal(calculate('', currVal || '0', '+/-'))
  }

  function handleDot() {
    if (!/\./.test(currVal)) {
      setCurrVal(currVal !== '' ? `${currVal}.` : '0.')
      if (clearCurr) {
        setClearCurr(false)
      }
    }
  }

  function handleBack() {
    setCurrVal(currVal.slice(0, -1))
  }

  function calculate(n1, n2, op) {
    switch(op) {
      case '+': return (parseFloat(n1) + parseFloat(n2)).toString()
      case '-': return (parseFloat(n1) - parseFloat(n2)).toString()
      case '*': return (parseFloat(n1) * parseFloat(n2)).toString()
      case '/': return (parseFloat(n1) / parseFloat(n2)).toString()
      case '%': return (parseFloat(n1) * parseFloat(n2) / 100).toString()
      case '+/-': return (parseFloat(n2) * -1).toString()
      default: return n2
    }
  }
  return (
    <>
    <p className="w-full p-0 pr-2 font-mono text-sm text-right">{`${prevVal} ${lastOp}`}</p>
    <input type="text" disabled className="w-full p-1 font-mono text-lg text-right dark:bg-slate-800 dark:text-slate-50" value={currVal} />
      <StandardKeypad onKeyPress={onKeyPress} />
      </>
  );
}

export default StandardCalculator;
