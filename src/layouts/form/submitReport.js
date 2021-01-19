import React from 'react'
import useConnect from 'hooks/useConnect'
import { useDispatch } from 'react-redux'

export default function SubmitReport({ form, onSubmit, load, name }) {
  const { input, user, loading } = useConnect(form, load)
  const dispatch = useDispatch()

  function submit() {
    input.user = user
    onSubmit(input).then(() => dispatch({ type: name }))
  }

  const validate = () => {
    const total = input.ngs.reduce((a, b) => {
      return a + b.pieces || 0
    }, 0)

    return input.ng !== total
  }
  return (
    <button type="submit" disabled={loading || validate()} onClick={submit}>
      {loading ? '...Submitting' : 'Submit'}
    </button>
  )
}
