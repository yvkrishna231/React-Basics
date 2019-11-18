import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Check extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default withRouter(Check);
