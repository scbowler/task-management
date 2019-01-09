import types from './types';
import axios from 'axios'
import { authHeaders, dispatchError } from '../helpers';

export const accountJwtSignIn = () => async dispatch => {
    try {
        const { data: { user } } = await axios.get('/auth/jwt-sign-in', authHeaders());

        dispatch({
            type: types.SIGN_IN,
            user
        });

        return true;
    } catch (err) {
        dispatchError(dispatch, types.SIGN_IN_ERROR, err, 'Error signing in');

        return false;
    }
}

export const accountSignIn = currentUser => async dispatch => {
    try {
        const { data: { token, user } } = await axios.post('/auth/sign-in', currentUser);

        localStorage.setItem('taskToken', token)

        dispatch({
            type: types.SIGN_IN,
            user
        });

        return true;
    } catch (err) {
        dispatchError(dispatch, types.SIGN_IN_ERROR, err, 'Error signing in');

        return false;
    }
}

export const accountSignUp = newUser => async dispatch => {
    try {
        const { data: {token, user} } = await axios.post('/auth/create-account', newUser);

        localStorage.setItem('taskToken', token)

        dispatch({
            type: types.SIGN_UP,
            user
        });

        return true;
    } catch(err){
        dispatchError(dispatch, types.SIGN_UP_ERROR, err, 'Error creating account');

        return false;
    }
}

export const accountSignOut = () => ({ type: types.SIGN_OUT });

export const clearAuthRedirect = () => ({ type: types.CLEAR_AUTH_REDIRECT });

export const clearListUpdateFlag = () => ({ type: types.CLEAR_LIST_UPDATE_FLAG });

export const clearProject = () => ({ type: types.CLEAR_PROJECT });

export const clearProjectErrors = () => ({ type: types.CLEAR_PROJECT_ERRORS });

export const clearTask = () => ({ type: types.CLEAR_TASK });

export const createNewProject = newProject => async dispatch => {
    try {
        const { data: { pid } } = await axios.post('/api/projects', newProject, authHeaders());

        dispatch({
            type: types.CLEAR_PROJECT_ERRORS
        });

        return pid;
    } catch(err){
        dispatchError(dispatch, types.CREATE_NEW_PROJECT_ERROR, err, 'Error creating new project');
        return false;
    }
}

export const createNewProjectList = (projectId, listName) => async dispatch => {
    try {
        await axios.post(`/api/projects/${projectId}/lists`, {listName} ,authHeaders());
    } catch(err){
        dispatchError(dispatch, types.CREATE_NEW_PROJECT_LIST_ERROR, err, 'Error adding new list to project');
    }
}

export const createNewProjectTask = (projectId, listId, taskName) => async dispatch => {
    try {
        await axios.post(`/api/projects/${projectId}/lists/${listId}/tasks`, {name: taskName}, authHeaders());
    } catch(err){
        dispatchError(dispatch, types.CREATE_NEW_PROJECT_TASK_ERROR, err, 'Error creating task');
    }
}

export const deleteList = (projectId, listId) => async dispatch => {
    try {
        await axios.delete(`/api/projects/${projectId}/lists/${listId}`, authHeaders());
    } catch(err){
        dispatchError(dispatch, types.DELETE_LIST_ERROR, err, 'Error deleting list');
    }
}

export const deleteSingleTask = taskId => async dispatch => {
    try {
        await axios.delete(`/api/tasks/${taskId}`, authHeaders());
    }catch(err){
        dispatchError(dispatch, types.DELETE_SINGLE_TASK_ERROR, err, 'Error deleting task');
    }
}

export const flagListForUpdate = listId => {
    return {
        type: types.FLAG_LIST_TO_UPDATE,
        listId
    }
}

export const getAllProjects = () => async dispatch => {
    try {
        const { data: { projects }} = await axios.get('/api/projects', authHeaders());

        dispatch({
            type: types.GET_ALL_PROJECTS,
            projects
        });
    } catch(err){
        dispatchError(dispatch, types.GET_ALL_PROJECTS_ERROR, err, 'Error fetching projects list');
    }
}

export const getProject = id => async dispatch => {
    try {
        const { data: { project } } = await axios.get(`/api/projects/${id}`, authHeaders());

        dispatch({
            type: types.GET_PROJECT,
            project
        });
        return true;
    } catch(err){
        if (err.response.status === 401) {
            dispatch({
                type: types.AUTH_REDIRECT,
                redirect: `/projects`
            });

            return false;
        }
        dispatchError(dispatch, types.GET_PROJECT_ERROR, err, 'Error fetching project');
    }
}

export const getProjectListTasks = (projectId, listId) => async dispatch => {
    try {
        const { data: { success, ...tasks }} = await axios.get(`/api/projects/${projectId}/lists/${listId}/tasks`, authHeaders());

        dispatch({
            ...tasks,
            type: types.GET_PROJECT_LIST_TASKS
        })
    } catch(err){
        dispatchError(dispatch, types.CREATE_NEW_PROJECT_LIST_ERROR, err, 'Error getting tasks for list');
    }
}

export const getProjectSettings = projectId => async dispatch => {
    try {
        const { data: { success, ...settings } } = await axios.get(`/api/projects/${projectId}/settings`, authHeaders());

        dispatch({
            settings,
            type: types.GET_PROJECT_SETTINGS
        });
    } catch(err){
        if (err.response.status === 401){
            return dispatch({
                type: types.AUTH_REDIRECT,
                redirect: `/projects/${projectId}`
            });
        }
        dispatchError(dispatch, types.GET_PROJECT_SETTINGS_ERROR, err, 'Error fetching project\'s setting data');
    }
}

export const getTask = taskId => async dispatch => {
    try {
        const { data: { task } } = await axios.get(`/api/tasks/${taskId}`, authHeaders());

        dispatch({
            type: types.GET_SINGLE_TASK,
            task
        });
    } catch(err){
        dispatchError(dispatch, types.GET_SINGLE_TASK, err, 'Error getting task');
    }
}

export const moveList = (projectId, listId, nextId) => async dispatch => {
    try {
        await axios.patch(`/api/projects/${projectId}/lists/${listId}/move`, { nextId }, authHeaders());

        return true;
    } catch(err){
        dispatchError(dispatch, types.MOVE_LIST_ERROR, err, 'Error moving list');

        return false;
    }
}

export const moveTask = (taskId, toListId, nextId) => async dispatch => {
    try {
        const { data: { startingListId } } = await axios.patch(`/api/tasks/${taskId}/move/${toListId}`, {nextId}, authHeaders());

        return startingListId;
    } catch(err){
        dispatchError(dispatch, types.MOVE_TASK_ERROR, err, 'Error moving task');

        return false;
    }
}

export const projectAddCollaborator = (projectId, userId) => async dispatch => {
    try {
        await axios.post(`/api/projects/${projectId}/collaborators/${userId}`, {}, authHeaders());

        return true;
    } catch(err){
        dispatchError(dispatch, types.PROJECT_ADD_COLLABORATOR_ERROR, err, 'Error adding collaborator');

        return false;
    }
}

export const projectRemoveCollaborator = (projectId, userId) => async dispatch => {
    try {
        await axios.delete(`/api/projects/${projectId}/collaborators/${userId}`, authHeaders());

        return true;
    } catch (err) {
        dispatchError(dispatch, types.PROJECT_REMOVE_COLLABORATOR_ERROR, err, 'Error removing collaborator');

        return false;
    }
}

export const updateTask = (field, taskId, content) => async dispatch => {
    try {
        const { data: { task } } = await axios.patch(`/api/tasks/${taskId}/${field}`, {[field]: content}, authHeaders());

        dispatch({
            type: types.UPDATE_TASK,
            task
        });
        return true;
    } catch(err){
        dispatchError(dispatch, types.UPDATE_TASK_ERROR, err, 'Error updating task description');
        return false;
    }
}
