import React from 'react';
import { withRouter } from 'react-router-dom';
import './task.scss';

export default withRouter(({history, location: {pathname}, name, pid, time}) => {
    return (
        <div onClick={() => history.push(`${pathname}/task/${pid}`)} className="task-card">
            <div className="card-title">{name}</div>
            <div className="card-info">
                <i className="material-icons">timelapse</i> {time}
            </div>
        </div>
    )
});
