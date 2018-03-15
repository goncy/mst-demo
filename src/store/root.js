import Rents from "./models/Rents"

import * as initialState from "./initialState"

export default {
  rents: Rents.create(initialState.rents)
}
