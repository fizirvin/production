import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPrograms } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ programs, fetchPrograms }) => {
  const { loading, error, items } = programs

  useEffect(() => {
    if (items.length === 0) {
      fetchPrograms()
    }
  }, [items, fetchPrograms])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  programs: state.programs
})

export default connect(mapStateToProps, { fetchPrograms })(Connect)
