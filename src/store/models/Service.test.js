import { getSnapshot } from "mobx-state-tree"
import Service, { mock } from "./Service"

const INITIAL_SERVICE = mock

describe("Service model", () => {
  let service

  beforeEach(() => {
    service = Service.create(INITIAL_SERVICE)
  })

  it("can create a service", () => {
    const received = getSnapshot(service)

    expect(received).toEqual(INITIAL_SERVICE)
  })
})
