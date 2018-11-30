import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent, to = '/account/sign-in', authRequired = true) => {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { auth, history } = this.props;
            
            if(auth !== authRequired){
                history.push(to);
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    const mapStateToProps = ({user = {}}) => ({auth: user.auth});

    return connect(mapStateToProps)(Auth);
}
