import { createStore } from 'redux'
import temporatureReducer from './reducers/temporature'

const store = createStore(temporatureReducer)

export default store