import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import App from 'App'
import NotFound from './NotFound'
import ConnectLogin from './connectLogin'

const Auth = ({ history }) => {
  const [auth, setAuth] = useState({})

  const logoutHandler = useCallback(() => {
    history.replace('/')
    setAuth({ isAuth: false, token: null, userId: null, name: null })
    localStorage.removeItem('token')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
  }, [history])

  const setAutoLogout = useCallback(
    (milliseconds) => {
      setTimeout(() => {
        logoutHandler()
      }, milliseconds)
    },
    [logoutHandler]
  )

  useEffect(() => {
    const token = localStorage.getItem('token')
    const expiryDate = localStorage.getItem('expiryDate')
    if (!token || !expiryDate) {
      return
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler()
      return
    }

    const userId = localStorage.getItem('userId')
    const name = localStorage.getItem('name')
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime()
    setAuth({ isAuth: true, token, userId, name })
    setAutoLogout(remainingMilliseconds)
  }, [logoutHandler, setAutoLogout])

  const setAuthHandler = ({ token, userId, name }) => {
    setAuth({ isAuth: true, token, userId, name })
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('name', name)
    const remainingMilliseconds = 60 * 60 * 1000
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
    localStorage.setItem('expiryDate', expiryDate.toISOString())
    setAutoLogout(remainingMilliseconds)
    history.replace('/')
  }

  const renderHome = () => {
    if (auth.isAuth) {
      return (
        <App
          logoutHandler={logoutHandler}
          token={auth.token}
          userId={auth.userId}
          name={auth.name}
        />
      )
    } else {
      return (
        <BrowserRouter>
          <Switch>
            <Route
              path={'/'}
              exact
              component={(props) => (
                <ConnectLogin {...props} onLogin={setAuthHandler} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      )
    }
  }

  return renderHome()
}

export default withRouter(Auth)
