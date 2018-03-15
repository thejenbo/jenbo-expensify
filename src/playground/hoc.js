import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This information below is classified.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (AuthComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <AuthComponent {...props} /> : 'Please login to see info'}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Here are the details"/>, document.getElementById('app'));
