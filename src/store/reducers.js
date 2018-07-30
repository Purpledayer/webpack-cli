import { combineReducers } from 'redux'
import ROOT from './ROOT/reducer'
import Login from '../routers/Login/store/reducer'

const reducers = combineReducers({
    ROOT,
    Login
})

export default reducers
