import { useState } from 'react'

function useDebounce() {
  const [eventTimeout, setEventTimeout] = useState("");

  return function debounce (func, delay = 1000) {
    clearTimeout(eventTimeout);
    const timer = setTimeout(() => func(), delay);
    setEventTimeout(timer);
  }
}

export default useDebounce;
