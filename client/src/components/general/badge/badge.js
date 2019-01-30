import React from 'react';
import './badge.scss';

const Badge = ({ children, color, initials, isLead, name, onClick, open, small }) => {
    return (
        <div title={name} className="user-badge" onClick={onClick}>
            <div style={{backgroundColor: color}} className={`icon ${isLead && 'is-lead'} ${small ? 'small' : 'medium'}`}>{initials}</div>
            {
                children
                    ? <ul className={`badge-menu ${open && 'show'}`}>
                        {children}
                    </ul>
                    : null
            }
        </div>
    );
};

export default Badge;
