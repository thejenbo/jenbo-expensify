import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/Login';
import ExpenseDashBoard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
 
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute 
                    path="/"
                    component={Login}
                    exact={true}
                />
                <PrivateRoute 
                    path="/dashboard"
                    component={ExpenseDashBoard}
                />
                <PrivateRoute 
                    path="/create"
                    component={AddExpense}
                />
                <PrivateRoute 
                    path="/edit/:id"
                    component={EditExpense}
                />
                <Route 
                    component={NotFound}
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
