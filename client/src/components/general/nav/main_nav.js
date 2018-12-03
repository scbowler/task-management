import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { accountSignOut } from '../../../actions';
import SideNav from './side_nav';
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
            M.Sidenav.init(this.state.sideNavRef);
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

    makeLink({ to, name }) {
        return (
            <li key={to}>
                <Link className="main-text" to={to}>{name}</Link>
            </li>
        );
    }

    signOutElement() {
        return (
            <li key="/sign-out" className="center">
                <button onClick={this.props.accountSignOut} className="btn blue lighten-2">Sign Out</button>
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
        return (
            <Fragment>
                <nav className="main-nav grey darken-4">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo main-text">TM</Link>
                        <a href="#" data-target="side-nav" className="sidenav-trigger"><i className="material-icons main-text">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>

                <SideNav setRef={this.setSideNavRef} renderLinks={this.renderLinks} />
            </Fragment>

        );
    }
}

const mapStateToProps = ({user}) => ({ auth: user.auth });

export default connect(mapStateToProps, { accountSignOut })(Nav);