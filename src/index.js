import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"

import App from "./App"

import registerServiceWorker from "./registerServiceWorker"
import store from "./store/root"

import "./index.css"

function renderApp() {
  ReactDOM.render(
    <Provider {...store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
}

renderApp()

if (module.hot) {
  module.hot.accept(["./App"], () => {
    renderApp()
  })
}

registerServiceWorker()
