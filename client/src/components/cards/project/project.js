import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './project.scss';

class ProjectCard extends Component {
    goToProject = () => {
        console.log('Go to project:', this.props.id);
    }

    deleteProject = (e) => {
        e.stopPropagation();
        console.log('Delete Project:', this.props.id);
    }

    render(){
        const { description, name } = this.props;

        return (
            <div className="project-card" onClick={this.goToProject}>
                <div className="card-title">{name}</div>
                <div className="card-contents">{description}</div>
                <div className="card-footer" onClick={this.deleteProject}><i className="material-icons">delete</i></div>
            </div>
        );
    }
}

export default withRouter(ProjectCard);
