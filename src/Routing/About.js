import React, { Component } from 'react'
class About extends Component {
    changeFun = () => {
        this.props.history.push('/register')
    }
    render() {
        // console.log(this.props)
        return (
            <div className='bg-light text-success'>
                <h1 className='text-grey'>About Page</h1>
                {/* {this.props.location.state} */}
                <button className='btn btn-outline-danger' onClick={this.changeFun} >click me</button>
            </div>
        )
    }
}
export default About
