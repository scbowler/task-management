import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../cards/task';
import './list.scss';

const tasks = [];

class List extends Component {
    renderTasks(){
        // const { tasks } = this.props;

        if(!tasks || !tasks.length) return null;

        return tasks.map(task => <Task key={task.pid} {...task}/>);
    }

    render(){
        const { name, tasks } = this.props;

        console.log('Tasks:', tasks);

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
                </div>
            </div>
        )
    }
}

function mapStateToProps({tasks}, {pid}){

    return {
        tasks: tasks.tasks[pid] || ['Nothing']
    };
}

export default connect(mapStateToProps)(List);
