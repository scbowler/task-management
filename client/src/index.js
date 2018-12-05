import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import think from './middleware/think';
import types from './actions/types';
import { accountJwtSignIn } from './actions';

import App from './components/app';

const store = createStore(reducers, {}, applyMiddleware(think));

if(localStorage.getItem('taskToken')){
    store.dispatch({
        type: types.SIGN_IN,
        user: {}
    });

    const signOut = () => store.dispatch({ type: types.SIGN_OUT });

    accountJwtSignIn()(store.dispatch).then(isValid => !isValid && signOut()).catch(signOut);
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
