import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import Register from './Register';
import Handle from './Handle'
import Fault from './Fault';
import Greet from './Greet';
// import Greet from './Greet';

class App extends Component {
    render() {
        console.log('hello world')

        return (
            <BrowserRouter>
                <Handle />
                <Switch>
                    {/* <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} /> */}
                    <Route path='/register' component={Register} />
                    <Route path='/greet' component={Greet} />
                    {/* <Redirect to='/' /> */}
                    <Route component={Fault} />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App
