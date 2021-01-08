import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchIngoings } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_INGOINGS } from './store/actions'

const sort = [
  { _id: 'date', sort: 'date' },
  { _id: 'spare', sort: 'spare' },
  { _id: 'provider', sort: 'provider' },
  { _id: 'origin', sort: 'origin' }
]

const Connect = ({ ingoings, fetchIngoings }) => {
  const { loading, message, items, total, page } = ingoings

  useEffect(() => {
    if (items.length === 0) {
      fetchIngoings()
    }
  }, [items, fetchIngoings])

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
            fetch={fetchIngoings}
            to={'/ingoings/add'}
            title={'Ingoing'}
            sortName={SORT_INGOINGS}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  ingoings: state.ingoings
})

export default connect(mapStateToProps, { fetchIngoings })(Connect)
