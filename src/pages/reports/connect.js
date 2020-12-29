import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReports } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_REPORTS } from './store/actions'

const sort = [
  { _id: 'machine', sort: 'machine' },
  { _id: 'shift', sort: 'shift' },
  { _id: 'date', sort: 'date' },
  { _id: 'team', sort: 'team' }
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
            sortName={SORT_REPORTS}
            sort
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
