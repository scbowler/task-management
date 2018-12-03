import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Header from '../general/header';

class SignUp extends Component {
    render() {
        return (
            <div>
                <Header>Sign Up</Header>
            </div>
        );
    }
}

export default reduxForm({
    form: 'sign-up'
})(SignUp);
