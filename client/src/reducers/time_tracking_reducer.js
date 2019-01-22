import types from '../actions/types';

const DEFAULT_STATE = {
    completed: null,
    running: null,
    total: 0,
    widget: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.CLEAR_WIDGET:
            return { ...state, widget: null };
        case types.GET_TASK_TIME_TRACKING:
            return { ...state, running: action.running, total: action.total };
        case types.GET_USER_RUNNING_TRACKING:
            return { ...state, widget: action.timer };
        default:
            return state;
    }
}
