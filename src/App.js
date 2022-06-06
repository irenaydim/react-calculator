import React, { useState, useMemo } from 'react'
import CalculatorLayout from './components/CalculatorLayout'
import ThemeContext from './contexts/ThemeContext'

function App() {
  const [darkMode, setDarkMode] = useState('light')
  const themeContextValue = useMemo(() => ({ darkMode, setDarkMode }), [darkMode, setDarkMode])

  return (
    <div className="App">
      <ThemeContext.Provider value={themeContextValue}>
        <main>
          <CalculatorLayout />
        </main>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
