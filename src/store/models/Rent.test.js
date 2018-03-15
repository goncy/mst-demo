import { getSnapshot } from "mobx-state-tree"
import Rent, { mock } from "./Rent"

const INITIAL_RENT = mock

describe("Rent model", () => {
  let rent

  beforeEach(() => {
    rent = Rent.create(INITIAL_RENT)
  })

  it("can create a rent", () => {
    const received = getSnapshot(rent)

    expect(received).toEqual(INITIAL_RENT)
  })
})
