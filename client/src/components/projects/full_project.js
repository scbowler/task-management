import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import io from '../../socket';
import CreateList from '../list/create_list';
import Blank from '../general/blank';
import List from '../list';
import ListDropTarget from '../general/drop/list_target';
import lazyLoad from '../../hoc/lazy_load';
import { getProject, getProjectListTasks } from '../../actions';
import './projects.scss';

class FullProject extends Component {
    constructor(props){
        super(props);

        this.listWidth = 266

        this.state = {
            containerWidth: '4000px'
        }

        const { getProjectListTasks, match: { params } } = props;

        this.socket = io(`/project-${params.project_id}`);

        // this.socket.on('connect', () => {
        //     // set live flag here
        //     console.log('Connected for project updates');
        // });

        this.socket.on('update-lists', ({lists, projectId}) => {
            lists.map(listId => getProjectListTasks(projectId, listId));
        });

        this.socket.on('update-project', () => {
            this.updateProject();
        });
    }

    componentWillUnmount(){
        this.socket.off();
    }

    updateWidth(){
        const { lists } = this.props;
        let width = this.listWidth * 2;

        if(lists && lists.length){
            width += lists.length * this.listWidth;
        }

        this.setState({containerWidth: width});
    }

    componentDidMount(){
        this.updateProject();
    }

    updateProject = async () => {
        const { getProject, match: { params } } = this.props;

        const success = await getProject(params.project_id);

        if (success) this.updateWidth();
    }

    renderLists(){
        const { getProject, lists, listToUpdate } = this.props;

        if(!lists || !lists.length) return null;

        const dropProps = {
            getProject,
            socket: this.socket
        };

        return (
            <Fragment>
                {
                    lists.map(list => (
                        <Fragment key={list.pid}>
                            <ListDropTarget {...dropProps} nextListId={list.pid} />
                            <List {...list} shouldUpdate={listToUpdate === list.pid} socket={this.socket} />
                        </Fragment>
                    ))
                }
                <ListDropTarget {...dropProps} nextListId="end"/>
            </Fragment>
        )
    }

    render(){
        const { containerWidth } = this.state
        const { match: { path, params } } = this.props;

        return (
            <div className="project-view">
                <div style={{width: containerWidth}} className="project-content">
                    {this.renderLists()}
                    <CreateList getProject={this.updateProject} projectId={params.project_id} socket={this.socket}/>
                </div>
                <Route path={`${path}/settings`} component={
                    lazyLoad({
                        load: () => import('./project_settings'),
                        loading: <Blank/>,
                        name: 'project_settings'
                    })
                }/>
                <Route exact path={`${path}/task/:task_id`} component={
                    lazyLoad({
                        load: () => import('../task'),
                        loading: <Blank/>,
                        name: 'project_full_task',
                        props: {projectSocket: this.socket}
                    })
                }/>
            </div>
        );
    }
}

const mapStateToProps = ({projects, tasks, user}) => ({
    lists: tasks.lists,
    listToUpdate: tasks.listToUpdate,
    redirect: user.redirect
});

export default connect(mapStateToProps, {
    getProject,
    getProjectListTasks
})(FullProject);
