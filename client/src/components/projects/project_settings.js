import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectSettings, projectAddCollaborator, projectRemoveCollaborator } from '../../actions';
import Header from '../general/header';

class ProjectSettings extends Component {
    componentDidMount(){
        this.updateProjectSettings();
    }

    updateProjectSettings(){
        const { getProjectSettings, match: { params } } = this.props;

        return getProjectSettings(params.project_id);
    }

    async addCollaborator(userId){
        const { match: { params: { project_id } }, projectAddCollaborator } = this.props;
        
        await projectAddCollaborator(project_id, userId);

        this.updateProjectSettings();
    }

    async removeCollaborator(userId){
        const { match: { params: { project_id } }, projectRemoveCollaborator } = this.props;

        await projectRemoveCollaborator(project_id, userId);

        this.updateProjectSettings();
    }

    renderAvailableUsers(){
        const { availableUsers } = this.props.settings;

        if (!availableUsers) {
            return <h5 className="grey-text text-darken-3">Loading Available Users...</h5>;
        }
        if (!availableUsers.length) {
            return <h5 className="grey-text text-darken-3">No Available Users</h5>;
        }

        return (
            <ul className="collection">
                {
                    availableUsers.map(user => (
                        <li className="collection-item row" key={user.pid}>
                            <div className="col s10 user-info">{user.name} - {user.email}</div>
                            <div className="col s2 right-align">
                                <button onClick={() => this.addCollaborator(user.pid)} className="btn btn-small btn-floating green darken-2">
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }

    renderCollaborators(){
        const { collaborators } = this.props.settings;

        if(!collaborators){
            return <h5 className="grey-text text-darken-3">Loading Collaborators...</h5>;
        }
        if(!collaborators.length){
            return (
                <div>
                    <h5 className="grey-text text-darken-3">No Collaborators</h5>
                    <p className="grey-text text-darken-2">Add collaborators from the available users list below</p>
                </div>
            );
        }

        return (
            <ul className="collection">
                {
                    collaborators.map(user => (
                        <li className="collection-item row" key={user.pid}>
                            <div className="col s10 user-info">{user.name} - {user.email}</div>
                            <div className="col s2 right-align">
                                <button onClick={() => this.removeCollaborator(user.pid)} className="btn btn-small btn-floating red darken-2">
                                    <i className="material-icons">remove</i>
                                </button>
                            </div>
                        </li>
                    ))
                }  
            </ul>
        );
    }

    render(){
        const { project = {} } = this.props.settings;

        return (
            <div className="project-settings-container">
                <div className="project-settings-content">
                    <div className="row">
                        <Header>Project Settings</Header>
                    </div>
                    <div className="row center">
                        <h5>{project.name}</h5>
                        <p>{project.description}</p>
                    </div>
                    <div className="row">
                        <h4>Collaborators</h4>
                        {this.renderCollaborators()}
                    </div>
                    <div className="row">
                        <h4>Available Users</h4>
                        {this.renderAvailableUsers()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({projects}) => ({settings: projects.settings});

export default connect(mapStateToProps, {
    getProjectSettings,
    projectAddCollaborator,
    projectRemoveCollaborator
})(ProjectSettings);
