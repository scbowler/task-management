import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../../../helpers';
import { completeTimeTracking } from '../../../actions';
import Button from '../../general/button';

class ActiveTimer extends Component {
    state = {
        elapsed: this.getElapsed()
    }

    componentDidMount(){
        this.interval = setInterval(this.update, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    getElapsed(){
        return new Date().getTime() - this.props.start;
    }

    handleStop = async () => {
        const { stop, trackingId } = this.props;

        clearInterval(this.interval);

        stop(trackingId);
    }

    update = () => {
        this.setState({
            elapsed: this.getElapsed()
        });
    }

    render(){
        const { isOwner, user } = this.props;

        return (
            <div className="active-timer z-depth-2">
                <div className="right-align">{user}</div>
                <div className="time">{formatTime(this.state.elapsed)}</div>
                <div className="center">
                    {isOwner && <Button color="btn-small red darken-2" onClick={this.handleStop}>STOP</Button>}
                </div>
            </div>
        );
    }
}

export default connect(null, { completeTimeTracking })(ActiveTimer);
