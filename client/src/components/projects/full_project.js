import React, { Component } from 'react';
import Header from '../general/header';

class FullProject extends Component {
    componentDidMount(){
        const { match: { params } } = this.props;

        console.log('Viewing Project:', params.project_id);
    }

    render(){
        return (
            <div>
                <Header>Full Project View</Header>
            </div>
        );
    }
}

export default FullProject;
