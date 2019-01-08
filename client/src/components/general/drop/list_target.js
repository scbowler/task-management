import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProject, moveList } from '../../../actions';
import './drop.scss';

class ListDropTarget extends Component {
    state = {
        addClass: ''
    }

    allowDrop = e => {
        if(e.dataTransfer.types.length > 1) return;
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

        const { getProject, match: { params: { project_id } }, moveList, nextListId, socket } = this.props;

        const listId = e.dataTransfer.getData('listId');

        if(!listId) return;

        await moveList(project_id, listId, nextListId);

        socket.emit('update-project', project_id);

        await getProject(project_id);

        this.clearClass();
    }

    render(){
        return (
            <div className={`list-drop-target ${this.state.addClass}`} onDrop={this.handleDrop} onDragOver={this.allowDrop} onDragLeave={this.dragLeave}>
                <div className="drop-target-inner"></div>
            </div>
        )
    }
}

export default connect(null, {
    getProject,
    moveList
})(withRouter(ListDropTarget));
