import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../general/header';
import Project from '../cards/project';
import NewProject from '../cards/project/new_project';
import { clearProject, getAllProjects } from '../../actions';
import './projects.scss';

class Projects extends Component {
    componentDidMount(){
        const { clearProject, getAllProjects } = this.props;

        clearProject();
        
        getAllProjects();
    }

    renderProjects(){
        const { list } = this.props;

        if(!list){
            return <h5 className="center">Projects Loading...</h5>;
        }

        if(!list.length){
            return <h5 className="center">No Current Projects</h5>
        }

        return list.map(project => <Project key={project.pid} {...project}/>);
    }

    render(){
        return (
            <div className="container">
                <Header>Projects</Header>
                <div className="projects-container">
                    {this.renderProjects()}
                    <NewProject/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({projects: { list }}) => ({list})

export default connect(mapStateToProps, {
    clearProject,
    getAllProjects
})(Projects);
