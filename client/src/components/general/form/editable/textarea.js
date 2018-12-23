import React, { Component } from 'react';
import './editable.scss';

class EditText extends Component {
    state = {
        editable: false,
        value: ''
    }

    componentDidUpdate({content: prevContent}, {editable: prevEditable}){
        const { content } = this.props;
        const { editable } = this.state;

        if(prevContent !== content){
            this.setState({
                value: content
            });
        }

        if(!prevEditable && editable){
            this.textarea.focus();
        }
    }

    cancel = () => {
        this.setState({
            editable: false,
            value: this.props.content
        });
    }

    sendData = async e => {
        e.preventDefault();

        const { send } = this.props;
        const { value } = this.state;

        if(value){
            console.log('Send Data:', value);

            if(typeof send === 'function'){
                await send(value);

                this.setEditable(false);
            }
        }
    }

    keyboardSubmit = e => {
        if(e.key === 'Enter' && e.shiftKey){
            // e.preventDefault();
            
            this.sendData(e);
        }
    }

    setEditable = editable => this.setState({editable});

    toggleEditable = () => this.setEditable(!this.state.editable);

    render(){
        const { defaultContent, className, content } = this.props;
        const { editable, value } = this.state;

        if(editable){
            return (
                <div className="edit-text-container input-field">
                    <div className="handle-close" onClick={this.cancel}/>
                    <form className="edit-text-form" onSubmit={this.sendData}>
                        <textarea onKeyPress={this.keyboardSubmit} ref={e => this.textarea = e} onChange={({ target }) => this.setState({ value: target.value })} className={`materialize-textarea ${className || ''}`} type="text" value={value || ''} />
                        <div className="right">
                            <small>Shift &#43; Enter to Submit</small>
                        </div>
                        <div className="input-buttons">
                            <button className="btn btn-floating red" type="button" onClick={this.cancel}>
                                <i className="material-icons">clear</i>
                            </button>
                            <button className="btn btn-floating green">
                                <i className="material-icons">done</i>
                            </button>
                        </div>
                    </form>
                </div>
            )
        }

        return <p onClick={this.toggleEditable} className={`edit-text-content ${className || ''}`}>{content || defaultContent || 'Click to edit'}</p>;
    }
}

export default EditText;
