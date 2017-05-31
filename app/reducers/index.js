import { combineReducers } from 'redux'
import loads from './loads'
import messages from './messages'

const loadApp = combineReducers({
  loads,
  messages
})

export default loadApp