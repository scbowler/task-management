import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../general/header';
import Card from '../cards/project';
import NewProject from '../cards/project/new_project';
import { getAllProjects } from '../../actions';
import './projects.scss';

class Projects extends Component {
    componentDidMount(){
        const { getAllProjects } = this.props;

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

        return list.map(project => <Card key={project.pid} {...project}/>);
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
    getAllProjects
})(Projects);
