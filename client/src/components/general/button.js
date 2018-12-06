import React, { Component } from 'react';

export default class extends Component {
    getRef = e => {
        const { getRef } = this.props;

        if (typeof getRef === 'function') {
            getRef(e);
        }

        this.button = e;
    }

    render(){
        const { children, type = 'submit', color = 'yellow darken-3', id = null, onClick = () => { } } = this.props;

        return <button ref={this.getRef} className={`btn waves-effect waves-light ${color}`} id={id} onClick={onClick} type={type}>{children}</button>;
    }
}
