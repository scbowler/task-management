import React from 'react';
import './sub_nav.scss';

const SubNav = ({name, project}) => (
    <div className="sub-nav row">
        <div className="col s4"></div>
        <div className="col s4 center">
            <b>{project}</b>
        </div>
        <div className="col s4 right-align user-greeting">
            {name}
        </div>
    </div>
);

export default SubNav;
