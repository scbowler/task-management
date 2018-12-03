export default ({dispatch}) => next => action => (
    typeof action === 'function' ? action(dispatch) : next(action)
);
