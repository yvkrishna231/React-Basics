import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';
class Input extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <NavLink to='/' className="navbar-brand" >Logo</NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to='/'
                                exact activeClassName='highlight'
                                className="nav-link"
                                href="#">home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to='/About'
                                activeClassName='highlight'
                                className="nav-link"
                                href="#">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to='/User'
                                activeClassName='highlight'
                                className="nav-link"
                                href="#">User</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Input
