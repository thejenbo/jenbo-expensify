import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Header, Form, Segment } from 'semantic-ui-react';

const Login = ({ startLogin }) => (
    <div>
        <Header size="large">login</Header>

        <Segment>
            <Form>
                <Form.Button onClick={startLogin}>login with google</Form.Button>
            </Form>
        </Segment>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
