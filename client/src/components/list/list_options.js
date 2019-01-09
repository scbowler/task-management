import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteList } from '../../actions';

class ListOptions extends Component {
    state = {
        visible: false
    }

    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    callAction(cb, ...args){
        if(typeof cb === 'function'){
            const { projectId, socket } = this.props;

            cb.apply(this, args);

            socket.emit('update-project', projectId);

            this.toggleVisible();
        }
    }

    render(){
        const { visible } = this.state;
        const { deleteList, isOwner, listId, projectId } = this.props;
        
        return (
            <div className={`list-options ${visible ? 'visible' : ''}`}>
                <i onClick={this.toggleVisible} className="material-icons">more_vert</i>
                <ul className="list-options-menu z-depth-4">
                    <li className="not-implemented">Change Color</li>
                    <li className="not-implemented">Clear List</li>
                    {
                        isOwner
                            ? <li onClick={() => this.callAction(deleteList, projectId, listId)}>Delete List</li>
                            : null
                    }
                    
                </ul>
            </div>
        );
    }
}

export default connect(null, {
    deleteList
})(ListOptions);
