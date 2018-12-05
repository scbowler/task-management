import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    signInErrors: [],
    signUpErrors: [],
    info: {}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { ...DEFAULT_STATE, auth: true, info: action.user };
        case types.SIGN_OUT:
            localStorage.removeItem('taskToken');
            return { ...DEFAULT_STATE };
        case types.SIGN_IN_ERROR:
            return { ...DEFAULT_STATE, signInErrors: action.errors };
        case types.SIGN_UP_ERROR:
            return { ...DEFAULT_STATE, signUpErrors: action.errors };
        default:
            return state;
    }
}
