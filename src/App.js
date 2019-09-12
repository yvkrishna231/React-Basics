import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './container/Home';
import About from './container/About';
import Register from './container/Register'
class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <Switch >
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/register' component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App
