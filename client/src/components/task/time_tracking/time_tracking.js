import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../../../helpers';
import { clearWidget, completeTimeTracking, getTaskTimeTracking, newTimeTracking } from '../../../actions';
import ActiveTimer from './active_timer';
import Button from '../../general/button';
import './time_tracking.scss';

class TimeTracking extends Component {
    state = {
        currentAccruing: 0,
        hasActive: true
    }

    updateAccruing = () => {
        const { running } = this.props;
        let currentAccruing = 0;
        let hasActive = false;

        clearTimeout(this.timeout);

        if(running.length){
            running.map(timer => {
                if(timer.isOwner){
                    hasActive = true;
                }
                currentAccruing += new Date().getTime() - timer.start;
            });

            this.timeout = setTimeout(this.updateAccruing, 1000 / running.length);
        }

        this.setState({ currentAccruing, hasActive });
    }

    componentDidMount(){
        this.getTracking();

        this.props.socket.on('time-tracking-update', () => {
            this.getTracking();
        });
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    async getTracking(){
        await this.props.getTaskTimeTracking(this.props.taskId);

        this.updateAccruing();
    }

    createNewTimeTracking = async () => {
        const { clearWidget, newTimeTracking, socket, taskId } = this.props;

        clearWidget();

        await newTimeTracking(taskId);

        socket.emit('time-tracking-update', taskId);

        this.getTracking();
    }

    stopActiveTimer = async trackingId => {
        const { clearWidget, completeTimeTracking, listId, projectId, projectSocket, socket, taskId } = this.props;

        clearWidget();

        await completeTimeTracking(taskId, trackingId);

        socket.emit('time-tracking-update', taskId);

        projectSocket.emit('update-lists', { lists: [listId], projectId });

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
            return <ActiveTimer isOwner={timer.isOwner} key={timer.start} start={timer.start} stop={this.stopActiveTimer} taskId={taskId} trackingId={timer.pid} user={timer.user}/>
        });
    }

    render(){
        const { total } = this.props;
        const { currentAccruing, hasActive } = this.state;

        return (
            <div className="time-tracking">
                <div className="row">
                    <h5 className="col s12">Time Tracking</h5>
                </div>
                <div className="row time-tracking-display">
                    <div className="col s12 total-tracked">
                        <h6>Total Tracked Time</h6>
                        <div className="total-time z-depth-2">{formatTime(total + currentAccruing)}</div>
                    </div>
                    <div className="col s12 time-action">
                        { !hasActive && <Button onClick={this.createNewTimeTracking} color="btn-small green darken-2">Start New Timer</Button> }
                    </div>
                </div>
                <div className="row time-tracking-active">
                    <div className="col s12">
                        <h6>Active Timers</h6>
                        {this.renderActiveTimers()}
                    </div>
                </div>
            </div>
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
    clearWidget,
    completeTimeTracking,
    getTaskTimeTracking,
    newTimeTracking
})(TimeTracking);
