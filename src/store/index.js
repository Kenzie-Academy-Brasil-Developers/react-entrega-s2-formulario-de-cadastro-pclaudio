import { combineReducers, createStore } from 'redux';
import signUpReducer from './modules/SignUp/reducer';

const reducers = combineReducers({ isSignedUp: signUpReducer });
const store = createStore(reducers);

export default store;