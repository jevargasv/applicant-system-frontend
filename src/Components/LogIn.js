import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      correctUsername: 'admin',
      correctPassword: 'ilovecats',
      redirect: false,
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.username === this.state.correctUsername &&
      this.state.password === this.state.correctPassword
    ) {
      this.setState({ redirect: true });
    }
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={{ pathname: '/feed' }} />;
    }
    return (
      <form className="loginform" onClick={this.handleSubmit}>
        <img src={require('../Images/inclusionlogo.png')} alt="logo" />
        <h1 className="title">Admin Access </h1>
        <h1 className="title">Sign In </h1>
        <div className="fieldsgroup">
          <div className="form-group">
            <label>Username</label>
            <input
              type="username"
              name="username"
              className="form-control form-control-lg"
              placeholder="username"
              onChange={event => this.handleChange(event)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="password"
              onChange={event => this.handleChange(event)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Continue
        </button>
      </form>
    );
  }
}
export default LogIn;
