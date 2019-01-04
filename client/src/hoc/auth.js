import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAuthRedirect } from '../actions';

export default (WrappedComponent, to = '/account/sign-in', authRequired = true) => {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { auth, clearAuthRedirect, history, redirect } = this.props;
            
            if(auth !== authRequired){
                history.push(to);
            } else if(redirect){
                clearAuthRedirect();
                history.push(redirect);
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    const mapStateToProps = ({user = {}}) => ({auth: user.auth, redirect: user.redirect});

    return connect(mapStateToProps, { clearAuthRedirect })(Auth);
}
