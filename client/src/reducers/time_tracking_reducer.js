import types from '../actions/types';

const DEFAULT_STATE = {
    completed: null,
    running: null,
    total: 0
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_TASK_TIME_TRACKING:
            return { ...state, running: action.running, total: action.total };
        default:
            return state;
    }
}
