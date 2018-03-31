import React from 'react';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';

const HeaderNav = ({ startLogOut }) => (
    <header>
        <nav>
            <Menu pointing secondary>
                <Menu.Item as={NavLink} to="/dashboard" activeClassName="is-active" exact={true}>dashboard</Menu.Item>
                <Menu.Item as={NavLink} to="/create" activeClassName="is-active">create expense</Menu.Item>
                <Menu.Item position="right" onClick={startLogOut}>log out</Menu.Item>
            </Menu>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(HeaderNav);
