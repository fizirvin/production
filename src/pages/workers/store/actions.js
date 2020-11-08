import query from './queries'
import { newProfile, updateMaterial, removeMaterial } from './mutations'
import { fetchItems } from 'services'

export const REQUEST_PROFILES = 'REQUEST_PROFILES'
export const REQUEST_FAILURE_PROFILES = 'REQUEST_FAILURE_PROFILES'
export const FETCH_SUCCESS_PROFILES = 'FETCH_SUCCESS_PROFILES'
export const ADD_SUCCESS_PROFILES = 'ADD_SUCCESS_PROFILES'
export const UPDATE_SUCCESS_PROFILES = 'UPDATE_SUCCESS_PROFILES'
export const REMOVE_SUCCESS_PROFILES = 'REMOVE_SUCCESS_PROFILES'
export const CLEAN_MESSAGE_PROFILES = 'CLEAN_MESSAGE_PROFILES'

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

export const fetchProfiles = () => async (dispatch) => {
  dispatch(request())
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.profiles.items))
  }
}

export const addProfile = (input) => async (dispatch) => {
  dispatch(request())
  newProfile.variables = { input }
  const { status, data } = await fetchItems(newProfile)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { newProfile } = data
    dispatch(addSuccess(newProfile))
  }
}

export const modifyProfile = (_id, input) => async (dispatch) => {
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
