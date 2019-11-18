// import React, { Component } from 'react'
// import Axios from 'axios';
// class About extends Component {
//     state = {
//         userdata: [],
//     }
//     componentDidMount() {
//         Axios.get('https://krishna1-8aefc.firebaseio.com/userData.json')
//             .then(response => {
//                 let userdata = [];
//                 for (let keys in response.data) {
//                     userdata.push({ ...response.data[keys], id: keys })
//                 }
//                 this.setState({ userdata });
//             })
//     }
//     handleDelete = (id, index) => {
//         Axios.delete(`https://krishna1-8aefc.firebaseio.com/userData.json/${id}.json`)
//             .then(() => {
//                 this.setState(prevState => {
//                     prevState.userdata.splice(index, 1);
//                     return {
//                         ...prevState
//                     }
//                 })
//             })
//     }
//     render() {
//         // console.log(this.props)
//         return (
//             <div className='container'>
//                 <div className='col-lg-6 m-auto text-center'>
//                     <table className='table table-bordered'>
//                         <thead>
//                             <tr>
//                                 <th>userName</th>
//                                 <th>userEmail</th>
//                                 <th>userPassword</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.userdata && this.state.userdata.map((val, ind) => {
//                                 return (
//                                     <tr key={val.id}>
//                                         <td>{val.userName}</td>
//                                         <td>{val.userEmail}</td>
//                                         <td>{val.userPassword}</td>
//                                         <td>
//                                             <button onClick={() => this.handleDelete(val.id, ind)} className='btn btn-sm btn-danger'>delete</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
// export default About
