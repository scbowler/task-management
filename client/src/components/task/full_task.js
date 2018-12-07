import React, { Component } from 'react';
import Header from '../general/header';

class FullTask extends Component {
    close = () => {
        const { history, match: { params } } = this.props;
        
        history.push(`/projects/${params.project_id}`);
    }

    render(){
        return (
            <div onClick={this.close} className="full-task">
                <div className="task-contents">
                    <Header>Task Name Here</Header>
                </div>
            </div>
        );
    }
}

export default FullTask;
