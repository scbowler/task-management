import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearListUpdateFlag, getProjectListTasks } from '../../actions';
import DropTarget from '../general/drop/target';
import ListOptions from './list_options';
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
        const { pid, tasks } = this.props;

        const dropProps = {
            destinationListId: pid
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
        const { isOwner, match: { params }, name, pid } = this.props;

        return (
            <div className={`task-list z-depth-1 ${this.state.addClass}`} draggable id={pid} onDragStart={this.onDrag}>
                <div className="list-header">
                    <div className="list-name">{name}</div>
                    <ListOptions isOwner={isOwner} projectId={params.project_id} listId={pid}/>
                </div>
                <div className="list-contents">
                    {this.renderTasks()}
                    <NewTask listId={pid} projectId={params.project_id} />
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
