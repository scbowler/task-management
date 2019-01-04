import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { flagListForUpdate, getTask, updateTask } from '../../actions';
import EditHeader from '../general/form/editable/header';
import EditText from '../general/form/editable/textarea';
import Messages from './messages';
import './full_task.scss';

class FullTask extends Component {
    constructor(props){
        super(props);

        const { getTask, match: { params } } = props;

        this.socket = io(`/task-${params.task_id}`, {
            path: '/ws',
            query: {
                token: localStorage.getItem('taskToken')
            }
        });

        this.socket.on('connect', () => {
            // set live flag here
            console.log('Connected for task updates');
        });

        this.socket.on('update-task', () => {
            getTask(params.task_id);
        });
    }

    componentDidMount(){
        const { getTask, match: { params } } = this.props;

        getTask(params.task_id);
    }

    componentWillUnmount(){
        this.socket.off();
    }

    close = () => {
        const { history, match: { params } } = this.props;
        
        history.push(`/projects/${params.project_id}`);
    }

    updateTask = async (field, content) => {
        const { flagListForUpdate, match: { params }, projectSocket, task: { listId }, updateTask } = this.props;

        if(field === 'name'){
            flagListForUpdate(listId);
        }

        await updateTask(field, params.task_id, content);

        this.socket.emit('update-task', params.task_id);
        projectSocket.emit('update-lists', {
            lists: [listId],
            projectId: params.project_id
        });
    }

    render(){
        const { task = {}, match: { params } } = this.props;

        return (
            <div onClick={this.close} className="full-task">
                <div onClick={e => e.stopPropagation()} className="task-contents">
                    <div className="task-body">
                        <div className="row">
                            <div className="col m7 s12">
                                <div className="row">
                                    <div className="col s12">
                                        <EditHeader send={value => this.updateTask('name', value)} className="center" content={task.name} defaultContent="Click to add a title" />
                                    </div>
                                    <div className="col s12">
                                        <EditText send={value => this.updateTask('description', value)} className="center" content={task.description} defaultContent="Click to add a description" />
                                    </div>
                                </div>
                                
                                <Messages task={task} taskId={params.task_id} />
                            </div>
                            <div className="col m5 s12 info">
                                <div className="scroll-container no-mb-rows">
                                    <div className="row">
                                        <h5 className="col s12">Info</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <b>Project: </b>
                                        </div>
                                        <div className="col s8">
                                            {task.project}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <b>List: </b>
                                        </div>
                                        <div className="col s8">
                                            {task.list}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <b>Task: </b>
                                        </div>
                                        <div className="col s8">
                                            {task.name}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <b>Created By: </b>
                                        </div>
                                        <div className="col s8">
                                            {task.createdBy}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <b>Created: </b>
                                        </div>
                                        <div className="col s8">
                                            {new Date(task.createdAt).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <b>Updated: </b>
                                        </div>
                                        <div className="col s8">
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
    flagListForUpdate,
    getTask,
    updateTask
})(FullTask);
