import React from 'react';
import { Link } from 'react-router-dom';
import './sub_nav.scss';

const SubNav = ({name, path, project, projectOwner}) => (
    <div className="sub-nav row">
        <div className="col s4 project-actions">
            {
                projectOwner
                    ? (
                        <Link to={path}>
                            <i className="material-icons">settings</i>
                        </Link>
                    )
                    : null
            }
        </div>
        <div className="col s4 center">
            <b>{project}</b>
        </div>
        <div className="col s4 right-align user-greeting">
            {name}
        </div>
    </div>
);

export default SubNav;
