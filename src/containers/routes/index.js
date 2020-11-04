import React from 'react'
import { Route } from 'react-router-dom'
import { data } from './routes'

export default function renderRoutes() {
  const routes = data.map((route, index) => {
    return <Route key={index} path={route[0]} exact component={route[1]} />
  })

  return { routes }
}
