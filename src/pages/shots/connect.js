import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchShots } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
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
