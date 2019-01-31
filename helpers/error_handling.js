const errorFlag = 'CLIENT_ERROR';

exports.errorFlag = errorFlag;

exports.sendError = function (res, err, defaultMessage = 'An error occurred', defaultErrorCode = 500) {
    const error = {
        success: false,
        errors: formatError(err, defaultMessage)
    };
    const status = err.status || defaultErrorCode;

    res.status(status).send(error);
}

exports.StatusError = class extends Error {
    constructor(status = 500, array = null, ...params) {
        super(...params);

        this.array = array;
        this.status = status;
    }
}

exports.formatError = formatError;

function formatError(err, defaultErrorMessage, flagStr = errorFlag) {
    let formattedError = [defaultErrorMessage];

    if (err instanceof Error) {
        err = (err.array && err.array.length) || err.message;
    }

    if (typeof err === 'string') {
        const index = err.search(flagStr);

        if (index >= 0) {
            formattedError = [err.replace(flagStr, '').trim()];
        }
    } else if(Array.isArray(err)){
        formattedError = err;
    }

    return formattedError;
}

module.exports = exports;
