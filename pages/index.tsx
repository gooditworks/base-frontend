import React from "react"

import useCounter from "lib/hooks/useCounter"
import Counter from "components/Counter"

const Index = () => {
  const {value, increment, decrement} = useCounter()

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Counter value={value} onIncrement={increment} onDecrement={decrement} />
    </div>
  )
}

export default Index
