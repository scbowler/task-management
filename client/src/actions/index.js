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

export const clearProjectErrors = () => ({ type: types.CLEAR_PROJECT_ERRORS });

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
