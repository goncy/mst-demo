import { getSnapshot } from "mobx-state-tree"
import Price, { mock } from "./Price"

const INITIAL_PRICE = mock

describe("Price model", () => {
  let price

  beforeEach(() => {
    price = Price.create(INITIAL_PRICE)
  })

  it("can create a price", () => {
    const received = getSnapshot(price)

    expect(received).toEqual(INITIAL_PRICE)
  })
})
