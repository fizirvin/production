import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginQuery from './queries'
import { fetchItems } from 'services'
import { LoginFormDiv, LoginDiv, LoginInput, LoginSubmit } from './styles'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        return
    }
  }

  const loginHandler = async (input, onLogin) => {
    loginQuery.variables = { name: input.name, password: input.password }
    const { status, data } = await fetchItems(loginQuery)

    if (!status) {
      dispatch({ type: 'RESQUEST_FAILURE_LOGIN', payload: data })
    } else {
      const { login } = data
      dispatch({ type: 'REQUEST_SUCCESS_LOGIN', payload: login })
      onLogin(login)
    }
  }

  const onSubmit = () => {
    if (!name || !password) {
      return
    }
    const input = {
      name,
      password
    }
    dispatch({ type: 'REQUEST_LOGIN' })
    loginHandler(input, onLogin)
  }

  return (
    <LoginDiv>
      <LoginFormDiv>
        <div>
          <LoginInput
            type="text"
            value={name}
            placeholder={'Name'}
            name={'name'}
            onChange={onChangeHandler}
          ></LoginInput>
        </div>
        <div>
          <LoginInput
            type={'password'}
            value={password}
            placeholder={'Password'}
            name={'password'}
            onChange={onChangeHandler}
          ></LoginInput>
        </div>
        <div>
          <LoginSubmit onClick={onSubmit}>Login</LoginSubmit>
        </div>
      </LoginFormDiv>
    </LoginDiv>
  )
}
