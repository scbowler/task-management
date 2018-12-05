const defaultErrorMessage = 'Oops, something went wrong';

export function dispatchError(dispatch, type, errObj, defaultError = defaultErrorMessage, throwErrorMsg, defaultThrowErrorMsg) {

    if (errObj.response && errObj.response.data && errObj.response.data.errors) {
        let errors = errObj.response.data.errors;

        if (!Array.isArray(errors)) {
            if (typeof errors === 'string') {
                errors = [errors];
            } else {
                errors = [defaultError];
            }
        }

        dispatch({
            type,
            errors
        });
        return;
        // throw new Error(throwErrorMsg || errors[0] || defaultError);
    }

    dispatch({
        type,
        errors: [defaultError]
    });
    return;
    // throw new Error(defaultThrowErrorMsg || defaultError);
}

export function authHeaders() {
    return {
        headers: {
            authorization: localStorage.getItem('taskToken')
        }
    };
}
