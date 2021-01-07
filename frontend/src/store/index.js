import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducer/index';


const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, middlewares);

export default store;