import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from '../../../helpers';
import Badge from '../../general/badge';
import './task.scss';

class Task extends Component {
    onDrag = e => {
        e.dataTransfer.setData('taskId', e.target.id);
    }

    renderCollaborators(){
        const { collaborators } = this.props;

        if(!collaborators || !collaborators.length) return null;

        return collaborators.map(({id, ...info}) => <Badge key={id} {...info} small/>);
    }

    render(){
        const { collaborators: {count, isCollaborator, isLead}, history, location: {pathname}, name, pid, time} = this.props;

        return (
            <div onDragStart={this.onDrag} id={pid} draggable="true" onClick={() => history.replace(`${pathname}/task/${pid}`)} className="task-card z-depth-2">
                <div className="card-title">{name}</div>
                <div className="card-collaborators">
                    {this.renderCollaborators()}
                </div>
                <div className="card-info row">
                    <div className="col s6 time-tracking">
                        <i className="material-icons">timelapse</i> {formatTime(time)}
                    </div>
                    <div className={`col s6 collaborators ${isCollaborator && 'belongs-to'}`}>
                        {
                            isLead
                                ? <i className="material-icons">star</i>
                                : null
                        }
                        <i className="material-icons">group</i> {count}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Task);
