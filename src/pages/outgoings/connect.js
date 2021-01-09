import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchOutgoings } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_OUTGOINGS } from './store/actions'

const sort = [
  { _id: 'date', sort: 'date' },
  { _id: 'spare', sort: 'spare' },
  { _id: 'provider', sort: 'provider' },
  { _id: 'origin', sort: 'origin' }
]

const Connect = ({ outgoings, fetchOutgoings }) => {
  const { loading, message, items, total, page } = outgoings

  useEffect(() => {
    if (items.length === 0) {
      fetchOutgoings()
    }
  }, [items, fetchOutgoings])

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
            fetch={fetchOutgoings}
            to={'/outgoings/add'}
            title={'Outgoing'}
            sortName={SORT_OUTGOINGS}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  outgoings: state.outgoings
})

export default connect(mapStateToProps, { fetchOutgoings })(Connect)
