import query from './queries'
import { newShot, updateMaterial, removeMaterial } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_SHOTS = 'REQUEST_SHOTS'
export const REQUEST_FAILURE_SHOTS = 'REQUEST_FAILURE_SHOTS'
export const FETCH_SUCCESS_SHOTS = 'FETCH_SUCCESS_SHOTS'
export const ADD_SUCCESS_SHOTS = 'ADD_SUCCESS_SHOTS'
export const UPDATE_SUCCESS_SHOTS = 'UPDATE_SUCCESS_SHOTS'
export const REMOVE_SUCCESS_SHOTS = 'REMOVE_SUCCESS_SHOTS'

export const CLEAN_MESSAGE_SHOTS = 'CLEAN_MESSAGE_SHOTS'

const request = () => {
  return {
    type: REQUEST_SHOTS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_SHOTS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_SHOTS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_SHOTS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_SHOTS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_SHOTS,
    payload: id
  }
}

export const fetchShots = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.shots.items))
  }
}

export const addShot = (input) => async (dispatch) => {
  dispatch(request())
  newShot.variables = { input }
  const { status, data } = await fetchItems(newShot)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newShot } = data
    dispatch(addSuccess(newShot))
  }
}

export const modifyMaterial = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateMaterial.variables = { _id, input }
  const { status, data } = await fetchItems('updateMaterial', updateMaterial)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseMaterial = (_id) => async (dispatch) => {
  dispatch(request())
  removeMaterial.variables = { _id }
  const { status, data } = await fetchItems('removeMaterial', removeMaterial)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
