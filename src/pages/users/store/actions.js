import query from './queries'
import { newUser, updateUser, removeUser } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_USERS = 'REQUEST_USERS'
export const REQUEST_FAILURE_USERS = 'REQUEST_FAILURE_USERS'
export const FETCH_SUCCESS_USERS = 'FETCH_SUCCESS_USERS'
export const ADD_SUCCESS_USERS = 'ADD_SUCCESS_USERS'
export const UPDATE_SUCCESS_USERS = 'UPDATE_SUCCESS_USERS'
export const REMOVE_SUCCESS_USERS = 'REMOVE_SUCCESS_USERS'
export const CLEAN_MESSAGE_USERS = 'CLEAN_MESSAGE_USERS'
export const PAGE_TOTAL_USERS = 'PAGE_USERS'
export const ADD_TOTAL_USERS = 'ADD_TOTAL_USERS'

const request = () => {
  return {
    type: REQUEST_USERS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_USERS,
    payload: message
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

export const fetchUsers = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_USERS, payload: page })
    }
    dispatch(fetchSuccess(data.users))
  }
}

export const addUser = (input) => async (dispatch) => {
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newUser.variables = { input }
    const { status, data } = await fetchItems(newUser)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newUser } = data
      dispatch(addSuccess(newUser))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyUser = (input) => async (dispatch) => {
  dispatch(request())

  const user = {
    level: input.level,
    active: input.active
  }
  updateUser.variables = { _id: input._id, input: user }
  const { status, data } = await fetchItems(updateUser)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateUser } = data
    dispatch(updateSuccess(updateUser))
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
