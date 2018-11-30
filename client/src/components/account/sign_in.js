import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignIn extends Component {
    render(){
        return (
            <div>
                <h1 className="center">Sign In</h1>
            </div>
        );
    }
}

export default reduxForm({
    form: 'sign-in'
})(SignIn);
