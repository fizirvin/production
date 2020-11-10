import query from './queries'
import { newModel, updatePartNumber, removeModel } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_MODELS = 'REQUEST_MODELS'
export const REQUEST_FAILURE_MODELS = 'REQUEST_FAILURE_MODELS'
export const FETCH_SUCCESS_MODELS = 'FETCH_SUCCESS_MODELS'
export const ADD_SUCCESS_MODELS = 'ADD_SUCCESS_MODELS'
export const UPDATE_SUCCESS_MODELS = 'UPDATE_SUCCESS_MODELS'
export const REMOVE_SUCCESS_MODELS = 'REMOVE_SUCCESS_MODELS'

export const CLEAN_MESSAGE_MODELS = 'CLEAN_MESSAGE_MODELS'
export const PAGE_TOTAL_MODELS = 'PAGE_MODELS'
export const ADD_TOTAL_MODELS = 'ADD_TOTAL_MODELS'

const request = () => {
  return {
    type: REQUEST_MODELS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_MODELS,
    payload: message
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

export const fetchModels = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_MODELS, payload: page })
    }
    dispatch(fetchSuccess(data.models))
  }
}

export const addModel = (input) => async (dispatch) => {
  dispatch(request())
  newModel.variables = { input }
  const { status, data } = await fetchItems(newModel)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newModel } = data
    dispatch(addSuccess(newModel))
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
