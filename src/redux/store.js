import {createStore} from 'redux';
import reducer from './reducer';
import reducers from './reducers'
import {combineReducers} from 'redux';

const user = reducer;

const songs = reducers;

const allReducer = combineReducers({user, songs})

export default createStore(allReducer);