import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './404.scss';

export default class extends Component {
    componentDidMount(){
        this.props.history.replace('/404');
    }

    render(){
        return (
            <div className="not-found">
                <div className="center">
                    <h1>404 Page Not Found</h1>
                    <Link to="/"><i className="material-icons main-text">home</i></Link>
                </div>
            </div>
        );
    }
}
