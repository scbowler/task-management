import React, {Component} from 'react';
import {connect} from 'react-redux';
import { formatTime } from '../../../../helpers/general';
import Button from '../../../general/button';
import Badge from '../../../general/badge';

class SingleTime extends Component {

    handleEdit = () => {
        // open EditTime component's modal
        const { startTime, endTime, total, owner: {id} } = this.props;
        const timeInfo = {
            startTime,
            endTime,
            id,
            total,
        }
        this.props.triggerEdit(timeInfo);
    }

    render(){
        const { startTime, endTime, isOwner, owner, total } = this.props;
        return (
            <tr>
                <td>{startTime.toLocaleTimeString('en-US')}</td>
                <td>{endTime.toLocaleTimeString('en-US')}</td>
                <td>{formatTime(total)}</td>
                <td>{isOwner ? <Button onClick={this.handleEdit}>Edit</Button> : <Badge small {...owner} />}</td>
            </tr>
        )
    }
}

export default SingleTime;
