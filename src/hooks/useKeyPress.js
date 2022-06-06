import { useEffect, useRef } from 'react'

export function useKeyPress(callback, keyCodes) {
  const handler = (event) => {
    // eslint-disable-next-line no-console
    console.log('hook handler called')
    const { key } = event
    if (keyCodes.includes(key)) {
      event.preventDefault()
      callback(key)
    }
  }

  const cbRef = useRef(handler)

  useEffect(() => {
    cbRef.current = handler
  })

  useEffect(() => {
    const cb = (e) => cbRef.current(e)
    window.addEventListener('keydown', cb)
    return () => {
      window.removeEventListener('keydown', cb)
    }
  }, [])
}
