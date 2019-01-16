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

    handleStop = () => {
        console.log('Stop Timer');
        const { completeTimeTracking, taskId, trackingId } = this.props;

        completeTimeTracking(taskId, trackingId);
    }

    update = () => {
        this.setState({
            elapsed: this.getElapsed()
        });
    }

    render(){
        const { isOwner, user } = this.props;

        return (
            <div>
                <p className="right-align">{user}</p>
                <p className="center">{formatTime(this.state.elapsed)}</p>
                <p className="center">
                    {isOwner && <Button color="btn-small red darken-2" onClick={this.handleStop}>STOP</Button>}
                </p>
            </div>
        );
    }
}

export default connect(null, { completeTimeTracking })(ActiveTimer);
