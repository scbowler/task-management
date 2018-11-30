import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Sign Up</h1>
            </div>
        );
    }
}

export default reduxForm({
    form: 'sign-up'
})(SignUp);
