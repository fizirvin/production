import query from './queries'
import { newOutgoing, updateOutgoing, deleteOutgoing } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_OUTGOINGS = 'REQUEST_OUTGOINGS'
export const REQUEST_FAILURE_OUTGOINGS = 'REQUEST_FAILURE_OUTGOINGS'
export const FETCH_SUCCESS_OUTGOINGS = 'FETCH_SUCCESS_OUTGOINGS'
export const ADD_SUCCESS_OUTGOINGS = 'ADD_SUCCESS_OUTGOINGS'
export const UPDATE_SUCCESS_OUTGOINGS = 'UPDATE_SUCCESS_OUTGOINGS'
export const REMOVE_SUCCESS_OUTGOINGS = 'REMOVE_SUCCESS_OUTGOINGS'

export const CLEAN_MESSAGE_OUTGOINGS = 'CLEAN_MESSAGE_OUTGOINGS'
export const PAGE_TOTAL_OUTGOINGS = 'PAGE_OUTGOINGS'
export const ADD_TOTAL_OUTGOINGS = 'ADD_TOTAL_OUTGOINGS'

export const SORT_OUTGOINGS = 'SORT_OUTGOINGS'

const request = () => {
  return {
    type: REQUEST_OUTGOINGS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_OUTGOINGS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_OUTGOINGS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_OUTGOINGS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_OUTGOINGS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_OUTGOINGS,
    payload: id
  }
}

export const fetchOutgoings = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_OUTGOINGS, payload: page })
    }
    dispatch(fetchSuccess(data.outgoings))
  }
}

export const addOutgoing = (input) => async (dispatch) => {
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newOutgoing.variables = { input }
    const { status, data } = await fetchItems(newOutgoing)
    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newOutgoing } = data
      dispatch(addSuccess(newOutgoing))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyOutgoing = (input) => async (dispatch) => {
  dispatch(request())

  const outgoing = {
    date: input.date,
    spare: input.spare,
    quantity: input.quantity,
    origin: input.origin,
    provider: input.provider,
    price: input.price
  }

  updateOutgoing.variables = { _id: input._id, input: outgoing }
  const { status, data } = await fetchItems(updateOutgoing)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateOutgoing } = data
    dispatch(updateSuccess(updateOutgoing))
  }
}

export const eraseOutgoing = (input) => async (dispatch) => {
  dispatch(request())
  deleteOutgoing.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteOutgoing)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteOutgoing))
  }
}
