import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCalendar } from './store/actions'
import Spinner from 'components/spinner'
import CalendarTable from './calendarTable'

const Connect = ({ calendar, fetchCalendar }) => {
  const { loading, message, items, calendarList } = calendar

  useEffect(() => {
    fetchCalendar()
  }, [fetchCalendar])

  const getMonth = () => {
    const calendar = [
      { month: 'January', days: 30, m: '01' },
      { month: 'February', days: 28, m: '02' },
      { month: 'March', days: 31, m: '03' },
      { month: 'April', days: 30, m: '04' },
      { month: 'May', days: 31, m: '05' },
      { month: 'June', days: 30, m: '06' },
      { month: 'July', days: 31, m: '07' },
      { month: 'August', days: 31, m: '08' },
      { month: 'September', days: 30, m: '09' },
      { month: 'October', days: 31, m: '10' },
      { month: 'November', days: 30, m: '11' },
      { month: 'December', days: 31, m: '12' }
    ]
    const date = new Date()
    const month = date.getMonth()
    return calendar[month]
  }

  const renderDays = () => {
    let i
    let array = []
    for (i = 1; i <= getMonth().days; i++) {
      array = [...array, i]
    }
    return array
  }

  const renderPrev = () => {
    const date = new Date()
    const year = date.getFullYear().toString()
    const month = `${year}-${getMonth().m}-01`

    const prevMonth = calendarList.filter((d) => d < month)

    let i
    let array = []

    for (i = 0; i <= prevMonth.length - 1; i++) {
      const splitedMonth = prevMonth[i].split('-')

      array = [...array, splitedMonth[2]]
    }

    return array
  }

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && !loading && (
        <CalendarTable
          items={items}
          headers={renderDays()}
          month={getMonth()}
          prevMonth={renderPrev()}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  calendar: state.calendar
})

export default connect(mapStateToProps, { fetchCalendar })(Connect)
