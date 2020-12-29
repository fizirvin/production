import query from './queries'
import { newShot, updateShot, deleteShot } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_SHOTS = 'REQUEST_SHOTS'
export const REQUEST_FAILURE_SHOTS = 'REQUEST_FAILURE_SHOTS'
export const FETCH_SUCCESS_SHOTS = 'FETCH_SUCCESS_SHOTS'
export const ADD_SUCCESS_SHOTS = 'ADD_SUCCESS_SHOTS'
export const UPDATE_SUCCESS_SHOTS = 'UPDATE_SUCCESS_SHOTS'
export const REMOVE_SUCCESS_SHOTS = 'REMOVE_SUCCESS_SHOTS'

export const FINISH_SUCCESS_SHOT = 'FINISH_SUCCESS_SHOT'

export const CLEAN_MESSAGE_SHOTS = 'CLEAN_MESSAGE_SHOTS'
export const PAGE_TOTAL_SHOTS = 'PAGE_SHOTS'
export const ADD_TOTAL_SHOTS = 'ADD_TOTAL_SHOTS'

export const SORT_SHOTS = 'SORT_SHOTS'

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

export const fetchShots = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_SHOTS, payload: page })
    }
    dispatch(fetchSuccess(data.shots))
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

export const modifyShot = (input) => async (dispatch) => {
  dispatch(request())

  const shot = {
    molde: input.molde,
    date: input.date,
    shift: input.shift,
    comments: input.comments
  }

  updateShot.variables = { _id: input._id, input: shot }
  const { status, data } = await fetchItems(updateShot)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateShot } = data
    dispatch(updateSuccess(updateShot))
  }
}

export const eraseShot = (input) => async (dispatch) => {
  dispatch(request())
  deleteShot.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteShot)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteShot))
  }
}
