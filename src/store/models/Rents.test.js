import { getSnapshot } from "mobx-state-tree"
import Rents, { mock } from "./Rents"
import Rent, { mock as rent } from "./Rent"

const INITIAL_RENTS = mock

describe("Rents model", () => {
  let rents

  beforeEach(() => {
    rents = Rents.create({ list: [] })
  })

  it("can create a rents", () => {
    expect(rents).toBeDefined()
  })

  it("can create a default rents", () => {
    rents = Rents.create(INITIAL_RENTS)
    const received = getSnapshot(rents)

    expect(received).toEqual(INITIAL_RENTS)
  })

  it("can add rents", () => {
    expect(rents.list.length).toBe(0)
    rents.add(rent)
    expect(rents.list.length).toBe(1)
    expect(rents.list[0].name).toBe(rent.name)
  })

  it("can remove rents", () => {
    const mockRent = Rent.create(rent)

    rents.add(mockRent)
    expect(rents.list.length).toBe(1)
    rents.remove(mockRent)
    expect(rents.list.length).toBe(0)
  })
})
