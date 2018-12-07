import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '../list';
import Blank from '../general/blank';
import lazyLoad from '../../hoc/lazy_load';
import { getProject } from '../../actions';
import './projects.scss';


const lists = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
]

class FullProject extends Component {
    listWidth = 266

    state = {
        containerWidth: '100vw'
    }

    updateWidth(){
        let width = this.listWidth;

        if(lists && lists.length){
            width += lists.length * this.listWidth;
        }

        this.setState({containerWidth: width});
    }

    async componentDidMount(){
        const { getProject, match: { params } } = this.props;

        await getProject(params.project_id);

        this.updateWidth();
    }

    renderLists(){
        // const { lists } = this.props;

        if(!lists || !lists.length) return null;

        return lists.map(list => <List key={list}/>)
    }

    render(){
        const { containerWidth } = this.state
        const { match: { path } } = this.props;

        console.log('Full Project Props:', this.props);

        return (
            <div className="project-view"> 
                <div style={{width: containerWidth}} className="project-content">
                    {this.renderLists()}
                    <List/>
                </div>
                <Route path={`${path}/task/:task_id`} component={
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

export default connect(null, {
    getProject
})(FullProject);
