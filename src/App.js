import React, {useState} from 'react'
import CalculatorLayout from './components/CalculatorLayout'
import ThemeContext from "./contexts/ThemeContext"

function App() {
  const [darkMode, setDarkMode] = useState("light")
  const value = { darkMode, setDarkMode }

  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <main>
          <CalculatorLayout />
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
