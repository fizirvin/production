import { query } from './queries'
import { newMolde, updateMolde, removeMolde } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_MOLDES = 'REQUEST_MOLDES'
export const REQUEST_FAILURE_MOLDES = 'REQUEST_FAILURE_MOLDES'
export const FETCH_SUCCESS_MOLDES = 'FETCH_SUCCESS_MOLDES'
export const ADD_SUCCESS_MOLDES = 'ADD_SUCCESS_MOLDES'
export const UPDATE_SUCCESS_MOLDES = 'UPDATE_SUCCESS_MOLDES'
export const REMOVE_SUCCESS_MOLDES = 'REMOVE_SUCCESS_MOLDES'

export const CLEAN_MESSAGE_MOLDES = 'CLEAN_MESSAGE_MOLDES'

const request = () => {
  return {
    type: REQUEST_MOLDES
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_MOLDES,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_MOLDES,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_MOLDES,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_MOLDES,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_MOLDES,
    payload: id
  }
}

export const fetchMoldes = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.moldes.items))
  }
}

export const addMolde = (input) => async (dispatch) => {
  dispatch(request())
  newMolde.variables = { input }
  const { status, data } = await fetchItems(newMolde)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newMolde } = data
    dispatch(addSuccess(newMolde))
  }
}

export const modifyMolde = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateMolde.variables = { _id, input }
  const { status, data } = await fetchItems('updateMolde', updateMolde)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseMolde = (_id) => async (dispatch) => {
  dispatch(request())
  removeMolde.variables = { _id }
  const { status, data } = await fetchItems('removeMolde', removeMolde)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
