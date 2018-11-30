import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import tasks from './tasks_reducer';
import user from './user_reducer';

export default combineReducers({form, tasks, user});
