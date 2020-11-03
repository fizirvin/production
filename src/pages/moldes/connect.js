import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMoldes } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ moldes, fetchMoldes }) => {
  const { loading, message, items } = moldes

  useEffect(() => {
    if (items.length === 0) {
      fetchMoldes()
    }
  }, [items, fetchMoldes])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  moldes: state.moldes
})

export default connect(mapStateToProps, { fetchMoldes })(Connect)
