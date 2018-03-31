import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { logIn, logOut } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'semantic-ui-css/semantic.min.css';
import 'normalize.css/normalize.css';
import { Container, Loader } from 'semantic-ui-react';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Container>
            <h1>expen$ify</h1>
            <AppRouter />
        </Container>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<Loader active>Loading...</Loader>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(logIn(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logOut());
        renderApp();
        history.push('/');
    }
});
