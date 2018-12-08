import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProjectListTasks } from '../../actions';
import NewTask from '../cards/task/new_task';
import Task from '../cards/task';
import './list.scss';

const tasks = [];

class List extends Component {
    componentDidMount(){
        const { getProjectListTasks, match: { params }, pid} = this.props;
        
        getProjectListTasks(params.project_id, pid);
    }
    renderTasks(){
        const { tasks } = this.props;

        if(!tasks || !tasks.length) return null;

        return tasks.map(task => <Task key={task.pid} {...task}/>);
    }

    render(){
        const { getProjectListTasks, match: { params }, name, pid } = this.props;

        return (
            <div className="task-list">
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
        tasks: tasks.tasks[pid] || ['Nothing']
    };
}

export default connect(mapStateToProps, {
    getProjectListTasks
})(withRouter(List));
