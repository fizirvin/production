import query from './queries'
import { newMachine, updateMachine, removeMachine } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_MACHINES = 'REQUEST_MACHINES'
export const REQUEST_FAILURE_MACHINES = 'REQUEST_FAILURE_MACHINES'
export const FETCH_SUCCESS_MACHINES = 'FETCH_SUCCESS_MACHINES'
export const ADD_SUCCESS_MACHINES = 'ADD_SUCCESS_MACHINES'
export const UPDATE_SUCCESS_MACHINES = 'UPDATE_SUCCESS_MACHINES'
export const REMOVE_SUCCESS_MACHINES = 'REMOVE_SUCCESS_MACHNES'

const request = () => {
  return {
    type: REQUEST_MACHINES
  }
}

const requestFailure = (error) => {
  return {
    type: REQUEST_FAILURE_MACHINES,
    payload: error
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

export const fetchMachines = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems('machines', query)

  if (!status) {
    dispatch(requestFailure(data))
    return 'se ejecutó la acción pero falló'
  } else {
    dispatch(fetchSuccess(data))
    return 'se ejecutó la acción con éxito'
  }
}

export const addMachine = (input) => async (dispatch) => {
  dispatch(request())
  newMachine.variables = { input }
  const { status, data } = await fetchItems('newMachine', newMachine)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(addSuccess(data))
  }
}

export const modifyMachine = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateMachine.variables = { _id, input }
  const { status, data } = await fetchItems('updateMachine', updateMachine)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
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
