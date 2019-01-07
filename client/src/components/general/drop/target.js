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
        if(e.dataTransfer.types.length < 2) return;
        e.preventDefault();
        
        if(this.delayLeave){
            clearTimeout(this.delayLeave);
        }

        if(this.state.addClass) return;

        this.setState({addClass: 'drag-over'});
    }

    clearClass = () => this.setState({ addClass: '' });

    dragLeave = e => {
        this.delayLeave = setTimeout(this.clearClass, 50);
    }

    handleDrop = async e => {
        e.preventDefault();

        const { getProjectListTasks, match: { params: { project_id } }, moveTask, nextTaskId, socket, destinationListId } = this.props;

        const taskId = e.dataTransfer.getData('taskId');
        const isNew = nextTaskId === 'new';

        if(!taskId) return;

        const originalListId = await moveTask(taskId, destinationListId, nextTaskId);

        if (originalListId) {
            const listUpdates = [ destinationListId ];

            await getProjectListTasks(project_id, destinationListId);

            if(!isNew) this.clearClass();

            if(originalListId !== destinationListId){
                listUpdates.push(originalListId);
                getProjectListTasks(project_id, originalListId);
            }

            socket.emit('update-lists', {
                lists: listUpdates,
                projectId: project_id
            });
        }
    }

    render(){
        return (
            <div className={`task-drop-target ${this.state.addClass}`} onDrop={this.handleDrop} onDragOver={this.allowDrop} onDragLeave={this.dragLeave}>
                <div className="drop-target-inner"></div>
            </div>
        )
    }
}

export default connect(null, {
    getProjectListTasks,
    moveTask
})(withRouter(DropTarget));
