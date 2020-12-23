import React, { useState } from 'react'
import useConnect from 'hooks/useConnect'
import { useDispatch } from 'react-redux'

export default function DeleteComponent({ form, load, onDelete, name }) {
  const [question, setQuestion] = useState(false)

  const { input, user, loading } = useConnect(form, load)
  const dispatch = useDispatch()

  function submit() {
    const inputRequest = {
      _id: input._id,
      user: user
    }
    onDelete(inputRequest).then(() => dispatch({ type: name }))
  }

  const deleteButtons = (
    <>
      <button type="button" onClick={() => setQuestion(false)}>
        Cancel Delete
      </button>
      <button type="button" disabled={loading} onClick={submit}>
        {loading ? '...Deleting' : 'Confirm Delete'}
      </button>
    </>
  )

  return question ? (
    deleteButtons
  ) : (
    <button type="button" onClick={() => setQuestion(true)}>
      Delete
    </button>
  )
}
