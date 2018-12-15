import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjectListTasks, moveTask } from '../../actions';
import DropTarget from '../general/drop/target';
import NewTask from '../cards/task/new_task';
import Task from '../cards/task';
import './list.scss';

class List extends Component {
    state = {
        addClass: ''
    }

    componentDidMount(){
        const { getProjectListTasks, match: { params }, pid, tasks} = this.props;

        if(!tasks || !tasks.length){
            getProjectListTasks(params.project_id, pid);
        }
    }

    dragOver = e => {
        this.setState({addClass: 'drag-over'});
    }

    endDrag = e => {
        this.setState({ addClass: '' });
    }

    handleDrop = async e => {
        // e.preventDefault();
        // const { getProjectListTasks, match: { params }, moveTask, pid } = this.props;

        // const taskId = e.dataTransfer.getData('taskId');

        // const originalListId = await moveTask(taskId, pid);

        // if(originalListId){
        //     getProjectListTasks(params.project_id, pid);
        //     getProjectListTasks(params.project_id, originalListId);
        // }
    }

    renderTasks(){
        const { pid, tasks } = this.props;

        if (!tasks || !tasks.length) return <DropTarget destinationListId={pid} nextTaskId="new" />;

        return (
            <Fragment>
                {
                    tasks.map(task => (
                        <Fragment key={task.pid}>
                            <DropTarget destinationListId={pid} nextTaskId={task.pid} />
                            <Task {...task} />
                        </Fragment>
                    ))
                }
                <DropTarget destinationListId={pid} nextTaskId="end" />
            </Fragment>
        );
    }

    render(){
        const { getProjectListTasks, match: { params }, name, pid } = this.props;

        return (
            <div className={`task-list ${this.state.addClass}`} onDragOver={this.dragOver} onDrop={this.endDrag} onDragEnd={this.endDrag} onDragLeave={this.endDrag}>
                <div className="list-header">
                    <div className="list-name">{name}</div>
                    <div className="list-options">
                        <i className="material-icons">more_vert</i>
                    </div>
                </div>
                <div className="list-contents">
                    {this.renderTasks()}
                    <NewTask updateTasks={getProjectListTasks} listId={pid} projectId={params.project_id}/>
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
    getProjectListTasks,
    moveTask
})(withRouter(List));
