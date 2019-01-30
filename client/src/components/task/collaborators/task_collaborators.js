import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addTaskCollaborators, clearTaskCollaborators, deleteCollaborator, getTaskAvailableCollaborators, getTaskCollaborators, toggleBadgeMenu, toggleCollaboratorLead } from '../../../actions';
import Badge from '../../general/badge';
import Button from '../../general/button';
import Select from '../../general/form/select';
import './task_collaborators.scss';

class TaskCollaborators extends Component {
    componentDidMount(){
        this.updateCollaborators();

        this.props.socket.on('update-collaborators', () => {
            this.updateCollaborators();
        });
    }

    componentWillUnmount(){
        this.props.clearTaskCollaborators();
    }

    handleAddCollaborators = async ({collaborators}) => {
        const { addTaskCollaborators, reset, taskId } = this.props;

        await addTaskCollaborators(taskId, collaborators);

        this.updateCollaborators();

        reset();
    }

    async handleRemoveCollaborator(collaboratorId){
        const { deleteCollaborator, taskId } = this.props;

        await deleteCollaborator(taskId, collaboratorId);

        this.updateCollaborators();
    }

    handleToggleBadgeMenu(index){
        const { current, toggleBadgeMenu } = this.props;

        toggleBadgeMenu(index, current);
    }

    async toggleLead(collaboratorId){
        const { taskId, toggleCollaboratorLead } = this.props;

        await toggleCollaboratorLead(taskId, collaboratorId);

        this.updateCollaborators();
    }

    updateCollaborators(){
        const { getTaskAvailableCollaborators, getTaskCollaborators, taskId } = this.props;

        getTaskCollaborators(taskId);
        getTaskAvailableCollaborators(taskId);
    }

    render(){
        const { available, current, handleSubmit } = this.props;

        const badges = current.map(({color, id, initials, isLead, name, open}, i) => {
            return (
                <Badge key={id} color={color} initials={initials} isLead={isLead} name={name} onClick={() => this.handleToggleBadgeMenu(i)} open={open}>
                    <li onClick={() => this.toggleLead(id)}>
                        {isLead ? 'Remove Lead' : 'Make Lead'}
                    </li>
                    <li onClick={() => this.handleRemoveCollaborator(id)}>Remove</li>
                </Badge>
            );
        });

        return (
            <div className="collaborators">
                <div className="row">
                    <h5 className="col s12">Collaborators</h5>
                    <div className="col s12 collaborator-badges">
                        {badges}
                    </div>
                </div>
                <form onSubmit={handleSubmit(this.handleAddCollaborators)} className="row">
                    <Field 
                        component={Select}
                        defaultOption="Select Collaborators to Add"
                        name="collaborators"
                        multiple={true}
                        options={available}
                    />
                    <div className="col s12">
                        <Button>Add Collaborators</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({taskCollaborators: { available, current }}) => ({ available, current });

TaskCollaborators = connect(mapStateToProps, {
    addTaskCollaborators,
    clearTaskCollaborators,
    deleteCollaborator,
    getTaskAvailableCollaborators,
    getTaskCollaborators,
    toggleBadgeMenu,
    toggleCollaboratorLead
})(TaskCollaborators);

const validate = ({collaborators}) => !collaborators.length ? {collaborators: 'Please select collaborators to add'} : {};

export default reduxForm({
    form: 'add-collaborators',
    initialValues: {
        collaborators: []
    },
    validate
})(TaskCollaborators);
