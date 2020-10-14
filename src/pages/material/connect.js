import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaterials } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ materials, fetchMaterials }) => {
  const { loading, error, items } = materials

  useEffect(() => {
    if (items.length === 0) {
      fetchMaterials()
    }
  }, [items, fetchMaterials])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  materials: state.materials
})

export default connect(mapStateToProps, { fetchMaterials })(Connect)
