import React from 'react';
import './badge.scss';

const Badge = ({ children, color, initials, isLead, name, onClick, open }) => {
    return (
        <div title={name} className="user-badge" onClick={onClick}>
            <div style={{backgroundColor: color}} className={`icon ${isLead && 'is-lead'}`}>{initials}</div>
            <ul className={`badge-menu ${open && 'show'}`}>
                {children}
            </ul>
        </div>
    );
};

export default Badge;
