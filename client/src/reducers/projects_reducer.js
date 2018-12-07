import types from '../actions/types';

const DEFAULT_STATE = {
    createErrors: [],
    list: null,
    currentName: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.CLEAR_PROJECT_ERRORS:
            return { ...state, createErrors: [] };
        case types.CREATE_NEW_PROJECT_ERROR:
            return { ...state, createErrors: action.errors };   
        case types.GET_ALL_PROJECTS:
            return { ...state, createErrors: [], list: action.projects };
        case types.GET_PROJECT:
            return { ...state, currentName: action.project.name };
        default:
            return state;
    }
}
