import React, { Component, Fragment } from 'react';
import Button from '../button';
import './modal.scss';

class Modal extends Component {
    state = {
        isOpen: false
    }

    open = () => this.setState({ isOpen: true });
    close = () => this.setState({ isOpen: false });

    render(){
        const defaultOpen = <Button onClick={this.open}>{this.props.text || 'Open'}</Button>;
        
        const { isOpen } = this.state;
        let { children, openElement = defaultOpen } = this.props;

        if(isOpen){
            return (
                <Fragment>
                    <div className="modal-container" onClick={this.close}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            {children}
                        </div>
                    </div>
                    {openElement}
                </Fragment>
            );
        }

        return (
            <span onClick={this.open}>
                {openElement}
            </span>
        );
    }
}

export default Modal;
