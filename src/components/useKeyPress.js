import { useEffect } from "react";

export function useKeyPress(callback, keyCodes) {
  const handler = ({ key }) => {
    if (keyCodes.includes(key)) {
      callback(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  });
}
