// import React, { Component } from 'react';
// import Axios from 'axios';
// // import Check from './Check';


// class Home extends Component {
//     state = {
//         userName: '',
//         userEmail: '',
//         userPassword: '',
//     }
//     handleOnchange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })

//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//         const userdata = {
//             userName: this.state.userName,
//             userEmail: this.state.userEmail,
//             userPassword: this.state.userPassword
//         }
//         Axios.post('https://krishna1-8aefc.firebaseio.com/userData.json', userdata)
//             .then(response => {
//                 console.log(response);
//                 this.props.history.push('/about')
//             })
//             .catch(error => {
//                 console.log(error);
//             })

//     }
//     render() {
//         const { userName, userEmail, userPassword } = this.state;
//         return (
//             <div className='container mt-5'>
//                 <div className='col-lg-5 m-auto text-center border shadow p-3'>
//                     <form onSubmit={this.handleOnSubmit}>
//                         <h3 className='ml-5'>Input Forms</h3>

//                         <label
//                             htmlFor='text' >username :</label>
//                         <input
//                             required
//                             value={userName}
//                             onChange={this.handleOnchange}
//                             name='userName'
//                             type='text'
//                             id='text'
//                             className='mr-1' /><br></br>

//                         <label
//                             htmlFor='email'
//                             className='ml-4'>Email : </label>
//                         <input
//                             required
//                             value={userEmail}
//                             onChange={this.handleOnchange}   
//                             name='userEmail'
//                             type='email'
//                             id='email' /><br></br>

//                         <label
//                             htmlFor='number'
//                             className='ml-2'>number : </label>
//                         <input
//                             required
//                             value={userPassword}
//                             onChange={this.handleOnchange}
//                             name='userPassword'
//                             type='number'
//                             id='number' /><br></br>

//                         <button className='btn btn-sm btn-primary ml-5'>submit</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Home
