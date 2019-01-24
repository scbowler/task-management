import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getTaskAvailableCollaborators, getTaskCollaborators } from '../../../actions';
import Button from '../../general/button';
import Select from '../../general/form/select';

class TaskCollaborators extends Component {
    componentDidMount(){
        this.updateCollaborators();
    }

    handleAddCollaborators = ({collaborators}) => {
        const { reset } = this.props;

        console.log('Add Collaborators:', collaborators);

        reset();
    }

    updateCollaborators(){
        const { getTaskAvailableCollaborators, getTaskCollaborators, taskId } = this.props;

        getTaskCollaborators(taskId);
        getTaskAvailableCollaborators(taskId);
    }

    render(){
        const { available, handleSubmit } = this.props;

        return (
            <div className="collaborators">
                <div className="row">
                    <h5 className="col s12">Collaborators</h5>
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

const mapStateToProps = ({taskCollaborators: { available }}) => ({ available });

TaskCollaborators = connect(mapStateToProps, {
    getTaskAvailableCollaborators,
    getTaskCollaborators
})(TaskCollaborators);

const validate = ({collaborators}) => !collaborators.length ? {collaborators: 'Please select collaborators to add'} : {};

export default reduxForm({
    form: 'add-collaborators',
    initialValues: {
        collaborators: []
    },
    validate
})(TaskCollaborators);
