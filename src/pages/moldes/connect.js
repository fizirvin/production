import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMoldes } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_MOLDES } from './store/actions'

const sort = [
  { _id: 'number', sort: 'number' },
  { _id: 'percent', sort: 'percent' },
  { _id: 'tcycles', sort: 'tcycles' }
]

const Connect = ({ moldes, fetchMoldes }) => {
  const { loading, message, items, total, page } = moldes

  useEffect(() => {
    if (items.length === 0) {
      fetchMoldes()
    }
  }, [items, fetchMoldes])

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
            fetch={fetchMoldes}
            to={'/molds/add'}
            title={'Molde'}
            sortName={SORT_MOLDES}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  moldes: state.moldes
})

export default connect(mapStateToProps, { fetchMoldes })(Connect)
