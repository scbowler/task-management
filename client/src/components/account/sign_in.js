import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { accountSignIn } from '../../actions';
import Button from '../general/button';
import Header from '../general/header';
import Input from '../general/form/input';

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

const mapStateToProps = ({ user: { signInErrors } }) => ({ signInErrors });

export default connect(mapStateToProps, {
    accountSignIn
})(reduxForm({
    form: 'sign-in',
    validate
})(SignIn));
