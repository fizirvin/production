import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from './store/actions'
import { Controls, Label } from './styles'

export default function Header({ period, shifts, filter, date }) {
  const dispatch = useDispatch()

  const onPeriod = (e) => {
    dispatch({ type: actions.PERIOD_PRODUCTION, payload: e.target.value })
  }

  const onShift = (e) => {
    dispatch({ type: actions.SHIFT_PRODUCTION, payload: e.target.value })
  }

  const onFilter = (e) => {
    dispatch({ type: actions.FILTER_PRODUCTION, payload: e.target.value })
  }

  const onDate = (e) => {
    dispatch({ type: actions.DATE_PRODUCTION, payload: e.target.value })
  }

  const onBack = () => {
    const value = 'hola'
    dispatch({ type: actions.BACK_PRODUCTION, payload: value })
  }

  const onForward = () => {
    const value = 'hola'
    dispatch({ type: actions.FORWARD_PRODUCTION, payload: value })
  }

  return (
    <Controls>
      <Label>
        <label>Period:</label>
        <select name="period" value={period} onChange={(e) => onPeriod(e)}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          {/* <option value="trimester">Trimester</option>
          <option value="semester">Semester</option> */}
        </select>
      </Label>
      <Label>
        <label>Shift:</label>
        <select name="shift" value={shifts} onChange={(e) => onShift(e)}>
          <option value="both">Shifts 1{`&`}2</option>
          <option value="1">Shift 1</option>
          <option value="2">Shift 2</option>
        </select>
      </Label>
      <Label>
        <label>Filter By:</label>
        <select name="filter" value={filter} onChange={(e) => onFilter(e)}>
          <option value="machine">Machine</option>
          <option value="model">Model</option>
          <option value="molde">Molde</option>
        </select>
        {/* <button
            name="detail"
            value="filter"
            onClick={onDetail}
            className={detail ? 'detailRed' : 'detailBlue'}
          >
            Detail ▼
          </button> */}
      </Label>
      <Label>
        <label>Go to Date:</label>
        <input type="date" value={date} onChange={(e) => onDate(e)}></input>
        <button name="back" onClick={onBack}>
          Go Back
        </button>
        <button name="forward" onClick={onForward}>
          Go Forward
        </button>
      </Label>
    </Controls>
  )
}
