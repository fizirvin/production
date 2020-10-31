import React from 'react'
import Spinner from 'components/spinner'
import { useSelector } from 'react-redux'

export default function SubmitComponent() {
  const loading = useSelector((state) => state.moldes.loading)

  console.log('soy submit')
  return (
    <button type="submit" disabled={loading}>
      Submit {loading && <Spinner />}
    </button>
  )
}
