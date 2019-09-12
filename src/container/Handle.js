import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Handle extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link to='/home' className="navbar-brand">Logo</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className="nav-link">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Handle
