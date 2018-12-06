import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { accountSignUp } from '../../actions';
import Button from '../general/button';
import Header from '../general/header';
import Input from '../general/form/input';
import { validation } from '../../helpers';

class SignUp extends Component {
    handleSignUp = async values => {
        const { accountSignUp, history } = this.props;

        const isValid = await accountSignUp(values);

        if(isValid) history.push('/projects');
    }

    render() {
        const { handleSubmit, signUpErrors } = this.props;

        return (
            <div className="container">
                <Header>Sign Up</Header>
                <form onSubmit={handleSubmit(this.handleSignUp)}>
                    <div className="row">
                        <Field name="firstName" label="First Name" component={Input} col="s12 m6"/>
                        <Field name="lastName" label="Last Name" component={Input} col="s12 m6" />
                        <Field name="email" label="Email" component={Input} col="s12 m6 offset-m3" />
                        <Field name="password" label="Password" component={Input} type="password" col="s12 m6"/>
                        <Field name="confirmPassword" label="Confirm Password" component={Input} type="password" col="s12 m6"/>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <Button color="orange darken-3" type="button">Cancel</Button>
                        </div>
                        <div className="col s6 center">
                            <Button>Sign Up</Button>
                        </div>
                        {
                            signUpErrors.map(err => <p key={err} className="orange-text text-darken-3 right-align">{err}</p>)
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function validate({ confirmPassword, email, firstName, lastName, password }){
    const errors = {};
    
    if(!email) errors.email = 'Please enter your email';
    else if(!validation.email(email)) errors.email = 'Please enter a valid email address';

    if(!firstName) errors.firstName = 'Please enter your first name';
    else if(!validation.name(firstName)) errors.firstName = 'Name can only contain characters Aa-Zz';

    if (!lastName) errors.lastName = 'Please enter your last name';
    else if (!validation.name(lastName)) errors.lastName = 'Name can only contain characters Aa-Zz'

    if(!password) errors.password = 'Please choose a password';
    else if(!validation.password(password)) errors.password = 'Password must contain, a capital letter, lowercase letter, special character, number, and be at least 8 characters long';

    if(password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    return errors;
}

const mapStateToProps = ({user: {signUpErrors}}) => ({signUpErrors});

export default connect(mapStateToProps, {
    accountSignUp
})(reduxForm({
    form: 'sign-up',
    validate
})(SignUp));
