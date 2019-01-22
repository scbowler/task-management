import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRunningTimeTracking } from '../../../../actions';
import { formatTime } from '../../../../helpers';
import './widget.scss';

class ActiveTimerWidget extends Component {
    state = {
        elapsed: 0
    }

    async componentDidMount(){
        const hasTimer = await this.props.getUserRunningTimeTracking();

        if(hasTimer) this.updateElapsed()
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    updateElapsed = () => {
        const { start } = this.props.widget;

        console.log('Update Called');

        clearTimeout(this.timeout);

        if(start){
            const elapsed = new Date().getTime() - start;

            this.setState({elapsed});

            this.timeout = setTimeout(this.updateElapsed, 1000);
        }
    }

    render(){
        const { widget } = this.props;
        console.log('Widget Data:', widget);
        
        if(!widget) return null;

        return (
            <div className="active-timer-widget">
                {widget.task}
                <span> {widget.start}</span>
            </div>
        );
    }
}

const mapStateToProps = ({timeTracking: { widget }}) => ({ widget });

export default connect(mapStateToProps, { getUserRunningTimeTracking })(ActiveTimerWidget);
