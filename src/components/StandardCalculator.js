import React, { useState } from 'react'
import { useKeyPress } from '../hooks/useKeyPress'
import StandardKeypad from './StandardKeypad'
import OutputScreen from './OutputScreen'
import { calculate } from '../utils/calculate'

function StandardCalculator() {
  const [currVal, setCurrVal] = useState('')
  const [prevVal, setPrevVal] = useState('')
  const [lastOp, setLastOp] = useState('')
  const [clearCurr, setClearCurr] = useState(false)

  useKeyPress(onKeyPress, ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Enter', 'Delete', 'Escape', 'Backspace'])

  function onKeyPress(value) {
    if ((/^[0-9]$/).test(value)) {
      handleDigit(value)
    } else if ((/^[/\-+*]$/).test(value)) {
      handleOperation(value)
    } else if (value === 'Enter') {
      handleEquals()
    } else if (value === '%') {
      handlePercent()
    } else if (value === '+/-') {
      handleSignToggle()
    } else if (value === 'Delete' || value === 'Escape') {
      clearAll()
    } else if (value === 'Backspace') {
      handleBack()
    } else if (value === '.') {
      handleDot()
    }
  }

  function handleDigit(digit) {
    setCurrVal(currVal !== '0' && !clearCurr
      ? currVal + digit
      : digit)
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
      setCurrVal(calculate(parseFloat(prevVal), parseFloat(currVal), lastOp))
      setLastOp('')
      setPrevVal('')
      setClearCurr(true)
    }
  }

  function handleOperation(op) {
    if (currVal && prevVal && !clearCurr) {
      const res = calculate(parseFloat(prevVal), parseFloat(currVal), lastOp)
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
      setCurrVal(calculate(parseFloat(prevVal), parseFloat(currVal), '%'))
    } else {
      setCurrVal(calculate(1, parseFloat(currVal), '%'))
    }
    setClearCurr(true)
  }

  function handleSignToggle() {
    setCurrVal(calculate(0, parseFloat(currVal) || 0, '+/-'))
  }

  function handleDot() {
    if (!(/\./).test(currVal)) {
      setCurrVal(currVal !== '' && !clearCurr ? `${currVal}.` : '0.')
      if (clearCurr) {
        setClearCurr(false)
      }
    }
  }

  function handleBack() {
    setCurrVal(currVal.slice(0, -1))
  }
  return (
    <>
      <OutputScreen primaryText={currVal} secondaryText={`${prevVal} ${lastOp}`} />
      <StandardKeypad onKeyPress={onKeyPress} />
    </>
  )
}

export default StandardCalculator
