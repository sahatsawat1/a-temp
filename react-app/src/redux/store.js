import { createStore } from 'redux'
import temporatureReducer from './reducers/Temporature'

const store = createStore(temporatureReducer)

export default store