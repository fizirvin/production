import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import * as actions from './actions'
import Spinner from 'components/spinner'
import { formatDate } from 'helpers'
// import Table from './table'
// import { ControlComponent } from 'layouts'
import Header from './header'

const Connect = ({ production }) => {
  const { loading, message, items, period, shift, filter, date } = production

  const dispatch = useDispatch()

  useEffect(() => {
    const date = new Date()
    const today = formatDate(date)
    dispatch({ type: actions.DATE_PRODUCTION, payload: today })
  }, [dispatch])

  useEffect(() => {
    if (date === '') {
      return
    } else {
      // const fields = setFields(period, date)
    }
  }, [period, date, items])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {!loading && (
        <>
          <Header period={period} shift={shift} filter={filter} date={date} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  production: state.production
})

export default connect(mapStateToProps, {})(Connect)
