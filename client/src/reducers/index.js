import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import projects from './projects_reducer';
import tasks from './tasks_reducer';
import taskCollaborators from './task_collaborators_reducer';
import timeTracking from './time_tracking_reducer';
import user from './user_reducer';

export default combineReducers({form, taskCollaborators, tasks, timeTracking, projects, user});
