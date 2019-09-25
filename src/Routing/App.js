import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from './Register';
import Handle from './Handle'
import Fault from './Fault';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Handle />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/register' component={Register} />
                    <Redirect to='/' />
                    <Route component={Fault} />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App
