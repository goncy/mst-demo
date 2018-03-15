//@flow
import { types } from "mobx-state-tree"
import moment from "moment"

export type PriceType = {
  from: number,
  price: number
}

export const mock = {
  from: moment().unix(),
  price: 4500
}

export default types.model("Price", {
  from: types.optional(types.Date, moment().unix()),
  price: types.number
})
