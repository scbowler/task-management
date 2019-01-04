import types from '../actions/types';

const DEFAULT_STATE = {
    createErrors: [],
    currentName: '',
    isOwner: false,
    list: null,
    settings: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.CLEAR_PROJECT:
            return { ...state, currentName: '' };
        case types.CLEAR_PROJECT_ERRORS:
            return { ...state, createErrors: [] };
        case types.CREATE_NEW_PROJECT_ERROR:
            return { ...state, createErrors: action.errors };   
        case types.GET_ALL_PROJECTS:
            return { ...state, createErrors: [], list: action.projects };
        case types.GET_PROJECT:
            return { ...state, currentName: action.project.name, isOwner: action.project.isOwner };
        case types.GET_PROJECT_SETTINGS:
            return { ...state, settings: action.settings };
        default:
            return state;
    }
}
