import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import { Provider } from './context';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#33aaaa',
            contrastText: '#fff',
        }
    }
});

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <React.Fragment>
                        <CssBaseline>
                            <MuiThemeProvider theme={theme}>
                                <Navbar />
                                <Switch>
                                    <Route exact path="/" component={Index} />
                                </Switch>
                            </MuiThemeProvider>
                        </CssBaseline>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;