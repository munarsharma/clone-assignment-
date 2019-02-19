import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    usernameInput: '',
    userEmailInput: '',
    // userPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('/users', {
        username: this.state.usernameInput,
        email: this.state.userEmailInput,
      })
      .then(res => {
        console.log(res);
        this.setState({
          usernameInput: '',
          userEmailInput: '',
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  render() {
    const { usernameInput, userEmailInput } = this.state;

    return (
      <div className="signupContainer">
        <h1 id="h1"> Nomblr</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="usernameInput"
            placeholder="username"
            value={usernameInput}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="userEmailInput"
            placeholder="email"
            value={userEmailInput}
            onChange={this.handleChange}
          />
          <br />
          <input type="text" placeholder="password" />
          <br />
          <input id="signupButton" type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default SignUp;
