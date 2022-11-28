"use client"

import {FC, useEffect} from "react"
import {log as axiomLog} from "next-axiom"

import useCounter from "hooks/useCounter"
import Counter from "components/Counter"

const CounterPage: FC = () => {
  const {value, increment, decrement} = useCounter()

  useEffect(() => {
    if (value === 10) {
      axiomLog.info("counter = 10")
    }

    if (value === 42) {
      throw new Error("counter value is 42!")
    }
  }, [value])

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Counter value={value} onIncrement={increment} onDecrement={decrement} />
    </div>
  )
}

export default CounterPage
