import {FC} from "react"

interface Props {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

const Counter: FC<Props> = ({value, onIncrement, onDecrement}: Props) => (
  <div className="flex items-center space-x-8 text-5xl">
    <button onClick={onDecrement} type="button" data-test="counter_dec">
      -
    </button>
    <span data-test="counter_value">{value}</span>
    <button onClick={onIncrement} type="button" data-test="counter_inc">
      +
    </button>
  </div>
)

export default Counter
