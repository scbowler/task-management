import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProjectCard extends Component {
    goToProject = () => {
        console.log('Go to project:', this.props.id)
    }

    render(){
        const { name } = this.props;

        return (
            <div className="project-card" onClick={this.goToProject}>
                <p>{name}</p>
            </div>
        );
    }
}

export default withRouter(ProjectCard);
