// @flow
import React from "react"
import { observer } from "mobx-react"

import { mock as rent } from "../store/models/Rent"
import type { RentsType } from "../store/models/Rents"

type Props = {
  rents: RentsType
}

const Rents = ({ rents }: Props) => (
  <div>
    {JSON.stringify(rents.list)}
    <br />
    <button onClick={() => rents.add(rent)}>Add rent</button>
  </div>
)

const enhancer = observer

export default enhancer(Rents)
