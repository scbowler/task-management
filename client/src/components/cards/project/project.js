import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './project.scss';

class ProjectCard extends Component {
    goToProject = () => {
        const { history, match, pid } = this.props;

        history.push(`${match.path}/${pid}`);
    }

    deleteProject = (e) => {
        e.stopPropagation();
        console.log('Delete Project:', this.props.pid);
    }

    render(){
        const { description, name, user } = this.props;

        return (
            <div className="project-card" onClick={this.goToProject}>
                <div className="card-title">{name}</div>
                <div className="card-contents">{description}</div>
                <div className="card-footer" onClick={this.deleteProject}><i className="material-icons">delete</i></div>
                <div className="created-by"><small><span>Created By:</span> {user}</small></div>
            </div>
        );
    }
}

export default withRouter(ProjectCard);
