import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLocations } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_LOCATIONS } from './store/actions'

const sort = [
  { _id: 'code', sort: 'code' },
  { _id: 'name', sort: 'name' }
]

const Connect = ({ locations, fetchLocations }) => {
  const { loading, message, items, total, page } = locations

  useEffect(() => {
    if (items.length === 0) {
      fetchLocations()
    }
  }, [items, fetchLocations])

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
            fetch={fetchLocations}
            to={'/locations/add'}
            title={'Location'}
            sortName={SORT_LOCATIONS}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  locations: state.locations
})

export default connect(mapStateToProps, { fetchLocations })(Connect)
