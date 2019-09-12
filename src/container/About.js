import React, { Component } from 'react'
import Handle from './Handle';
import { Link } from 'react-router-dom';
class About extends Component {
    subFun = () => {
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className='bg-white' >
                <Handle />
                <h1 className='text-warning'> About Page</h1>
                <button className='btn btn-outline-danger' onClick={this.subFun}>click me</button>
                <ul className="pagination bg-dark justify-content-center ">
                    <li className="page-item ">
                        <Link to='/home' className="page-link ">previous</Link>
                    </li>
                    <li className="page-item">
                        <Link to='/home' className="page-link">1</Link>
                    </li>
                    <li className="page-item">
                        <Link to='/about' className="page-link">2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default About
