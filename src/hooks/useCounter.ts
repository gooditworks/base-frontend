import {useState} from "react"

const useCounter = (inititalValue = 0) => {
  const [value, setValue] = useState(inititalValue)

  const increment = () => setValue(value + 1)

  const decrement = () => setValue(value - 1)

  return {value, increment, decrement}
}

export default useCounter
