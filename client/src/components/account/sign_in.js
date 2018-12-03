import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Header from '../general/header';

class SignIn extends Component {
    render(){
        return (
            <div>
                <Header>Sign In</Header>
            </div>
        );
    }
}

export default reduxForm({
    form: 'sign-in'
})(SignIn);
