import React, { useState, useContext, useEffect } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import StandardCalculator from './StandardCalculator'
import ProgrammerCalculator from './ProgrammerCalculator'

function CalculatorLayout() {
  const [programmerMode, setProgrammerMode] = useState(false)

  const { darkMode, setDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
    } else {
      window.document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="max-w-screen-xs mx-auto mt-4">
      <div className="flex">
        <button
          type="button"
          className="px-3 py-1 mx-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-t-xl hover:font-bold hover:disabled:font-normal"
          onClick={() => setProgrammerMode(false)}
          disabled={!programmerMode}
        >Standard
        </button>
        <button
          type="button"
          className="px-3 py-1 mx-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-t-xl hover:font-bold hover:disabled:font-normal"
          onClick={() => setProgrammerMode(true)}
          disabled={programmerMode}
        >Programmer
        </button>
        <div className="flex grow justify-end">
          <button
            type="button"
            className="flex justify-end items-center group text-2xl px-3 py-1 mx-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-t-xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            <p className="hidden group-hover:flex text-sm font-semibold pr-2">{darkMode ? 'Light mode' : 'Dark mode'}</p>
            {darkMode ? <span role="img">☀️</span> : <span role="img">🌑</span>}
          </button>
        </div>
      </div>
      <div className="border-2 border-slate-200 dark:border-slate-800 rounded">
        {programmerMode ? <ProgrammerCalculator /> : <StandardCalculator />}
      </div>
    </div>
  )
}

export default CalculatorLayout
