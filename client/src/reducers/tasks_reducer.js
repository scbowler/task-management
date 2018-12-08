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
            return { ...state, lists: action.project.lists, tasks: action.project.tasks };
        default:
            return state;
    }
}
