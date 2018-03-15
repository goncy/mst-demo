import { getSnapshot } from "mobx-state-tree"
import Person, { mock } from "./Person"

const INITIAL_PERSON = mock

describe("Person model", () => {
  let person

  beforeEach(() => {
    person = Person.create(INITIAL_PERSON)
  })

  it("can create a person", () => {
    const received = getSnapshot(person)

    expect(received).toEqual(INITIAL_PERSON)
  })
})
