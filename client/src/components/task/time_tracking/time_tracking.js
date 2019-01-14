import React, { Component, Fragment } from 'react';

class TimeTracking extends Component {
    render(){
        return (
            <Fragment>
                <div className="row">
                    <h5 className="col s12">Time Tracking</h5>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h4>0:00:00</h4>
                        <p>No Timer</p>
                    </div>
                    <div className="col s12">
                        <button className="btn waves-effect waves-light green darken-2">Start New Timer</button>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default TimeTracking;
