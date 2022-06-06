import { useEffect } from 'react'

export function useKeyPress(callback, keyCodes) {
  const handler = (event) => {
    const { key } = event
    if (keyCodes.includes(key)) {
      event.preventDefault()
      callback(key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  })
}
