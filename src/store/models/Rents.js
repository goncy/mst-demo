// @flow
import { types, destroy } from "mobx-state-tree"

import Rent, { mock as rent } from "./Rent"
import type { RentType } from "./Rent"

export type RentsType = {
  list: Array<RentType>,
  add: (rent: RentType) => RentsType,
  remove: (rent: RentType) => RentsType
}

export const mock = {
  list: [rent]
}

export default types
  .model("Rents", {
    list: types.array(Rent)
  })
  .actions((self: RentsType) => ({
    add(rent: RentType) {
      self.list.push(rent)
    },
    remove(rent: RentType) {
      destroy(rent)
    }
  }))
