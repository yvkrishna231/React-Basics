import React, { Component } from 'react'
import { Link} from 'react-router-dom'
class User extends Component {
    // changeGo = () => {
    //     this.props.history.push('/')
    // }
    render() {
        return (
            <div className='container mt-5 text-center'>
                <h1 className='display-1'>404 not found</h1>
                <span>Go to</span>
                <Link to='/'> home </Link>
                {/* <button onClick={this.changeGo}>click me</button> */}
            </div>
        )
    }
}
export default User
