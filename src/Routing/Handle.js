import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';
import '../App.css';

class Handle extends Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <NavLink to='/' className='navbar-brand'>logo</NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName='highlight' to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='highlight' to='/about' className='nav-link'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='highlight' to='/register' className='nav-link'>Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='highlight' to='/greet' className='nav-link'>Greet</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}

export default Handle
