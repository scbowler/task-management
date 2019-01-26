import types from '../actions/types';

const DEFAULT_STATE = {
    available: [],
    current: []
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_TASK_COLLABORATORS:
            return { ...state, current: action.collaborators };
        case types.GET_TASK_AVAILABLE_COLLABORATORS:
            return { ...state, available: action.availableCollaborators };
        default:
            return state;
    }
}
