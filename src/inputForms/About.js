import React, { Component } from 'react';

class About extends Component {
    changeOn = () => {
        this.props.history.push('/', 'krishna')
    }
    render() {
        return (
            <div className='container mt-5 text-center'>
                <h1>Information About Home Page</h1>
                <button onClick={this.changeOn} >Logout</button>
            </div>
        )
    }
}
export default About
