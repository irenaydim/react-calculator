import React from 'react'
import KeypadButton from './KeypadButton'
import PropTypes from 'prop-types'

const keys = [
  { color: 'highlight', text: 'AC', value: 'Delete' },
  { color: 'dark', text: '⇦', value: 'Backspace' },
  { color: 'dark', text: '%', value: '%' },
  { color: 'dark', text: '/', value: '/' },
  { color: 'light', text: '1', value: '1' },
  { color: 'light', text: '2', value: '2' },
  { color: 'light', text: '3', value: '3' },
  { color: 'dark', text: '+', value: '+' },
  { color: 'light', text: '4', value: '4' },
  { color: 'light', text: '5', value: '5' },
  { color: 'light', text: '6', value: '6' },
  { color: 'dark', text: '-', value: '-' },
  { color: 'light', text: '7', value: '7' },
  { color: 'light', text: '8', value: '8' },
  { color: 'light', text: '9', value: '9' },
  { color: 'dark', text: '*', value: '*' },
  { color: 'light', text: '+/-', value: '+/-' },
  { color: 'light', text: '0', value: '0' },
  { color: 'light', text: '.', value: '.' },
  { color: 'dark', text: '=', value: 'Enter' }
]

function StandardKeypad({ onKeyPress }) {
  return (
    <div className="grid grid-cols-4 text-slate-900 dark:text-slate-50 font-mono">
      {
        keys.map(({ text, value, color }) => (
          <KeypadButton
            color={color} key={value} onClick={onKeyPress}
            onKeyPress={onKeyPress} text={text}
            value={value}
          />))
      }
    </div>
  )
}

StandardKeypad.propTypes = {
  onKeyPress: PropTypes.func.isRequired
}

export default StandardKeypad
