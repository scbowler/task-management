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

        if(hasTimer) this.updateElapsed();
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    updateElapsed = () => {
        const { widget } = this.props;

        clearTimeout(this.timeout);

        if(!widget) return;

        if(widget.start){
            const elapsed = new Date().getTime() - widget.start;

            this.setState({elapsed});

            this.timeout = setTimeout(this.updateElapsed, 1000);
        }
    }

    isCurrent(idOf = 'task'){
        const { widget } = this.props;
        
        if(!widget) return false;

        const regex = new RegExp(`${idOf}\/([a-f0-9\-]{36})`);

        const [ , id = null] = location.pathname.match(regex) || [];

        return id && id === widget[idOf + 'Id'];
    }

    goToTask = () => {
        const { history, widget } = this.props;
        
        history.push(widget.link);
    }

    render(){
        const { widget } = this.props;
        
        if(!widget) return null;

        const isCurrentProject = this.isCurrent('projects');
        const isCurrentTask = this.isCurrent('task');

        return (
            <div onClick={this.goToTask} className={`center active-timer-widget z-depth-3 ${isCurrentProject === false ? 'not-project' : ''} ${isCurrentTask === false ? 'notice' : ''}`}>
                <div><small>{!isCurrentProject && 'NOT THIS PROJECT'}</small></div>
                <div className="task-name">{widget.task}</div>
                <div className="task-time">{formatTime(this.state.elapsed)}</div>
            </div>
        );
    }
}

const mapStateToProps = ({timeTracking: { widget }}) => ({ widget });

export default connect(mapStateToProps, { getUserRunningTimeTracking })(ActiveTimerWidget);
