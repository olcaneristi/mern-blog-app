import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from '../reducers/post';

const rootReducer = combineReducers({
  posts: postReducer,
});

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), composeWithDevTools()));

export default store;
