import React from 'react';
import { withRouter } from 'react-router-dom';
import './task.scss';

export default withRouter(({history, location: {pathname}, name, pid, time}) => {
    return (
        <div onClick={() => history.replace(`${pathname}/task/${pid}`)} className="task-card">
            <div className="card-title">{name}</div>
            <div className="card-info">
                <i className="material-icons">timelapse</i> {time || '0:00:00'}
            </div>
        </div>
    )
});
