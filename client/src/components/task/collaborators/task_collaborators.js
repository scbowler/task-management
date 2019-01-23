import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { getTaskAvailableCollaborators } from '../../../actions';
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
        const { getTaskAvailableCollaborators, taskId } = this.props;

        getTaskAvailableCollaborators(taskId);
    }

    render(){
        const { handleSubmit } = this.props;

        const options = [
            {
                text: 'Test 1',
                value: 't1'
            },
            {
                text: 'Test 2',
                value: 't2'
            },
            {
                text: 'Test 3',
                value: 't3'
            },
            {
                text: 'Test 4',
                value: 't4'
            }
        ]

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
                        options={options}
                    />
                    <div className="col s12">
                        <Button>Add Collaborators</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

TaskCollaborators = connect(mapStateToProps, {
    getTaskAvailableCollaborators
})(TaskCollaborators);

const validate = ({collaborators}) => !collaborators.length ? {collaborators: 'Please select collaborators to add'} : {};

export default reduxForm({
    form: 'add-collaborators',
    initialValues: {
        collaborators: []
    },
    validate
})(TaskCollaborators);
