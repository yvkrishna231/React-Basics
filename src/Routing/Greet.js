import React, { Component } from 'react'
import Axios from 'axios';

class Greet extends Component {
    state = {
        userName: '',
        userEmail: '',
        userNumber: ''
    }
    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        const userData = {
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            userNumber: this.state.userNumber
        }

        if (this.state.userName && this.state.userEmail && this.state.userNumber) {
            Axios.post('https://krishna2-546bc.firebaseio.com/inputdata.json', userData)
                .then(() => {
                    // console.log('successflly posted');
                    // console.log(userData);
                    this.props.history.push('/register')
                })
                .catch(error => {
                    console.log(error)
                })
            // this.setState({ userName: '', userEmail: '', userNumber: '' })
        }
    }
    render() {
        const { userName, userEmail, userNumber } = this.state
        return (
            <div className='container mt-5'>
                <div className='col-lg-5 m-auto text-center shadow p-3'>
                    <form onSubmit={this.handleOnSubmit}>
                        <h3 className='ml-4'>Form Handling</h3>
                        <hr></hr>
                        <div className='mr-2'>
                            <label className='text-dark' htmlFor='text'>Username :</label>
                            <input
                                value={userName}
                                type='text'
                                onChange={this.handleOnChange}
                                name='userName'
                                id='text'
                            />
                        </div>
                        <div className='ml-4'>
                            <label className='text-dark' htmlFor='email'>Email :</label>
                            <input
                                value={userEmail}
                                type='email'
                                onChange={this.handleOnChange}
                                name='userEmail'
                                id='email'
                            />
                        </div>
                        <div className='mr-1'>
                            <label className='text-dark' htmlFor='number'>password :</label>
                            <input
                                value={userNumber}
                                type='number'
                                onChange={this.handleOnChange}
                                name='userNumber'
                                id='number'
                            />
                        </div>
                        <button className='btn btn-sm btn-info mt-2 ml-5'>submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Greet;
