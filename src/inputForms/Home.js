import React, { Component, Fragment } from 'react'

class Home extends Component {
    state = {
        username: '',
        password: ''
    }
    changeButton = event => {
        event.preventDefault();
        if (this.state.username === 'venkatakrishna.ip@gmail.com' && this.state.password === 'yvkchowdary') {
            this.props.history.push('/About')
        } else {
            // alert('something went wrong')
            this.props.history.push('/user')
        }
    }
    changeValue = event => {
        // this.setState({ [event.target.name]: event.target.value })
        const good = event.target.name;
        this.setState({ [good]: event.target.value })
    }
    render() {
        const { username, password } = this.state
        return (
            <Fragment>
                <div className='container mt-5'>
                    <div className='col-lg-6 m-auto'>
                        <div className='card card-body'>
                            <strong>USER</strong>
                            <h1 className='text-danger text-center'>REGISTRATION FORM</h1>
                            <form onSubmit={this.changeButton}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input type="text"
                                        id='username'
                                        name='username'
                                        value={username}
                                        onChange={this.changeValue}
                                        className='form-control'
                                        placeholder='enter your name' />
                                </div>
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input type="password"
                                        id='password'
                                        className='form-control'
                                        name='password'
                                        value={password}
                                        onChange={this.changeValue}
                                        placeholder='enter your password' />
                                </div>
                                <button
                                    className='btn btn-outline-success form-control mt-2'>
                                    submit
                                 </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Home
