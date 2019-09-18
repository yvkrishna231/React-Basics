import React, { Component } from 'react'
import Check from './Check';
class Home extends Component {
    // state = {
    //     name: 'krishna'
    // }
    change = () => {
        this.props.history.push('/about', this.state.name);
    }
    render() {
        // console.log(this.props)
        return (
            <div className='bg-grey ' >
                <h1 className=' text-danger'>Home Page</h1>
                <button className='btn btn-outline-warning' onClick={this.change} >click me</button>
                <Check />
            </div>
        )
    }
}
export default Home
