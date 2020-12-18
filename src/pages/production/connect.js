import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProduction } from './store/actions'
import Spinner from 'components/spinner'
// import Table from './table'
// import { ControlComponent } from 'layouts'
import Header from './header'

const Connect = ({ production, fetchProduction }) => {
  const { loading, message, items, period, shifts, filter, date } = production

  useEffect(() => {
    fetchProduction({
      today: date,
      filter: filter,
      period: period,
      shifts: shifts
    })
  }, [fetchProduction, period, shifts, date, filter])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {!loading && (
        <>
          <Header period={period} shifts={shifts} filter={filter} date={date} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  production: state.production
})

export default connect(mapStateToProps, { fetchProduction })(Connect)
