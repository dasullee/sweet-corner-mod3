import {combineReducers} from 'redux'
import  {reducer as formReducer} from 'redux-form'
import scheduleReducer from './schedule-reducer'
import productReducer from './products_reducer'

const rootReducer = combineReducers({
    form: formReducer,
    schedule: scheduleReducer,
    products: productReducer
})

export default rootReducer