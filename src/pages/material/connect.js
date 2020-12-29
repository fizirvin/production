import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMaterials } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_MATERIAL } from './store/actions'

const sort = [
  { _id: 'manufacturer', sort: 'manufacturer' },
  { _id: 'serial', sort: 'serial' }
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
            sortName={SORT_MATERIAL}
            sort
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
