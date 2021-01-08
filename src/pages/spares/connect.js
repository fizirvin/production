import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSpares } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_SPARES } from './store/actions'

const sort = [
  { _id: 'code', sort: 'code' },
  { _id: 'name', sort: 'name' },
  { _id: 'part', sort: 'part' }
]

const Connect = ({ spares, fetchSpares }) => {
  const { loading, message, items, total, page } = spares

  useEffect(() => {
    if (items.length === 0) {
      fetchSpares()
    }
  }, [items, fetchSpares])

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
            fetch={fetchSpares}
            to={'/spares/add'}
            title={'Spare'}
            sortName={SORT_SPARES}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  spares: state.spares
})

export default connect(mapStateToProps, { fetchSpares })(Connect)
