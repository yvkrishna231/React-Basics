import React, { Component } from 'react'
import Handle from './Handle';
import { Link } from 'react-router-dom';
class Register extends Component {
    mulFun = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div className='bg-white'>
                <Handle />
                <h1 className='text-dark'>Register Page</h1>
                <button className='btn btn-outline-success' onClick={this.mulFun}>click me</button>
                <ul className="pagination bg-dark justify-content-center ">
                    <li className="page-item ">
                        <Link to='/about' className="page-link ">previous</Link>
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

export default Register;
