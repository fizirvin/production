import query from './queries'
import { newPartNumber, updatePartNumber, removeModel } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_MODELS = 'REQUEST_MODELS'
export const REQUEST_FAILURE_MODELS = 'REQUEST_FAILURE_MODELS'
export const FETCH_SUCCESS_MODELS = 'FETCH_SUCCESS_MODELS'
export const ADD_SUCCESS_MODELS = 'ADD_SUCCESS_MODELS'
export const UPDATE_SUCCESS_MODELS = 'UPDATE_SUCCESS_MODELS'
export const REMOVE_SUCCESS_MODELS = 'REMOVE_SUCCESS_MODELS'

const request = () => {
  return {
    type: REQUEST_MODELS
  }
}

const requestFailure = (error) => {
  return {
    type: REQUEST_FAILURE_MODELS,
    payload: error
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_MODELS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_MODELS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_MODELS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_MODELS,
    payload: id
  }
}

export const fetchModels = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems('parts', query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data))
  }
}

export const addMolde = (input) => async (dispatch) => {
  dispatch(request())
  newPartNumber.variables = { input }
  const { status, data } = await fetchItems('newPartNumber', newPartNumber)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(addSuccess(data))
  }
}

export const modifyModel = (_id, input) => async (dispatch) => {
  dispatch(request())
  updatePartNumber.variables = { _id, input }
  const { status, data } = await fetchItems(
    'updatePartNumber',
    updatePartNumber
  )

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseModel = (_id) => async (dispatch) => {
  dispatch(request())
  removeModel.variables = { _id }
  const { status, data } = await fetchItems('removeModel', removeModel)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
