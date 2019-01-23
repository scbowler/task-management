import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import projects from './projects_reducer';
import tasks from './tasks_reducer';
import timeTracking from './time_tracking_reducer';
import user from './user_reducer';

export default combineReducers({form, tasks, timeTracking, projects, user});
