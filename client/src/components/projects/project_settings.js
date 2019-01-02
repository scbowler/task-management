import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectSettings } from '../../actions';
import Header from '../general/header';

class ProjectSettings extends Component {
    componentDidMount(){
        const { getProjectSettings, match: { params } } = this.props;

        getProjectSettings(params.project_id);
    }

    render(){
        return (
            <div className="project-settings-container">
                <div className="project-settings-content">
                    <Header>Project Settings</Header>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    getProjectSettings
})(ProjectSettings);
