import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from 'semantic-ui-react';

class ErrorPage extends Component {
    render() {
        return (
            <Container textAlign="center">
                <h3>404 Error</h3>
                <p>Page does not exists</p>
                <Link to="/">Home</Link>
            </Container>
        );
    }
}

export default ErrorPage;