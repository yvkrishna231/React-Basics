import React, { Component } from 'react'


class Form extends Component {
    state = {
        username: '',
        password: ''
    }
    changeUsername = (event) => {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value })
    };

    submitForm = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        console.log(username, password)
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label> username : </label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.changeUsername}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <label> password : </label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.changeUsername}
                            value={this.state.password}
                        />
                    </div>
                    <h1>{this.state.password}</h1>
                    <button className="btn btn-sm btn-primary"> SUBMIT</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form
