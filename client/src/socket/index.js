const io = require('socket.io-client');
const { server } = require('../config/socket');

const ioConfig = {
    path: '/ws',
    query: {
        token: localStorage.getItem('taskToken')
    }
}

export const rootIo = io(server, ioConfig);

export default (path = server, options = {}) => {
    return io(path === server ? server : server + path, {
        ...ioConfig,
        ...options
    });
}
