import React, { Component } from 'react';
import './badge.scss';

class Badge extends Component {
    state = { show: false };

    toggleShow = () => {
        this.setState({show: !this.state.show});
    }

    render(){
        const { color, initials, isLead, name } = this.props;

        console.log('isLead:', isLead);

        return (
            <div title={name} className="user-badge" onClick={this.toggleShow}>
                <div style={{backgroundColor: color}} className={`icon ${isLead && 'is-lead'}`}>{initials}</div>
                <ul className={`badge-menu ${this.state.show && 'show'}`}>
                    <li>Make Lead</li>
                    <li>Remove</li>
                </ul>
            </div>
        );
    }
}

export default Badge;
