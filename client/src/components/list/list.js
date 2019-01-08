import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearListUpdateFlag, getProjectListTasks } from '../../actions';
import DropTarget from '../general/drop/target';
import NewTask from '../cards/task/new_task';
import Task from '../cards/task';
import './list.scss';

class List extends Component {
    state = {
        addClass: ''
    }

    componentDidMount(){
        const { clearListUpdateFlag, getProjectListTasks, match: { params }, pid, shouldUpdate, tasks} = this.props;

        if(shouldUpdate || !tasks || !tasks.length){
            getProjectListTasks(params.project_id, pid);

            if(shouldUpdate) clearListUpdateFlag();
        }
    }

    onDrag = e => {
        e.dataTransfer.setData('listId', e.target.id);
    }

    renderTasks(){
        const { pid, socket, tasks } = this.props;

        const dropProps = {
            destinationListId: pid,
            socket
        }

        if (!tasks || !tasks.length) return <DropTarget {...dropProps} nextTaskId="new" />;

        return (
            <Fragment>
                {
                    tasks.map(task => (
                        <Fragment key={task.pid}>
                            <DropTarget {...dropProps} nextTaskId={task.pid} />
                            <Task {...task} />
                        </Fragment>
                    ))
                }
                <DropTarget {...dropProps} nextTaskId="end" />
            </Fragment>
        );
    }

    render(){
        const { getProjectListTasks, match: { params }, name, pid, socket } = this.props;

        return (
            <div className={`task-list z-depth-1 ${this.state.addClass}`} draggable id={pid} onDragStart={this.onDrag}>
                <div className="list-header">
                    <div className="list-name">{name}</div>
                    <div className="list-options">
                        <i className="material-icons">more_vert</i>
                    </div>
                </div>
                <div className="list-contents">
                    {this.renderTasks()}
                    <NewTask updateTasks={getProjectListTasks} listId={pid} projectId={params.project_id} socket={socket}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps({tasks}, {pid}){
    return {
        tasks: tasks.tasks[pid]
    };
}

export default connect(mapStateToProps, {
    clearListUpdateFlag,
    getProjectListTasks
})(withRouter(List));
