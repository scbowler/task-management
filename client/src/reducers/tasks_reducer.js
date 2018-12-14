import types from '../actions/types';

const DEFAULT_STATE = {
    lists: null,
    tasks: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.CLEAR_PROJECT:
            return { ...DEFAULT_STATE };
        case types.GET_PROJECT:
            return { ...state, lists: action.project.lists };
        case types.GET_PROJECT_LIST_TASKS:
            return { ...state, tasks: {...state.tasks, [action.listId]: [...action.tasks] } };
        default:
            return state;
    }
}
