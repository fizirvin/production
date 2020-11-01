import React from 'react'
import useConnect from 'hooks/useConnect'

export default function SubmitComponent({ onSubmit, loading }) {
  const { moldesForm } = useConnect('moldesForm')

  function submit() {
    console.log('soy submit')
    onSubmit(moldesForm)
  }

  return (
    <button type="submit" disabled={loading}>
      Submit
    </button>
  )
}
