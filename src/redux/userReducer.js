export const SET_ID = 'SET_USER'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_FAILURE_LOGIN = 'RESQUEST_FAILURE_LOGIN'
export const REQUEST_SUCCESS_LOGIN = 'REQUEST_SUCCESS_LOGIN'

export const CLEAN_MESSAGE_LOGIN = 'CLEAN_MESSAGE_LOGIN'

const initialState = {
  id: '',
  name: '',
  token: '',
  message: '',
  loading: false
}

// const dispatch = useDispatch()
//   dispatch({ type: SET_ID, payload: '5edde9dfd3888a26048cdd20' })

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        id: action.payload
      }
    case REQUEST_SUCCESS_LOGIN:
      return {
        ...state,
        id: action.payload.userId,
        name: action.payload.name,
        token: action.payload.token,
        loading: false,
        message: ''
      }
    case REQUEST_LOGIN:
      return {
        ...state,
        loading: true
      }
    case REQUEST_FAILURE_LOGIN:
      return {
        ...state,
        message: action.payload,
        loading: false
      }
    case CLEAN_MESSAGE_LOGIN:
      return {
        ...state,
        message: ''
      }
    default:
      return state
  }
}

export default user
