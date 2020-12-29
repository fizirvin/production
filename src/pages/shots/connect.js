import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShots } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_SHOTS } from './store/actions'

const sort = [
  { _id: 'molde', sort: 'molde' },
  { _id: 'status', sort: 'status' },
  { _id: 'date', sort: 'date' }
]

const Connect = ({ shots, fetchShots }) => {
  const { loading, message, items, total, page } = shots

  useEffect(() => {
    if (items.length === 0) {
      fetchShots()
    }
  }, [items, fetchShots])

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
            fetch={fetchShots}
            to={'/shots/add'}
            title={'Shot'}
            sortName={SORT_SHOTS}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  shots: state.shots
})

export default connect(mapStateToProps, { fetchShots })(Connect)
