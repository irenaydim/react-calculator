import React, {useState} from "react";
import { useKeyPress } from "./useKeyPress";
import Button from "./Button"

function ProgrammerCalculator() {
  const [currVal, setCurrVal] = useState('')
  const [prevVal, setPrevVal] = useState('')
  const [lastOp, setLastOp] = useState('')
  const [clearCurr, setClearCurr] = useState(false)

  useKeyPress(onKeyPress, ['0', '1', '2', '3', '4', '5','6','7','8','9', 'A', 'B', 'C', 'D', 'E', 'F', 'Enter', 'Delete']);

  function onKeyPress(value) {
    if (/^[0-9A-F]$/.test(value)) {
      handleDigit(value)
    } else if (/^[&|^]$/.test(value) || value === '<<' || value === '>>') {
      handleOperation(value)
    } else if (value === '=' || value === 'Enter') {
      handleEquals()
    } else if (value === '+/-') {
      handleSignToggle()
    } else if (value === 'AC' || value === 'Delete') {
      clearAll()
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

  function handleSignToggle() {
    setCurrVal(calculate('', currVal || '0', '+/-'))
  }

  function calculate(n1, n2, op) {
    switch(op) {
      case '&': return (BigInt(n1) & BigInt(n2)).toString()
      case '|': return (BigInt(n1) | BigInt(n2)).toString()
      case '^': return (BigInt(n1) ^ BigInt(n2)).toString()
      case '<<': return (BigInt(n1) << BigInt(n2)).toString()
      case '>>': return (BigInt(n1) >> BigInt(n2)).toString()
      case '+/-': return (BigInt(n2) * -1n).toString()
      default: return n2
    }
  }

  return (
    <>
    <p className="w-full p-0 pr-2 font-mono text-sm text-right">{`${prevVal} ${lastOp}`}</p>
    <input type="text" disabled className="w-full p-1 font-mono text-lg text-right" value={currVal} />
      <div className="grid grid-cols-5 gap-2 bg-slate-800 text-slate-50 font-mono">
        {
          ['AC', '', '&', '|', '^', '0', '1', '2', '3', '<<', '4', '5', '6', '7', '>>', '8', '9', 'A', 'B', '+/-', 'C', 'D', 'E', 'F', '='].map(item =>
            <Button key={item} value={item} onClick={({target: {value}}) => onKeyPress(value)} />)
        }
      </div>
      </>
  );
}

export default ProgrammerCalculator;
