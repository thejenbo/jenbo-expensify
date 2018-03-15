import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
    <header>
        <h1>expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">add new</NavLink>
    </header>
);

export default Header;
