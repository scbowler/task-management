import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { accountSignOut } from '../../../actions';
import SideNav from './side_nav';
import SubNav from './sub_nav';
import './nav.scss';

class Nav extends Component {
    state = {
        links: [
            { to: '/', name: 'Home' },
        ],
        guestLinks: [
            { to: '/account/sign-in', name: 'Sign In' },
            { to: '/account/sign-up', name: 'Sign Up' }
        ],
        userLinks: [
            { to: '/projects', name: 'Projects' },
            { to: '/account/profile', name: 'Profile' }
        ],
        sideNavRef: null
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.sideNavRef && !prevState.sideNavRef) {
            this.instance = M.Sidenav.init(this.state.sideNavRef);
        }
    }

    setSideNavRef = e => {
        const { sideNavRef } = this.state;

        if (!sideNavRef) {
            this.setState({
                sideNavRef: e
            });
        }
    }

    linkClick = () => {
        if (this.instance.isOpen){
            this.instance.close();
        }
    }

    makeLink = ({ to, name }) => {
        return (
            <li key={to} onClick={this.linkClick}>
                <Link className="main-text" to={to}>{name}</Link>
            </li>
        );
    }

    signOutElement() {
        return (
            <li key="/sign-out" className="center">
                <button onClick={this.props.accountSignOut} className="btn yellow darken-3">Sign Out</button>
            </li>
        );
    }

    renderLinks = () => {
        const { auth } = this.props;
        const { links, guestLinks, userLinks } = this.state;

        let linkElements = links.map(this.makeLink);

        if (auth) {
            return [...linkElements, ...userLinks.map(this.makeLink), this.signOutElement()];
        }

        return [...linkElements, ...guestLinks.map(this.makeLink)];
    }

    render() {
        const { auth, location, projectName, projectOwner, userName } = this.props;

        return (
            <Fragment>
                <div className="navbar-fixed">
                    <nav className="main-nav grey darken-4">
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo main-text">iTask</Link>
                            <a href="#" data-target="side-nav" className="sidenav-trigger"><i className="material-icons main-text">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                {this.renderLinks()}
                            </ul>
                        </div>
                    </nav>
                </div>
                {auth && <SubNav name={userName} path={location.pathname} project={projectName} projectOwner={projectOwner} />}

                <SideNav setRef={this.setSideNavRef} renderLinks={this.renderLinks} />
            </Fragment>

        );
    }
}

const mapStateToProps = ({projects, user: { auth, info: { name } } }) => {
    return { 
        auth,
        projectName: projects.currentName,
        projectOwner: projects.isOwner,
        userName: name
    }
};

export default connect(mapStateToProps, { accountSignOut })(withRouter(Nav));