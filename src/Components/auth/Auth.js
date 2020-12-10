import axios from "axios";
import React, { Component } from "react";
import AuthForm from "./authForm/AuthForm";

class Auth extends Component {
  state = {
    isLoading: false,
    error: "",
  };

  signUp = async (userData) => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.post(
        process.env.REACT_APP_SIGNUP_URL,
        userData
      );
      axios.post(process.env.REACT_APP_BASE_URL, {
        email: response.data.email,
        localId: response.data.localId,
      });
    } catch (error) {
      this.setState({ error: error.response.data.error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  resetError = () => {
    this.setState({ error: "" });
  };

  render() {
    const { isLoading, error } = this.state;
    return (
      <>
        {isLoading && <h2>...loading</h2>}
        {error && <h2>{error}</h2>}
        <AuthForm signUp={this.signUp} resetError={this.resetError} />
      </>
    );
  }
}

export default Auth;
