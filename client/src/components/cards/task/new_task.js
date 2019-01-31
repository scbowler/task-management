import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createNewProjectTask } from '../../../actions';
import Input from '../../general/form/input';

class NewTask extends Component {
    state = {
        showForm: false
    }

    toggleShow = () => this.setState({ showForm: !this.state.showForm });

    handleCreateTask = async ({ taskName }) => {
        const { createNewProjectTask, listId, projectId } = this.props;

        await createNewProjectTask(projectId, listId, taskName);

        this.cancel();
    }

    cancel = () => {
        this.props.reset();
        this.setState({ showForm: false });
    }
    render(){
        const { handleSubmit } = this.props;
        const { showForm } = this.state;

        return (
            <div className="task-card new-task">
                <div onClick={this.cancel} className={`new-task-close ${showForm ? 'open' : ''}`} />

                <div onClick={this.toggleShow} className="new-task-btn">
                    <i className="material-icons">add</i> Add New Task
                </div>
                <div className={`new-task-form ${showForm ? '' : 'no-show'}`}>
                    <form onSubmit={handleSubmit(this.handleCreateTask)}>
                        <Field name="taskName" label="Task Name" component={Input} noError />
                        <div className="center">
                            <button className="btn btn-floating waves-effect waves-light yellow darken-3"><i className="material-icons">add</i></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    createNewProjectTask
})(reduxForm({
    form: 'new-task'
})(NewTask));
