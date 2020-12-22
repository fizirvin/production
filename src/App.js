import React, { useEffect } from 'react'

import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import store from './redux'
import { Layout } from 'layouts'
import { renderRoutes } from 'containers'

export default function App({ token, userId, name, logoutHandler }) {
  const { routes } = renderRoutes()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'REQUEST_SUCCESS_LOGIN',
      payload: { token, userId, name }
    })
  }, [name, token, userId, dispatch])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout logoutHandler={logoutHandler}>
          <Switch>{routes}</Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
