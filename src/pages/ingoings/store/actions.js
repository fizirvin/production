import query from './queries'
import { newIngoing, updateIngoing, deleteIngoing } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_INGOINGS = 'REQUEST_INGOINGS'
export const REQUEST_FAILURE_INGOINGS = 'REQUEST_FAILURE_INGOINGS'
export const FETCH_SUCCESS_INGOINGS = 'FETCH_SUCCESS_INGOINGS'
export const ADD_SUCCESS_INGOINGS = 'ADD_SUCCESS_INGOINGS'
export const UPDATE_SUCCESS_INGOINGS = 'UPDATE_SUCCESS_INGOINGS'
export const REMOVE_SUCCESS_INGOINGS = 'REMOVE_SUCCESS_INGOINGS'

export const CLEAN_MESSAGE_INGOINGS = 'CLEAN_MESSAGE_INGOINGS'
export const PAGE_TOTAL_INGOINGS = 'PAGE_INGOINGS'
export const ADD_TOTAL_INGOINGS = 'ADD_TOTAL_INGOINGS'

export const SORT_INGOINGS = 'SORT_INGOINGS'

const request = () => {
  return {
    type: REQUEST_INGOINGS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_INGOINGS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_INGOINGS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_INGOINGS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_INGOINGS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_INGOINGS,
    payload: id
  }
}

export const fetchIngoings = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_INGOINGS, payload: page })
    }
    dispatch(fetchSuccess(data.ingoings))
  }
}

export const addIngoing = (input) => async (dispatch) => {
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newIngoing.variables = { input }
    const { status, data } = await fetchItems(newIngoing)
    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newIngoing } = data
      dispatch(addSuccess(newIngoing))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyIngoing = (input) => async (dispatch) => {
  dispatch(request())

  const ingoing = {
    date: input.date,
    spare: input.spare,
    quantity: input.quantity,
    origin: input.origin,
    provider: input.provider,
    price: input.price
  }

  updateIngoing.variables = { _id: input._id, input: ingoing }
  const { status, data } = await fetchItems(updateIngoing)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateIngoing } = data
    dispatch(updateSuccess(updateIngoing))
  }
}

export const eraseIngoing = (input) => async (dispatch) => {
  dispatch(request())
  deleteIngoing.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteIngoing)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteIngoing))
  }
}
