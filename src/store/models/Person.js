// @flow
import { types } from "mobx-state-tree"

export type PersonType = {
  name: string,
  number: string,
  extra: string
}

export const mock = {
  name: "Gonzalo Pozzo",
  number: "1141634695",
  extra: "Lorem ipsum"
}

export default types.model("Person", {
  name: types.string,
  number: types.optional(types.string, "-"),
  extra: types.optional(types.string, "")
})
