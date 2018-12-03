import types from './types';
import axios from 'axios'

export const accountSignOut = () => {
    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    }
}
