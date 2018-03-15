import React, { Component } from "react"
import { inject } from "mobx-react"

import Rents from "./components/Rents"

import "./App.css"

class App extends Component {
  render() {
    const { rents } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cramer propiedades</h1>
        </header>
        <div className="App-intro">
          <Rents rents={rents} />
        </div>
      </div>
    )
  }
}

export default inject("rents")(App)
