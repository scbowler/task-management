import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import io from 'socket.io-client';
import Input from '../general/form/input';
import Message from '../cards/task/message';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            status: 'connecting...'
        }

        const { taskId } = props;

        this.socket = io(`/${taskId}`, {
            path: '/ws',
            query: {
                token: localStorage.getItem('taskToken')
            }
        });

        this.socket.on('connect', () => {
            this.updateStatus('connected');
        });

        this.socket.on('update-messages', ({messages}) => {
            this.setState({messages})
        });

        this.socket.open();
    }

    updateStatus(status = ''){
        this.setState({ status });
    }

    componentWillUnmount() {
        this.socket.close();
    }

    sendMessage = ({message}) => {
        this.socket.emit('new-message', {
            taskId: this.props.taskId,
            text: message
        });

        this.props.reset();
    }

    renderMessages(){
        const { messages } = this.state;

        if(!messages || !messages.length){
            return <h5 className="center">No Messages For This task</h5>;
        }

        return messages.map(({author, createdAt, message, pid}) => {
            return <Message key={pid} author={author} created={createdAt} message={message}/>
        });
    }

    render() {
        const { handleSubmit } = this.props;
        const { status } = this.state;

        return (
            <div className="col m8 s12 messages">
                <h5>Messages <small className="grey-text text-lighten-2">{status}</small></h5>
                <form onSubmit={handleSubmit(this.sendMessage)}>
                    <div className="row">
                        <Field name="message" label="New Message" component={Input} noError/>
                    </div>
                </form>
                {this.renderMessages()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'new-task-message'
})(Messages);
