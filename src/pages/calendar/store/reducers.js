import * as actions from './actions'

const initialState = {
  message: '',
  loading: false,
  items: [],
  calendarList: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actions.REQUEST_CALENDAR:
      return {
        ...state,
        loading: true
      }
    case actions.REQUEST_FAILURE_CALENDAR:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case actions.FETCH_SUCCESS_CALENDAR:
      const arrayArrays = payload.map((item) => {
        let dates = []
        item.items.map((date) => (dates = [...dates, date.date]))
        return dates
      })

      const calendar = arrayArrays.flat()

      const uniqueCalendarList = Array.from(
        new Set(
          calendar.map((date) => {
            const list = calendar.find((item) => item === date)
            return list
          })
        )
      )

      return {
        ...state,
        message: '',
        loading: false,
        items: payload,
        calendarList: uniqueCalendarList
      }

    case actions.CLEAN_MESSAGE_CALENDAR:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default reducer
