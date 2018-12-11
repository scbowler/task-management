import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { clearProjectErrors, createNewProject } from '../../../actions';
import Button from '../../general/button';
import Header from '../../general/header';
import Input from '../../general/form/input';
import Modal from '../../general/modal';

class NewProjectCard extends Component {
    state = {
        cancelRef: null
    }

    createNewProject = async (values) => {
        const { createNewProject, history, match: { path } } = this.props;

        const pid = await createNewProject(values);

        if(pid){
            history.push(`${path}/${pid}`);
        }
    }

    resetNewProjectForm = () => {
        const { clearProjectErrors, reset } = this.props;

        clearProjectErrors();
        reset();
    }

    render() {
        const { createErrors, handleSubmit } = this.props;
    
        const newCard = (
            <div className="project-card new-project">
                <div className="card-title">New Project</div>
                <div className="new-project-contents">
                    <i className="material-icons">add</i>
                </div>
            </div>
        );

        return (
            <Modal cancel={this.resetNewProjectForm} cancelRef={this.state.cancelRef} openElement={newCard}>
                <Header>New Project</Header>

                <form className="row" onSubmit={handleSubmit(this.createNewProject)}>
                    <div className="col s12 m8 offset-m2">
                        <div className="row">
                            <Field size="s12 m8 offset-m2" name="name" label="Project Name" component={Input} />
                            <Field size="s12 m8 offset-m2" name="description" label="Project Description" component={Input} />
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <Button getRef={e => this.setState({ cancelRef: e })} color="orange darken-4" id="close-modal" type="button">Cancel</Button>
                            </div>
                            <div className="col s6">
                                <Button>Create Project</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 right-align">
                                {createErrors.map( err => (
                                    <p key={err} className="orange-text text-darken-3">{err}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        );
    }
}

const mapStateToProps = ({projects: {createErrors}}) => ({createErrors});

export default connect(mapStateToProps, {
    clearProjectErrors,
    createNewProject
})(reduxForm({
    form: 'new-project-error'
})(withRouter(NewProjectCard)));
