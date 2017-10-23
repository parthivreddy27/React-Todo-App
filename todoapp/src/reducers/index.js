import {combineReducers} from 'redux';

import tasksReducer from './reducer-task';

const reducers = combineReducers({
	tasks: tasksReducer
})


export default reducers;