import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../components/Login';
import ExpenseDashBoard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
 
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route 
                    path="/"
                    component={Login}
                    exact={true}
                />
                <Route 
                    path="/dashboard"
                    component={ExpenseDashBoard}
                />
                <Route 
                    path="/create"
                    component={AddExpense}
                />
                <Route 
                    path="/edit/:id"
                    component={EditExpense}
                />
                <Route 
                    component={NotFound}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
