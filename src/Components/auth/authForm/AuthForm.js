import React, { Component } from "react";

const initialState = {
  email: "",
  password: "",
  isAgree: false,
};

class AuthForm extends Component {
  state = { ...initialState };

  // onHandleChangeTerm = () => {
  //   this.setState((prev) => ({ isAgree: !prev.isAgree }));
  // };

  onHandleChange = (e) => {
    this.props.resetError();
    if (e.target.name === "isAgree") {
      const { name } = e.target;
      this.setState((prev) => ({ [name]: !prev[name] }));
    } else {
      const { value, name } = e.target;
      this.setState({ [name]: value });
    }
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp({ ...this.state });
    this.setState({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    const { email, password, isAgree } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          EMAIL:
          <input
            type='text'
            value={email}
            name='email'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          PASSWORD:
          <input
            type='text'
            value={password}
            name='password'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Is agree with terms?
          <input
            type='checkbox'
            name='isAgree'
            checked={isAgree}
            onChange={this.onHandleChange}
          />
          I disAgree
          <input
            type='checkbox'
            name='isAgree'
            checked={!isAgree}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Sign up</button>
      </form>
    );
  }
}

export default AuthForm;
