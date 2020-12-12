import React, { Component } from 'react';
import Tabs from './components/Tabs/Tabs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

// @desc server hook up
const client = new ApolloClient({
    uri: `http://localhost:${ SERVER_PORT }/graphql`,
});


class App extends Component {
    render() {
        return (
            <ApolloProvider client={ client } >
                <MuiThemeProvider theme={ theme } >
                    <Tabs />
                </MuiThemeProvider >
            </ApolloProvider >
        );
    }
}

export default App;
