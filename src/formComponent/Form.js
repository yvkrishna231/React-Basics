import React, { PureComponent, Component } from 'react'
import Index from './Index';
class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'krishna',
        }
        console.log('!!!!!!!!!!!!!!!constructor!!!!!!!!!!')
    }
    static getDerivedStateFromProps() {
        console.log('!!!!!!!!!!!!!!!getDerivedStateFromProps!!!!!!!!!!')
        return null;
    }
    componentDidMount() {
        console.log('!!!!!!!!!!!!!!!componentDidMount!!!!!!!!!!')

    }
    static getDerivedStateFromProps() {
        console.log('!!!!!!!!!!!!!!!getDerivedStateFromProps!!!!!!!!!!')
        return null
    }
    shouldComponentUpdate() {
        console.log('!!!!!!!!!!!!!!!shouldComponentUpdate!!!!!!!!!!')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('!!!!!!!!!!!!!!!getSnapShotBeforeUpdate!!!!!!!!!!')
        return null
    }
    componentDidUpdate() {
        console.log('!!!!!!!!!!!!!!!componentDidUpdate!!!!!!!!!!')
    }
    componentWillUnmount() {
        console.log('!!!!!!!!!!!!!!!componentDidUpdate!!!!!!!!!!')
    }
    render() {
        console.log('!!!!!!!!!!!!!!!render!!!!!!!!!!')

        return (
            <div>
                <Index name={this.state.name} />
                <button onClick={() => { this.setState({ name: 'venkat' }) }}>Click me</button>
            </div>

        )
    }
}

export default Form
