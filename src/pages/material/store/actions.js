import query from './queries'
import { newMaterial, updateMaterial, removeMaterial } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_MATERIALS = 'REQUEST_MATERIALS'
export const REQUEST_FAILURE_MATERIALS = 'REQUEST_FAILURE_MATERIALS'
export const FETCH_SUCCESS_MATERIALS = 'FETCH_SUCCESS_MATERIALS'
export const ADD_SUCCESS_MATERIALS = 'ADD_SUCCESS_MATERIALS'
export const UPDATE_SUCCESS_MATERIALS = 'UPDATE_SUCCESS_MATERIALS'
export const REMOVE_SUCCESS_MATERIALS = 'REMOVE_SUCCESS_MATERIALS'

const request = () => {
  return {
    type: REQUEST_MATERIALS
  }
}

const requestFailure = (error) => {
  return {
    type: REQUEST_FAILURE_MATERIALS,
    payload: error
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_MATERIALS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_MATERIALS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_MATERIALS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_MATERIALS,
    payload: id
  }
}

export const fetchMaterials = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems('materials', query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data))
  }
}

export const addMaterial = (input) => async (dispatch) => {
  dispatch(request())
  newMaterial.variables = { input }
  const { status, data } = await fetchItems('newMaterial', newMaterial)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(addSuccess(data))
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
