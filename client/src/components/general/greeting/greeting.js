import React from 'react';
import { connect } from 'react-redux';
import './greeting.scss';

const Greeting = ({name}) => <p className="user-greeting right-align">{name}</p>;

const mapStateToProps = ({user : {info}}) => (info.name ? {name: info.name} : {name: null});

export default connect(mapStateToProps)(Greeting);
