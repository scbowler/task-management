import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTask } from '../../actions';
import Header from '../general/header';
import './full_task.scss';

class FullTask extends Component {
    componentDidMount(){
        const { getTask, match: { params } } = this.props;

        getTask(params.task_id);
    }

    close = () => {
        const { history, match: { params } } = this.props;
        
        history.push(`/projects/${params.project_id}`);
    }

    render(){
        const { task } = this.props;

        console.log('Task:', task);

        return (
            <div onClick={this.close} className="full-task">
                <div className="task-contents">
                    <Header>{task.name}</Header>
                    <p>{task.description || 'Click to add a description'}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({tasks}) => ({ task: tasks.single });

export default connect(mapStateToProps, {getTask})(FullTask);
