import React, { Component } from 'react'

class Greet extends Component {
    state = {
        iamVisible: false
    }
    render() {
        let message
        if (this.state.iamVisible) {
            message = <h1>hello js</h1>
        } else {
            message = <h1>hello React js</h1>
        }
        return (
            <div>
                <h1>{message}</h1>
            </div>
        )
        if (this.state.iamVisible) {
            return (
                <div className='container mt-5 text-center text-success' >
                    <h1>Hello World</h1>
                </div>
            )
        } else {
            return (
                <div className='container mt-5 text-center text-primary'>
                    <h1>Hello React Js</h1>
                </div>
            )
        }
        return (
            this.state.iamVisible ?
                <h1>hello world</h1> :
                <h1>hello React Js</h1>
        )
        return (
            this.state.iamVisible && <h1>hello world</h1>
        )
    }
}
export default Greet
