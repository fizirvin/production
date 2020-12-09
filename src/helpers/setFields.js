import weekDate from './weekDate'

export default function setFields(period, today) {
  if (period === 'day') {
    const monday = weekDate(1, today)
    const tuesday = weekDate(2, today)
    const wednesday = weekDate(3, today)
    const thursday = weekDate(4, today)
    const friday = weekDate(5, today)
    const saturday = weekDate(6, today)
    const sunday = weekDate(7, today)

    const week = {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    }
    return week
  }
}
