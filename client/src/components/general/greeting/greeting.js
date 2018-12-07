import React from 'react';
import { connect } from 'react-redux';
import './greeting.scss';

const Greeting = ({name}) => (
    <div className="row">
        <div className="col s4"></div>
        <div className="col s4 center">
            Project Name Here
        </div>
        <div className="col s4 right-align user-greeting">
            {name}
        </div>
    </div>
);

const mapStateToProps = ({user : {info}}) => (info.name ? {name: info.name} : {name: null});

export default connect(mapStateToProps)(Greeting);
