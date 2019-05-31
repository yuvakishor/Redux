import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import postReducer from './components/reducers/postReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    postReducer,composeEnhancers(applyMiddleware(thunk))
    
);
export default store;