import {renderHook, act} from "@testing-library/react"

import useCounter from "./useCounter"

test("initial value works correctly", () => {
  const inititalValue = 42

  const {result} = renderHook(() => useCounter(inititalValue))

  expect(result.current.value).toBe(inititalValue)
})

test("increment works correctly", () => {
  const {result} = renderHook(() => useCounter(1))

  act(() => result.current.increment())
  expect(result.current.value).toBe(2)
})

test("decrement works correctly", () => {
  const {result} = renderHook(() => useCounter(1))

  act(() => result.current.decrement())
  expect(result.current.value).toBe(0)
})
