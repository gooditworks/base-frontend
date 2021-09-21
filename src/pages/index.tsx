import React from "react"

import useCounter from "hooks/useCounter"
import Counter from "components/Counter"

const Index = () => {
  const {value, increment, decrement} = useCounter()

  if (value === 42) {
    throw new Error("counter value is 42!")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Counter value={value} onIncrement={increment} onDecrement={decrement} />
    </div>
  )
}

export default Index
