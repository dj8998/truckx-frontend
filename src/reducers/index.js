import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import dataReducer from './data.reducer';
import userReducer from './user.reducer';

const rootReducer =  combineReducers({
    auth: authReducer,
    user: userReducer,
    data: dataReducer
})

export default rootReducer;