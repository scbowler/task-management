import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createNewProjectList } from '../../actions';
import Input from '../general/form/input';

class CreateList extends Component {
    state = {
        showForm: false
    }

    toggleShow = () => this.setState({showForm: !this.state.showForm});

    handleCreateList = async ({listName}) => {
        const { createNewProjectList, getProject, projectId, socket } = this.props;

        await createNewProjectList(projectId, listName);

        socket.emit('update-project', projectId);

        getProject(projectId);

        this.cancel();
    }

    cancel = () => {
        this.props.reset();
        this.setState({ showForm: false });
    }

    render(){
        const { showForm } = this.state;
        const { handleSubmit } = this.props;

        return (
            
            <div className="task-list create-list z-depth-1">
                <div onClick={this.cancel} className={`create-list-close ${showForm ? 'open' : ''}`}/>
                
                <div onClick={this.toggleShow} className="create-list-btn">
                    <i className="material-icons">add</i> Add New List
                </div>
                <div className={`create-list-form ${showForm ? '' : 'no-show'}`}>
                    <form onSubmit={handleSubmit(this.handleCreateList)}>
                        <Field name="listName" label="List Name" component={Input} noError />
                        <div className="center">
                            <button className="btn btn-floating waves-effect waves-light yellow darken-3"><i className="material-icons">add</i></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    createNewProjectList
})(reduxForm({
    form: 'add-list'
})(CreateList));
