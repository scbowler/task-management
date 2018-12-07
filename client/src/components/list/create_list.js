import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/form/input';

class CreateList extends Component {
    state = {
        showForm: false
    }

    toggleShow = () => this.setState({showForm: !this.state.showForm});

    handleCreateList = ({listName}) => {
        console.log('Create new list with name:', listName);

        const { reset } = this.props;

        this.toggleShow();
        reset();
    }

    cancel = () => {
        this.props.reset();
        this.setState({ showForm: false });
    }

    render(){
        const { showForm } = this.state;
        const { handleSubmit } = this.props;

        return (
            
            <div className="task-list create-list">
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

export default reduxForm({
    form: 'add-list'
})(CreateList);
