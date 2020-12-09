import { cyclesQuery } from '../store/queries'
import { finishShot } from '../store/mutations'
import { fetchItems } from 'services'
import { FINISH_SUCCESS_SHOT } from '../store/actions'

export const SHOT_INPUT_CYCLES = 'SHOT_INPUT_CYCLES'
export const END_INPUT_CYCLES = 'END_INPUT_CYCLES'
export const SHIFTEND_INPUT_CYCLES = 'SHIFTEND_INPUT_CYCLES'
export const QUANTITY_INPUT_CYCLES = 'QUANTITY_INPUT_CYCLES'

export const CLEAN_INPUT_CYCLES = 'CLEAN_INPUT_CYCLES'

export const REQUEST_CYCLES = 'REQUEST_CYCLES'
export const REQUEST_FAILURE_CYLES = 'REQUEST_FAILURE_CYLES'
export const FETCH_SUCCESS_CYCLES = 'FETCH_SUCCESS_CYCLES'

const initialState = {
  shot: '',
  molde: '',
  active: '',
  end: '',
  shiftEnd: '',
  quantity: 0,
  message: '',
  loading: false,
  items: []
}

const cycles = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_CYCLES:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_CYLES:
      return {
        ...state,
        message: payload,
        loading: false
      }
    case FETCH_SUCCESS_CYCLES:
      return {
        ...state,
        message: '',
        loading: false,
        items: payload
      }
    case SHOT_INPUT_CYCLES:
      return {
        ...state,
        shot: payload.shot,
        molde: payload.molde,
        active: payload.active
      }
    case END_INPUT_CYCLES:
      return {
        ...state,
        end: payload
      }
    case SHIFTEND_INPUT_CYCLES:
      return {
        ...state,
        shiftEnd: payload
      }
    case QUANTITY_INPUT_CYCLES:
      return {
        ...state,
        quantity: payload
      }
    case CLEAN_INPUT_CYCLES:
      return initialState
    default:
      return state
  }
}

const request = () => {
  return {
    type: REQUEST_CYCLES
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_CYLES,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_CYCLES,
    payload: items
  }
}

const finishSuccess = (items) => {
  return {
    type: FINISH_SUCCESS_SHOT,
    payload: items
  }
}

export const fetchCycles = (shot) => async (dispatch) => {
  dispatch(request())
  cyclesQuery.variables = { shot: shot }
  const { status, data } = await fetchItems(cyclesQuery)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    dispatch(fetchSuccess(data.cycles))
  }
}

export const finishingShot = (input) => async (dispatch) => {
  dispatch(request())
  const shot = {
    end: input.end,
    shiftEnd: input.shift,
    quantity: input.quantity
  }
  finishShot.variables = { _id: input.shot, input: shot }
  const { status, data } = await fetchItems(finishShot)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    console.log(data, 'data')
    dispatch(finishSuccess(data.finishShot))
  }
}

export default cycles
