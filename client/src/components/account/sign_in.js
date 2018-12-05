import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { accountSignIn } from '../../actions';
import Button from '../general/button';
import Header from '../general/header';
import Input from '../general/input';
import { validation } from '../../helpers';

class SignIn extends Component {
    handleSignIn = async values => {
        const { accountSignIn, history } = this.props;

        const isValid = await accountSignIn(values);

        if(isValid) history.push('/projects');
    }

    render() {
        const { handleSubmit, signInErrors } = this.props;

        return (
            <div className="container">
                <Header>Sign In</Header>
                <form onSubmit={handleSubmit(this.handleSignIn)}>
                    <div className="row">
                        <Field name="email" label="Email" component={Input} />
                    </div>
                    <div className="row">
                        <Field name="password" label="Password" component={Input} type="password" />
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <Button color="orange darken-3" type="button">Cancel</Button>
                        </div>
                        <div className="col s6 center">
                            <Button>Sign In</Button>
                        </div>
                        {
                            signInErrors.map(err => <p key={err} className="orange-text text-darken-3 right-align">{err}</p>)
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function validate({ email, password }) {
    const errors = {};

    if (!email) errors.email = 'Please enter your email';

    if (!password) errors.password = 'Please enter your password';

    return errors;
}

const testUser = {
    email: 'scott.bowler@learningfuze.com',
    password: 'asDF1234!'
}

const mapStateToProps = ({ user: { signInErrors } }) => ({ signInErrors });

export default connect(mapStateToProps, {
    accountSignIn
})(reduxForm({
    form: 'sign-in',
    initialValues: testUser,
    validate
})(SignIn));
