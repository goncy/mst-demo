// @flow
import { types } from "mobx-state-tree"

export type ServiceType = {
  name: string,
  price: number,
  registered: boolean
}

export const mock = {
  name: "Alquiler",
  price: 4500,
  registered: true
}

export default types.model("Service", {
  name: types.string,
  price: types.number,
  registered: types.optional(types.boolean, mock.registered)
})
