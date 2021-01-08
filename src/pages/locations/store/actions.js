import query from './queries'
import { newLocation, updateLocation, deleteLocation } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const REQUEST_FAILURE_LOCATIONS = 'REQUEST_FAILURE_LOCATIONS'
export const FETCH_SUCCESS_LOCATIONS = 'FETCH_SUCCESS_LOCATIONS'
export const ADD_SUCCESS_LOCATIONS = 'ADD_SUCCESS_LOCATIONS'
export const UPDATE_SUCCESS_LOCATIONS = 'UPDATE_SUCCESS_LOCATIONS'
export const REMOVE_SUCCESS_LOCATIONS = 'REMOVE_SUCCESS_LOCATIONS'

export const CLEAN_MESSAGE_LOCATIONS = 'CLEAN_MESSAGE_LOCATIONS'
export const PAGE_TOTAL_LOCATIONS = 'PAGE_LOCATIONS'
export const ADD_TOTAL_LOCATIONS = 'ADD_TOTAL_LOCATIONS'

export const SORT_LOCATIONS = 'SORT_LOCATIONS'

const request = () => {
  return {
    type: REQUEST_LOCATIONS
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_LOCATIONS,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_LOCATIONS,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_LOCATIONS,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_LOCATIONS,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_LOCATIONS,
    payload: id
  }
}

export const fetchLocations = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_LOCATIONS, payload: page })
    }
    dispatch(fetchSuccess(data.locations))
  }
}

export const addLocation = (input) => async (dispatch) => {
  const { valid, message } = validateInput(input)
  if (valid) {
    dispatch(request())
    newLocation.variables = { input }
    const { status, data } = await fetchItems(newLocation)
    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newLocation } = data
      dispatch(addSuccess(newLocation))
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifyLocation = (input) => async (dispatch) => {
  dispatch(request())

  const location = {
    code: input.code,
    name: input.name,
    area: input.area
  }

  updateLocation.variables = { _id: input._id, input: location }
  const { status, data } = await fetchItems(updateLocation)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    const { updateLocation } = data
    dispatch(updateSuccess(updateLocation))
  }
}

export const eraseLocation = (input) => async (dispatch) => {
  dispatch(request())
  deleteLocation.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteLocation)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(removeSuccess(data.deleteLocation))
  }
}
