import query from './queries'
import { newProfile, updateProfile, deleteProfile } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_PROFILES = 'REQUEST_PROFILES'
export const REQUEST_FAILURE_PROFILES = 'REQUEST_FAILURE_PROFILES'
export const FETCH_SUCCESS_PROFILES = 'FETCH_SUCCESS_PROFILES'
export const ADD_SUCCESS_PROFILES = 'ADD_SUCCESS_PROFILES'
export const UPDATE_SUCCESS_PROFILES = 'UPDATE_SUCCESS_PROFILES'
export const REMOVE_SUCCESS_PROFILES = 'REMOVE_SUCCESS_PROFILES'
export const CLEAN_MESSAGE_PROFILES = 'CLEAN_MESSAGE_PROFILES'
export const PAGE_TOTAL_PROFILES = 'PAGE_PROFILES'
export const ADD_TOTAL_PROFILES = 'ADD_TOTAL_PROFILES'

const request = () => {
  return {
    type: REQUEST_PROFILES
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_PROFILES,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_PROFILES,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_PROFILES,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_PROFILES,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_PROFILES,
    payload: id
  }
}

export const fetchProfiles = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_PROFILES, payload: page })
    }
    dispatch(fetchSuccess(data.profiles))
  }
}

export const addProfile = (input) => async (dispatch) => {
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newProfile.variables = { input }
    const { status, data } = await fetchItems(newProfile)

    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newProfile } = data
      dispatch(addSuccess(newProfile))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyProfile = (input) => async (dispatch) => {
  dispatch(request())

  const profile = {
    firstname: input.firstname,
    lastname: input.lastname,
    gender: input.gender,
    entry: input.entry,
    department: input.department,
    area: input.area,
    team: input.team,
    position: input.position,
    active: input.active
  }
  updateProfile.variables = { _id: input._id, input: profile }
  const { status, data } = await fetchItems(updateProfile)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateProfile } = data
    dispatch(updateSuccess(updateProfile))
  }
}

export const eraseProfile = (input) => async (dispatch) => {
  dispatch(request())
  deleteProfile.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteProfile)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteProfile))
  }
}
