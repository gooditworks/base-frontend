import React from "react"

interface Props {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

const Counter = ({value, onIncrement, onDecrement}: Props) => (
  <div className="flex items-center space-x-8 text-5xl">
    <button onClick={onDecrement} type="button" data-cy="counter_dec">
      -
    </button>
    <span data-cy="counter_value">{value}</span>
    <button onClick={onIncrement} type="button" data-cy="counter_inc">
      +
    </button>
  </div>
)

export default Counter
