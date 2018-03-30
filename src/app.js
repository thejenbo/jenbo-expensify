import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
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
            <AppRouter />
        </Container>
    </Provider>
);

ReactDOM.render(<Loader active>Loading...</Loader>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('logged in');
    } else {
        console.log('logged out');
    }
});
