import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../../../helpers';
import { getTaskTimeTracking, newTimeTracking } from '../../../actions';
import ActiveTimer from './active_timer';

class TimeTracking extends Component {
    state = {
        currentAccruing: 0
    }

    updateAccruing = () => {
        const { running } = this.props;
        let totalAccruing = 0;

        clearTimeout(this.timeout);

        if(running.length){
            running.map(timer => {
                totalAccruing += new Date().getTime() - timer.start;
            });

            this.setState({
                currentAccruing: totalAccruing
            });

            setTimeout(this.updateAccruing, 1000 / running.length);
        }
    }

    componentDidMount(){
        this.getTracking();
    }

    async getTracking(){
        await this.props.getTaskTimeTracking(this.props.taskId);

        this.updateAccruing();
    }

    createNewTimeTracking = async () => {
        const { newTimeTracking, taskId } = this.props;

        await newTimeTracking(taskId);

        this.getTracking();
    }

    renderActiveTimers(){
        const { running, taskId } = this.props;

        if(!running) {
            return <p>Loading Active Timers...</p>
        }

        if(!running.length){
            return <p>No Active Timers</p>
        }

        return running.map( timer => {
            return <ActiveTimer isOwner={timer.isOwner} key={timer.start} start={timer.start} taskId={taskId} trackingId={timer.pid} user={timer.user}/>
        });
    }

    render(){
        const { total } = this.props;
        const { currentAccruing } = this.state;

        return (
            <Fragment>
                <div className="row">
                    <h5 className="col s12">Time Tracking</h5>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h4>{formatTime(total + currentAccruing)}</h4>
                    </div>
                    <div className="col s12">
                        <button onClick={this.createNewTimeTracking} className="btn btn-small waves-effect waves-light green darken-2">Start New Timer</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {this.renderActiveTimers()}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({timeTracking: { completed, running, total }}) => {
    return {
        completed,
        running,
        total
    }
}

export default connect(mapStateToProps, {
    getTaskTimeTracking,
    newTimeTracking
})(TimeTracking);
