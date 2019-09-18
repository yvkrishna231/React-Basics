import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class Fault extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='text-center'>
                <h1 className='display-1 text-danger'>404 Not Found</h1>
                <h3>Page Does Not Exist</h3>
                <Link to='/'>Go To Home</Link>
            </div>
        )
    }
}
export default withRouter(Fault);
