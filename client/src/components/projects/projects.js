import React, { Component } from 'react';
import Header from '../general/header';
import Card from '../cards/project';
import NewProject from '../cards/project/new_project';
import './projects.scss';

const cards = [
    {
        name: 'Day to Day',
        description: 'Daily LearningFuze task including, lectures, student help, mentoring, etc',
        id: '001'
    },
    {
        name: 'New Portal',
        description: 'New student portal for managing enrollments, classes, and material',
        id: '002'
    },
    {
        name: 'Task Management',
        description: 'LearningFuze task management system for task and time tracking',
        id: '003'
    },
    {
        name: 'LFZ Website',
        description: 'Main public facing LearningFuze website',
        id: '004'
    }
]

class Projects extends Component {
    renderProjects(){
        // const { cards } = this.props;

        if(!cards){
            return <h5 className="center">Projects Loading...</h5>;
        }

        if(!cards.length){
            return <h5 className="center">No Current Projects</h5>
        }

        return cards.map(project => <Card key={project.id} {...project}/>);
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

export default Projects;
