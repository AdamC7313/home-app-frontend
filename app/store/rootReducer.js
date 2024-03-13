import { combineReducers } from 'redux';
import tasksReducer from './slices/tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;