import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDefects } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ defects, fetchDefects }) => {
  const { loading, error, items } = defects

  useEffect(() => {
    if (items.length === 0) {
      fetchDefects()
    }
  }, [items, fetchDefects])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  defects: state.defects
})

export default connect(mapStateToProps, { fetchDefects })(Connect)
