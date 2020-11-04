import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import { Layout } from 'layouts'
import { renderRoutes } from 'containers'

export default function App() {
  const { routes } = renderRoutes()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>{routes}</Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
