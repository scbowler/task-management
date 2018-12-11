import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateList from '../list/create_list';
import Blank from '../general/blank';
import List from '../list';
import lazyLoad from '../../hoc/lazy_load';
import { getProject } from '../../actions';
import './projects.scss';

class FullProject extends Component {
    listWidth = 266

    state = {
        containerWidth: '100vw'
    }

    updateWidth(){
        const { lists } = this.props;
        let width = this.listWidth;

        if(lists && lists.length){
            width += lists.length * this.listWidth;
        }

        this.setState({containerWidth: width});
    }

    async componentDidMount(){
        const { getProject, match: { params } } = this.props;

        await getProject(params.project_id);
    }

    componentDidUpdate({lists: prevLists}){
        const { lists } = this.props;

        if((!prevLists && lists) || (prevLists.length !== lists.length)){
            this.updateWidth();
        }
    }

    renderLists(){
        const { lists } = this.props;

        if(!lists || !lists.length) return null;

        return lists.map(list => <List key={list.pid} {...list}/>);
    }

    render(){
        const { containerWidth } = this.state
        const { getProject, match: { path, params } } = this.props;

        return (
            <div className="project-view"> 
                <div style={{width: containerWidth}} className="project-content">
                    {this.renderLists()}
                    <CreateList getProject={getProject} projectId={params.project_id}/>
                </div>
                <Route exact path={`${path}/task/:task_id`} component={
                    lazyLoad({
                        load: () => import('../task'),
                        loading: <Blank/>,
                        name: 'project_full_task'
                    })
                }/>
            </div>
        );
    }
}

const mapStateToProps = ({tasks}) => ({ lists: tasks.lists });

export default connect(mapStateToProps, {
    getProject
})(FullProject);
