import React, { Component } from 'react'
class Register extends Component {
    addChange = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='bg-light'>
                <h1 className='text-primary'>Register Page</h1>
                <button className='btn btn-outline-success' onClick={this.addChange} >click me</button>
            </div>
        )
    }
}
export default Register
