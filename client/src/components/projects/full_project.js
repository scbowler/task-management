import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import io from '../../socket';
import ActiveTimerWidget from '../task/time_tracking/widget';
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

        this.socket.on('update-lists', ({lists, projectId}) => {
            lists.map(listId => getProjectListTasks(projectId, listId));
        });

        this.socket.on('update-project', this.updateProject);
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
        const { lists, listToUpdate } = this.props;

        if(!lists || !lists.length) return null;

        return (
            <Fragment>
                {
                    lists.map(list => (
                        <Fragment key={list.pid}>
                            <ListDropTarget updateProject={this.updateProject} nextListId={list.pid} />
                            <List {...list} shouldUpdate={listToUpdate === list.pid} />
                        </Fragment>
                    ))
                }
                <ListDropTarget updateProject={this.updateProject} nextListId="end"/>
            </Fragment>
        )
    }

    render(){
        const { containerWidth } = this.state
        const { history, match: { path, params } } = this.props;

        return (
            <div className="project-view">
                <div style={{width: containerWidth}} className="project-content">
                    {this.renderLists()}
                    <CreateList getProject={this.updateProject} projectId={params.project_id} />
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
                        name: 'project_full_task'
                    })
                }/>
                <ActiveTimerWidget history={history}/>
            </div>
        );
    }
}

const mapStateToProps = ({tasks, user}) => ({
    lists: tasks.lists,
    listToUpdate: tasks.listToUpdate,
    redirect: user.redirect
});

export default connect(mapStateToProps, {
    getProject,
    getProjectListTasks
})(FullProject);
