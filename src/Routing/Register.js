import React, { Component } from 'react'
import Axios from 'axios';
class Register extends Component {
    state = {
        userData: [],
    }

    componentDidMount() {
        Axios.get('https://krishna2-546bc.firebaseio.com/inputdata.json')
            .then(response => {
                let userData = [];
                for (let keys in response.data) {
                    userData.push({ ...response.data[keys], id: keys })
                }
                this.setState({ userData })
            })
    }
    handleOnClick1 = (id, index) => {
        Axios.delete(`https://krishna2-546bc.firebaseio.com/inputdata/${id}.json`)
        this.setState(prevState => {
            prevState.userData.splice(index, 1)
            return {
                ...prevState
            }
        }

        )
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className='col-lg-8 m-auto p-0 text-center'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>userName</th>
                                <th>userEmail</th>
                                <th>userNumber</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userData && this.state.userData.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.userName}</td>
                                            <td>{value.userEmail}</td>
                                            <td>{value.userNumber}</td>
                                            <td>
                                                <button
                                                    onClick={() => { this.handleOnClick1(value.id, index) }}
                                                    className='btn btn-sm btn-danger'>
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Register
