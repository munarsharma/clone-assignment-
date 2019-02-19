import React from 'react';

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1 id="h1"> Nomblr</h1>
        <br />
        <form>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <input id="signupButton" type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default LogIn;
