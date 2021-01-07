import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
    loginReducer, postsReducer
})

export default reducers;