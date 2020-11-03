import React from 'react'
import useConnect from 'hooks/useConnect'
import { useDispatch } from 'react-redux'

export default function SubmitComponent({ form, onSubmit, load, name }) {
  const { input, user, loading } = useConnect(form, load)
  const dispatch = useDispatch()

  function submit() {
    input.user = user
    onSubmit(input).then(() => dispatch({ type: name }))
  }

  return (
    <button type="submit" disabled={loading} onClick={submit}>
      {loading ? '...Submitting' : 'Submit'}
    </button>
  )
}
