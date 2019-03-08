import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTime } from '../../../../helpers/general';


class EditTime extends Component {
    state = { ...this.props.data }

    componentDidMount() {
        this.initDatepicker(this.startDateElem, "startTime");
        this.initDatepicker(this.endDateElem, "endTime");

        this.initTimepicker(this.startTimeElem, "startTime");
        this.initTimepicker(this.endTimeElem, "endTime");
        this.startTimeElem.value = this.state.startTime.toLocaleTimeString('en-US');
        this.endTimeElem.value = this.state.endTime.toLocaleTimeString('en-US');
    }

    initDatepicker = (elem, dateType) => {
        M.Datepicker.init(elem, {
            defaultDate: this.state[dateType],
            setDefaultDate: true,
            autoClose: true,
            onClose: this.updateTime,
        });
    }

    initTimepicker = (elem, timeType) => {
        M.Timepicker.init(elem, {
            defaultTime: this.state[timeType].toTimeString(),
            autoClose: true,
            onCloseEnd: this.updateTime,
        });
    }

    getField = (elem, type) => {
        return elem.value || (elem.classList.contains("datepicker") ? this.state[type].toDateString() : this.state[type].toTimeString());
    }

    generateDate = (dateField, timeField, dateType) => {
        return new Date(`${this.getField(dateField, dateType)} ${this.getField(timeField, dateType)}`);
    }

    updateTime = () => {
        const startTime = this.generateDate(this.startDateElem, this.startTimeElem, "startTime");
        const endTime = this.generateDate(this.endDateElem, this.endTimeElem, "endTime");
        const total = endTime.getTime() - startTime.getTime();

        this.setState({
            startTime,
            endTime,
            total,
        })
    }

    handleSubmit = () => {
        const { startTime, endTime, id } = this.state;

        const newTime = {
            startTime: startTime.getTime(),
            endTime: endTime.getTime(),
            id,
        }

        console.log(newTime); //data to be sent
    }

    render() {
        return (
            <div className="edit-time-container" onClick={this.props.closeEdit}>
                <div className="edit-time" onClick={e => e.stopPropagation()}>
                    <div className="total-time z-depth-2">{formatTime(this.state.total)}</div>
                    <div className="time-sections">
                        <h4 className="center">Began Working on Task</h4>
                        <div className="start-container">
                            <input type="text" className="datepicker center" placeholder="Select Date" ref={e => this.startDateElem = e} />
                            <input type="text" className="timepicker center" placeholder="Select Time" ref={e => this.startTimeElem = e} />
                        </div>
                        <h4 className="center">Stopped Working on Task</h4>
                        <div className="end-container">
                            <input type="text" className="datepicker center" placeholder="Select Date" ref={e => this.endDateElem = e} />
                            <input type="text" className="timepicker center" placeholder="Select Time" ref={e => this.endTimeElem = e} />
                        </div>
                        <div className="button-container d-flex justify-content-around">
                        <button className="waves-effect waves-light btn red accent-2" onClick={this.props.closeEdit} >Cancel</button>
                        <button className="waves-effect waves-light btn orange accent-2" onClick={this.handleSubmit} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default EditTime;
