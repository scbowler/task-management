import React, { Component } from 'react';
import Task from '../cards/task';
import './list.scss';

const tasks = [
    {
        name: 'Task 1',
        pid: '001',
        time: '1:24:05'
    },
    {
        name: 'Task 2',
        pid: '002',
        time: '1:24:05'
    },
    {
        name: 'Task 3',
        pid: '003',
        time: '1:24:05'
    },
    {
        name: 'Task 4',
        pid: '004',
        time: '1:24:05'
    },
    {
        name: 'Task 5',
        pid: '005',
        time: '1:24:05'
    }
]

class List extends Component {
    renderTasks(){
        // const { tasks } = this.props;

        if(!tasks || !tasks.length) return null;

        return tasks.map(task => <Task key={task.pid} {...task}/>);
    }

    render(){

        return (
            <div className="task-list">
                <div className="list-header">
                    <div className="list-name">Ongoing</div>
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

export default List;
