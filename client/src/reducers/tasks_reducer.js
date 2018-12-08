import types from '../actions/types';

const DEFAULT_STATE = {
    lists: null
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_PROJECT:
            return { ...state, lists: action.project.lists };
        default:
            return state;
    }
}
