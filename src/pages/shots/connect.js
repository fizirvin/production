import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShots } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ shots, fetchShots }) => {
  const { loading, message, items } = shots

  useEffect(() => {
    if (items.length === 0) {
      fetchShots()
    }
  }, [items, fetchShots])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  shots: state.shots
})

export default connect(mapStateToProps, { fetchShots })(Connect)
