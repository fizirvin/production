export const SET_ID = 'SET_USER'

const initialState = {
  id: '5edde9dfd3888a26048cdd20',
  name: 'Adrian'
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
    default:
      return state
  }
}

export default user
