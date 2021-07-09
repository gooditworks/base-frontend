import React from "react"
import renderer from "react-test-renderer"

import Counter from "./Counter"

it("matches snapshot", () => {
  const couter = <Counter value={0} onIncrement={() => {}} onDecrement={() => {}} />

  const tree = renderer.create(couter).toJSON()
  expect(tree).toMatchSnapshot()
})
