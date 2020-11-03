import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { SET_ID } from './userReducer'

const store = createStore(reducers, applyMiddleware(thunk))
export default store
export { SET_ID }
