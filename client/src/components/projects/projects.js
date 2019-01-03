import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Header from '../general/header';
import Project from '../cards/project';
import NewProject from '../cards/project/new_project';
import { clearProject, getAllProjects } from '../../actions';
import './projects.scss';

class Projects extends Component {
    constructor(props){
        super(props);

        console.log('Props:', props.userPid);

        this.socket = io(`/projects-${props.userPid}`, {
            path: '/ws',
            query: {
                token: localStorage.getItem('taskToken')
            }
        });

        this.socket.on('connect', () => {
            console.log('Connected for project updates');
        });

        this.socket.on('update-projects', () => {
            console.log('Notified to update project list');
            props.getAllProjects();
        });
    }

    componentWillUnmount(){
        this.socket.off();
    }

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

const mapStateToProps = ({projects: { list }, user: { info }}) => ({list, userPid: info.pid});

export default connect(mapStateToProps, {
    clearProject,
    getAllProjects
})(Projects);
