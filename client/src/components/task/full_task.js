import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import io from '../../socket';
import { clearTask, deleteSingleTask, flagListForUpdate, getTask, updateTask } from '../../actions';
import EditHeader from '../general/form/editable/header';
import EditText from '../general/form/editable/textarea';
import Header from '../general/header';
import Messages from './messages';
import TaskCollaborators from './collaborators';
import TaskInfo from './task_info';
import TimeTracking from './time_tracking';
import './full_task.scss';

class FullTask extends Component {
    constructor(props){
        super(props);

        const { clearTask, getTask, match: { params } } = props;

        this.socket = io(`/task-${params.task_id}`);

        // this.socket.on('connect', () => {
        //     // set live flag here
        //     console.log('Connected for task updates');
        // });

        this.socket.on('task-deleted', () => {
            clearTask();
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

        this.socket.close();
    }

    close = () => {
        const { history, match: { params } } = this.props;
        
        history.push(`/projects/${params.project_id}`);
    }

    deleteTask = async () => {
        const { deleteSingleTask, flagListForUpdate, history, match: { params }, task: { listId } } = this.props;

        await deleteSingleTask(params.task_id);

        flagListForUpdate(listId);

        history.push(`/projects/${params.project_id}`);
    }

    updateTask = async (field, content) => {
        const { flagListForUpdate, match: { params }, task: { listId }, updateTask } = this.props;

        if(field === 'name'){
            flagListForUpdate(listId);
        }

        await updateTask(field, params.task_id, content);
    }

    renderTask(){
        const { isProjectOwner, task = {}, match: { params } } = this.props;

        if(task === null){
            return (
                <Fragment>
                    <Header>Task Deleted</Header>
                    <h5 onClick={this.close} className="project-link center">Return to Project</h5>
                </Fragment>
            );
        }

        const commonProps = {
            listId: task.listId,
            taskId: params.task_id,
            projectId: params.project_id,
            socket: this.socket
        }

        return (
            <Fragment>
                {
                    task.isOwner || isProjectOwner
                        ? <i onClick={this.deleteTask} className="delete-icon material-icons">delete</i>
                        : null
                }
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
                            <TaskCollaborators {...commonProps}/>
                            <TimeTracking {...commonProps}/>
                            <div className="row">
                                <h5 className="col s12">Related Tasks</h5>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    Related task stuff here
                                        </div>
                            </div>
                            <TaskInfo {...task}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    render(){
        return (
            <div onClick={this.close} className="full-task">
                <div onClick={e => e.stopPropagation()} className="task-contents">
                    <div className="task-body">
                        {this.renderTask()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({tasks, projects}) => ({ task: tasks.single, isProjectOwner: projects.isOwner });

export default connect(mapStateToProps, {
    clearTask,
    deleteSingleTask,
    flagListForUpdate,
    getTask,
    updateTask
})(FullTask);
