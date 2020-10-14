import query from './queries'
import { newUser, updateUser, removeUser } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_USERS = 'REQUEST_USERS'
export const REQUEST_FAILURE_USERS = 'REQUEST_FAILURE_USERS'
export const FETCH_SUCCESS_USERS = 'FETCH_SUCCESS_USERS'
export const ADD_SUCCESS_USERS = 'ADD_SUCCESS_USERS'
export const UPDATE_SUCCESS_USERS = 'UPDATE_SUCCESS_USERS'
export const REMOVE_SUCCESS_USERS = 'REMOVE_SUCCESS_USERS'

const request = () => {
  return {
    type: REQUEST_USERS
  }
}

const requestFailure = (error) => {
  return {
    type: REQUEST_FAILURE_USERS,
    payload: error
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_USERS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_USERS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_USERS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_USERS,
    payload: id
  }
}

export const fetchUsers = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems('users', query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data))
  }
}

export const addUser = (input) => async (dispatch) => {
  dispatch(request())
  newUser.variables = { input }
  const { status, data } = await fetchItems('newUser', newUser)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(addSuccess(data))
  }
}

export const modifyUser = (_id, input) => async (dispatch) => {
  dispatch(request())
  updateUser.variables = { _id, input }
  const { status, data } = await fetchItems('updateUser', updateUser)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(updateSuccess(data))
  }
}

export const eraseUser = (_id) => async (dispatch) => {
  dispatch(request())
  removeUser.variables = { _id }
  const { status, data } = await fetchItems('removeUser', removeUser)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data))
  }
}
