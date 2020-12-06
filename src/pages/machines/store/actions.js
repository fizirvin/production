import query from './queries'
import { newMachine, updateMachine, removeMachine } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_MACHINES = 'REQUEST_MACHINES'
export const REQUEST_FAILURE_MACHINES = 'REQUEST_FAILURE_MACHINES'
export const FETCH_SUCCESS_MACHINES = 'FETCH_SUCCESS_MACHINES'
export const ADD_SUCCESS_MACHINES = 'ADD_SUCCESS_MACHINES'
export const UPDATE_SUCCESS_MACHINES = 'UPDATE_SUCCESS_MACHINES'
export const REMOVE_SUCCESS_MACHINES = 'REMOVE_SUCCESS_MACHNES'

export const CLEAN_MESSAGE_MACHINES = 'CLEAN_MESSAGE_MACHINES'
export const PAGE_TOTAL_MACHINES = 'PAGE_MACHINES'
export const ADD_TOTAL_MACHINES = 'ADD_TOTAL_MACHINES'

const request = () => {
  return {
    type: REQUEST_MACHINES
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_MACHINES,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_MACHINES,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_MACHINES,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_MACHINES,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_MACHINES,
    payload: id
  }
}

export const fetchMachines = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_MACHINES, payload: page })
    }
    dispatch(fetchSuccess(data.machines))
  }
}

export const addMachine = (input) => async (dispatch) => {
  dispatch(request())
  newMachine.variables = { input }
  const { status, data } = await fetchItems(newMachine)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newMachine } = data
    dispatch(addSuccess(newMachine))
  }
}

export const modifyMachine = (input) => async (dispatch) => {
  dispatch(request())

  const machine = {
    number: input.number,
    serial: input.serial,
    closingForce: input.closingForce,
    spindleDiameter: input.spindleDiameter
  }

  updateMachine.variables = { _id: input._id, input: machine }
  const { status, data } = await fetchItems(updateMachine)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateMachine } = data
    dispatch(updateSuccess(updateMachine))
  }
}

export const eraseMachine = (_id) => async (dispatch) => {
  dispatch(request())
  removeMachine.variables = { _id }
  const { status, data } = await fetchItems('removeMachine', removeMachine)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
