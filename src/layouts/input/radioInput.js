import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onRadio } from 'helpers'

export default function ConnectedRadioInput({ reducer, input, name }) {
  const dispatch = useDispatch()
  const value = useSelector((state) => state[reducer][input])

  return (
    <>
      <input
        type="radio"
        id="true"
        name={name}
        value={'true'}
        checked={value === true}
        onChange={(e) => {
          const radio = onRadio(e.target.value)
          dispatch({ type: e.target.name, payload: radio })
        }}
        required
      ></input>
      <label htmlFor="true">Yes</label>
      <input
        type="radio"
        id="false"
        name={name}
        value={'false'}
        checked={value === false}
        onChange={(e) => {
          const radio = onRadio(e.target.value)
          dispatch({ type: e.target.name, payload: radio })
        }}
        required
      ></input>
      <label htmlFor="false">No</label>
    </>
  )
}
