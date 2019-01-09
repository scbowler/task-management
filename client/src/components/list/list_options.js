import React, { Component, Fragment } from 'react';

class ListOptions extends Component {
    state = {
        visible: false
    }

    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        const { visible } = this.state;
        
        return (
            <div className={`list-options ${visible ? 'visible' : ''}`}>
                <i onClick={this.toggleVisible} className="material-icons">more_vert</i>
                <ul className="list-options-menu z-depth-4">
                    <li>Change Color</li>
                    <li>Clear List</li>
                    <li>Delete List</li>
                </ul>
            </div>
        );
    }
}

export default ListOptions;
