import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReports } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
]

const Connect = ({ reports, fetchReports }) => {
  const { loading, message, items, total, page } = reports

  useEffect(() => {
    if (items.length === 0) {
      fetchReports()
    }
  }, [items, fetchReports])

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
            fetch={fetchReports}
            to={'/reports/add'}
            title={'Report'}
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  reports: state.reports
})

export default connect(mapStateToProps, { fetchReports })(Connect)
