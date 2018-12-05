import types from './types';
import axios from 'axios'
import { authHeaders, dispatchError } from '../helpers';

export const accountSignUp = user => async dispatch => {
    try {
        const resp = await axios.post('/auth/create-account', user);

        console.log('Sign Up Resp:', resp);
    } catch(err){
        console.log('Sign Up Error:', err.response.data);
        dispatchError(dispatch, types.SIGN_UP_ERROR, err, 'Error creating account');
    }
}

export const accountSignOut = () => {
    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    }
}
