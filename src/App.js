import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import 'typeface-roboto'

import { theme } from './settings'
import UpdateHandler from './components/UpdateHandler'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/views/Home';
import Footer from './components/Footer';
import Devices from './components/views/Devices';
import Data from './components/views/Data';

class App extends Component {
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <UpdateHandler appServiceWorker={this.props.appServiceWorker}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/all" component={Devices} />
                                <Route exact path="/data" component={Data} />
                            </Switch>
                            <Footer />
                        </UpdateHandler>
                    </MuiThemeProvider>
                </Router>
            </div>
        );
    }
}

export default App;
