import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import Header from '../../general/header';
import Input from '../../general/input';
import Modal from '../../general/modal';

class NewProjectCard extends Component {
    createNewProject = () => {
        console.log('Create New Project');
    }

    render() {
    
        const newCard = (
            <div className="project-card new-project" onClick={this.createNewProject}>
                <div className="card-title">New Project</div>
                <div className="new-project-contents">
                    <i className="material-icons">add</i>
                </div>
            </div>
        );

        return (
            <Modal openElement={newCard}>
                <Header>New Project</Header>

                <form>
                    <div className="row">
                        <Field size="s12 m8 offset-m2" name="name" label="Project Name" component={Input}/>
                        <Field size="s12 m8 offset-m2" name="description" label="Project Description" component={Input} />
                    </div>
                </form>
            </Modal>
        );
    }
}

export default reduxForm({
    form: 'new-project-error'
})(withRouter(NewProjectCard));
