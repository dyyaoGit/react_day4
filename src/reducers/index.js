import goodsReducer from './goodsReducer'
import usersReducer from './usersReducer'
import {combineReducers} from 'redux'

export default  combineReducers({
    goodsReducer,
    usersReducer
})