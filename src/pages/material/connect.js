import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaterials } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
]

const Connect = ({ materials, fetchMaterials }) => {
  const { loading, message, items, total, page } = materials

  useEffect(() => {
    if (items.length === 0) {
      fetchMaterials()
    }
  }, [items, fetchMaterials])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && !loading && (
        <>
          <ControlComponent
            length={items.length}
            page={page}
            total={total}
            items={sort}
            k={'sort'}
            loading={loading}
            fetch={fetchMaterials}
            to={'/materials/add'}
            title={'Material'}
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  materials: state.materials
})

export default connect(mapStateToProps, { fetchMaterials })(Connect)
