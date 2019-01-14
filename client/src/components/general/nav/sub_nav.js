import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './sub_nav.scss';

const SubNav = ({name, project, match}) => {
    console.log('Match:', match);
    return (
        <div className="sub-nav row">
            <div className="col s4 project-actions">
                <Link to={`${match.url}/settings`}>
                    <i className="material-icons">settings</i>
                </Link>
            </div>
            <div className="col s4 center">
                <b>{project}</b>
            </div>
            <div className="col s4 right-align user-greeting">
                {name}
            </div>
        </div>
    );
}

export default withRouter(SubNav);
