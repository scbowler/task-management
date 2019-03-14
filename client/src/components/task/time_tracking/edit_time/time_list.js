import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTaskTimesList } from '../../../../actions';
import { formatTime } from '../../../../helpers/general';
import Loading from '../../../general/loading';
import SingleTime from './single_time';
import EditTime from './edit_time';
import './edit_time.scss'
class TimeList extends Component {
    state = {
        editTimeData: {},
        isEditing: false
    }

    componentDidMount = async () => {
        this.props.getTaskTimesList(this.props.taskId);
    }

    processTimes = () => {
        return this.props.times.map(item => {
            return <SingleTime {...item} startTime={new Date(item.startTime)} endTime={new Date(item.endTime)}  key={`${item.ownerId}${item.startTime}`} triggerEdit={this.triggerEdit} />
        });
    }

    triggerEdit = timeInfo => {
        this.setState({
            isEditing: true,
            editTimeData: timeInfo
        });
    }

    closeEdit = () => {
        this.setState({isEditing: false});
    }

    render() {
        const { isEditing, editTimeData } = this.state;
        const { close, total, times } = this.props;
        if (!times.length) return <Loading />;

        return (
            <div className="time-list-container" onClick={close}>
                <div className="time-list" onClick={e => e.stopPropagation()}>
                    <div className="total-time z-depth-2">{formatTime(total)}</div>
                    <table className="full-width">
                        <thead>
                            <tr>
                                <th>Start</th>
                                <th>End</th>
                                <th>Total</th>
                                <th>Owner / Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.processTimes()}
                        </tbody>
                    </table>
                    { isEditing ? <EditTime data={editTimeData} closeEdit={this.closeEdit} /> : null }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        times: state.timeTracking.times,
    }
}

export default connect(mapStateToProps, { getTaskTimesList })(TimeList)
