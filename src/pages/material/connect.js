import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaterials } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ materials, fetchMaterials }) => {
  const { loading, message, items } = materials

  useEffect(() => {
    if (items.length === 0) {
      fetchMaterials()
    }
  }, [items, fetchMaterials])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  materials: state.materials
})

export default connect(mapStateToProps, { fetchMaterials })(Connect)
