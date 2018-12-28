import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { getTask, updateTaskDescription } from '../../actions';
import Header from '../general/header';
import EditText from '../general/form/editable/textarea';
import './full_task.scss';

class FullTask extends Component {
    constructor(props){
        super(props);

        this.socket = io('/', {
            path: '/ws'
        });
    }

    componentDidMount(){
        const { getTask, match: { params } } = this.props;

        getTask(params.task_id);
    }

    close = () => {
        const { history, match: { params } } = this.props;
        
        history.push(`/projects/${params.project_id}`);
    }

    updateDescription = async description => {
        const { match: { params }, updateTaskDescription } = this.props;

        await updateTaskDescription(params.task_id, description);
    }

    render(){
        const { task } = this.props;

        return (
            <div onClick={this.close} className="full-task">
                <div onClick={e => e.stopPropagation()} className="task-contents">
                    <div className="task-body">
                        <div className="row">
                            <div className="col m8 s12 messages">
                                <div className="row">
                                    <div className="col s12">
                                        <Header>{task.name}</Header>
                                    </div>
                                    <div className="col s12">
                                        <EditText send={this.updateDescription} className="center" content={task.description} defaultContent="Click to add a description" />
                                    </div>
                                </div>
                                <h5>Messages</h5>
                            </div>
                            <div className="col m4 s12 info">
                                <div className="scroll-container">
                                    <div className="row">
                                        <h5 className="col s12">Info</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col s3">
                                            <b>Project: </b>
                                        </div>
                                        <div className="col s9">
                                            {task.project}
                                        </div>
                                        <div className="col s3">
                                            <b>List: </b>
                                        </div>
                                        <div className="col s9">
                                            {task.list}
                                        </div>
                                        <div className="col s3">
                                            <b>Task: </b>
                                        </div>
                                        <div className="col s9">
                                            {task.name}
                                        </div>
                                        <div className="col s3">
                                            <b>Created By: </b>
                                        </div>
                                        <div className="col s9">
                                            {task.createdBy}
                                        </div>
                                        <div className="col s3">
                                            <b>Created: </b>
                                        </div>
                                        <div className="col s9">
                                            {new Date(task.createdAt).toLocaleString()}
                                        </div>
                                        <div className="col s3">
                                            <b>Updated: </b>
                                        </div>
                                        <div className="col s9">
                                            {new Date(task.updatedAt).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h5 className="col s12">Time Tracking</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            Time tracking stuff here
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h5 className="col s12">Related Tasks</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            Related task stuff here
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({tasks}) => ({ task: tasks.single });

export default connect(mapStateToProps, {
    getTask,
    updateTaskDescription
})(FullTask);
