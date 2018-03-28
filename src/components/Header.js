import React from 'react';
import {NavLink} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const Header = (props) => (
    <header>
        <h1>expensify</h1>
        <nav>
            <Menu pointing secondary>
                <Menu.Item as={NavLink} to="/" activeClassName="is-active" exact={true}>dashboard</Menu.Item>
                <Menu.Item as={NavLink} to="/create" activeClassName="is-active">create expense</Menu.Item>
            </Menu>
        </nav>
    </header>
);

export default Header;
