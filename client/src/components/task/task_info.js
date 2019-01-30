import React from 'react';

export default ({ createdAt, createdBy, list, name, project, updatedAt}) => (
    <div className="task-info no-mb-rows">
        <div className="row title">
            <h5 className="col s12">Info</h5>
        </div>
        <div className="row z-depth-2">
            <div className="col s4 right-align">
                <b>Project: </b>
            </div>
            <div className="col s8">
                {project}
            </div>
        </div>
        <div className="row z-depth-2">
            <div className="col s4 right-align">
                <b>List: </b>
            </div>
            <div className="col s8">
                {list}
            </div>
        </div>
        <div className="row z-depth-2">
            <div className="col s4 right-align">
                <b>Task: </b>
            </div>
            <div className="col s8">
                {name}
            </div>
        </div>
        <div className="row z-depth-2">
            <div className="col s4 right-align">
                <b>Created By: </b>
            </div>
            <div className="col s8">
                {createdBy}
            </div>
        </div>
        <div className="row z-depth-2">
            <div className="col s4 right-align">
                <b>Created: </b>
            </div>
            <div className="col s8">
                {new Date(createdAt).toLocaleString()}
            </div>
        </div>
        <div className="row z-depth-2">
            <div className="col s4 right-align">
                <b>Updated: </b>
            </div>
            <div className="col s8">
                {new Date(updatedAt).toLocaleString()}
            </div>
        </div>
    </div>
);
