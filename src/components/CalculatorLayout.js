import React, {useState} from "react";
import StandardCalculator from './StandardCalculator';
import ProgrammerCalculator from './ProgrammerCalculator'

function CalculatorLayout() {
  const [programmerMode, setProgrammerMode] = useState(false)

  return (
    <div className="max-w-screen-sm">
      <button className="p-1 mx-1 bg-slate-100 hover:bg-slate-200" onClick={() => setProgrammerMode(false)}>Standard</button>
      <button className="p-1 mx-1 bg-slate-100 hover:bg-slate-200" onClick={() => setProgrammerMode(true)}>Programmer</button>
      <div className="border-2 border-slate-800">
        {programmerMode ? <ProgrammerCalculator /> : <StandardCalculator />}
      </div>
    </div>
  );
}

export default CalculatorLayout;
