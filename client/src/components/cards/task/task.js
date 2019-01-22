import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from '../../../helpers';
import './task.scss';

class Task extends Component {
    onDrag = e => {
        e.dataTransfer.setData('taskId', e.target.id);
    }

    render(){
        const {history, location: {pathname}, name, pid, time} = this.props;

        return (
            <div onDragStart={this.onDrag} id={pid} draggable="true" onClick={() => history.replace(`${pathname}/task/${pid}`)} className="task-card z-depth-2">
                <div className="card-title">{name}</div>
                <div className="card-info">
                    <i className="material-icons">timelapse</i> {formatTime(time)}
                </div>
            </div>
        )
    };
}

export default withRouter(Task);
