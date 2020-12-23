import query from './queries'
import { newReport, updateReport, deleteReport } from './mutations'
import { fetchItems } from 'services'
import { validateReportInput } from 'helpers'

export const REQUEST_REPORTS = 'REQUEST_REPORTS'
export const REQUEST_FAILURE_REPORTS = 'REQUEST_FAILURE_REPORTS'
export const FETCH_SUCCESS_REPORTS = 'FETCH_SUCCESS_REPORTS'
export const ADD_SUCCESS_REPORTS = 'ADD_SUCCESS_REPORTS'
export const UPDATE_SUCCESS_REPORTS = 'UPDATE_SUCCESS_REPORTS'
export const REMOVE_SUCCESS_REPORTS = 'REMOVE_SUCCESS_REPORTS'

export const CLEAN_MESSAGE_REPORTS = 'CLEAN_MESSAGE_REPORTS'
export const PAGE_TOTAL_REPORTS = 'PAGE_REPORTS'
export const ADD_TOTAL_REPORTS = 'ADD_TOTAL_REPORTS'

const request = () => {
  return {
    type: REQUEST_REPORTS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_REPORTS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_REPORTS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_REPORTS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_REPORTS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_REPORTS,
    payload: id
  }
}

export const fetchReports = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_REPORTS, payload: page })
    }

    dispatch(fetchSuccess(data.reports))
  }
}

export const addReport = (input) => async (dispatch) => {
  const { valid, message } = validateReportInput(input)

  if (valid) {
    dispatch(request())
    newReport.variables = { input }
    const { status, data } = await fetchItems(newReport)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newReport } = data
      dispatch(addSuccess(newReport))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyReport = (input) => async (dispatch) => {
  dispatch(request())
  const report = {
    date: input.date,
    shift: input.shift,
    machine: input.machine,
    real: input.real,
    ng: input.ng,
    ok: input.ok,
    plan: input.plan,
    tprod: input.tprod,
    cycles: input.cycles,
    ptime: input.ptime,
    wtime: input.wtime,
    dtime: input.dtime,
    avail: input.avail,
    perf: input.perf,
    qual: input.qual,
    oee: input.oee,
    purge: input.purge,
    comments: input.comments,
    team: input.team,
    oper: input.oper,
    insp: input.insp,
    production: input.production,
    downtimes: input.downtimes,
    ngs: input.ngs,
    resines: input.resines,
    user: input.user
  }
  const { valid, message } = validateReportInput(input)
  if (valid) {
    updateReport.variables = { _id: input._id, input: report }

    const { status, data } = await fetchItems(updateReport)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      dispatch(updateSuccess(data.updateReport))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const eraseReport = (input) => async (dispatch) => {
  dispatch(request())
  deleteReport.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteReport)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteReport))
  }
}
