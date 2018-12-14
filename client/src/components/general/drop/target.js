import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjectListTasks, moveTask } from '../../../actions';
import './drop.scss';

class DropTarget extends Component {
    state = {
        addClass: ''
    }

    allowDrop = e => {
        e.preventDefault();

        this.setState({addClass: 'drag-over'});
    }

    dragLeave = e => {
        this.setState({ addClass: '' });
    }

    handleDrop = async e => {
        e.preventDefault();

        this.setState({ addClass: '' });

        const { getProjectListTasks, match: { params }, moveTask, nextTaskId, destinationListId } = this.props;

        const taskId = e.dataTransfer.getData('taskId');

        const originalListId = await moveTask(taskId, destinationListId, nextTaskId);

        if (originalListId) {
            getProjectListTasks(params.project_id, destinationListId);

            if(originalListId !== destinationListId){
                getProjectListTasks(params.project_id, originalListId);
            }
        }
    }

    render(){
        return <div className={`list-drop-target ${this.state.addClass}`} onDrop={this.handleDrop} onDragOver={this.allowDrop} onDragLeave={this.dragLeave}/>
    }
}

export default connect(null, {
    getProjectListTasks,
    moveTask
})(withRouter(DropTarget));
