import React from "react"
import {render} from "@testing-library/react"

import Counter from "./Counter"

it("matches snapshot", () => {
  const counter = <Counter value={0} onIncrement={() => {}} onDecrement={() => {}} />
  const {container} = render(counter)

  expect(container.firstChild).toMatchSnapshot()
})
