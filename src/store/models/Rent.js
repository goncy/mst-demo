// @flow
import { types } from "mobx-state-tree"
import moment from "moment"

import Price, { mock as price } from "./Price"
import Person, { mock as person } from "./Person"
import Service, { mock as service } from "./Service"

import type { PriceType } from "./Price"
import type { ServiceType } from "./Service"
import type { PersonType } from "./Person"

export type RentType = {
  startDate: number,
  endDate: number,
  prices: Array<PriceType>,
  services: Array<ServiceType>,
  location: string,
  name: string,
  tenant: PersonType,
  host: PersonType
}

export const mock = {
  startDate: moment().unix(),
  endDate: moment()
    .add(2, "years")
    .unix(),
  prices: [price],
  services: [service],
  location: "Cramer 1229, Bernal, Buenos Aires",
  name: "Casa de Cramer",
  tenant: person,
  host: person
}

export default types.model("Rent", {
  startDate: types.optional(types.Date, mock.startDate),
  endDate: types.optional(types.Date, mock.endDate),
  services: types.optional(types.array(Service), mock.services),
  prices: types.array(Price),
  location: types.string,
  name: types.string,
  tenant: Person,
  host: Person
})
