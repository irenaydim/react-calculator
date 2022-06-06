import React from 'react'
import PropTypes from 'prop-types'

function OutputScreen({ primaryText, secondaryText }) {
  return (
    <div className="flex flex-col">
      <p className="w-full p-0 pr-2 font-mono text-sm text-right dark:bg-slate-800 dark:text-slate-50">{secondaryText}&nbsp;</p>
      <input type="text" disabled className="w-full p-1 font-mono text-lg text-right dark:bg-slate-800 dark:text-slate-50" value={primaryText.toUpperCase()} />
    </div>
  )
}

OutputScreen.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired
}

export default OutputScreen
