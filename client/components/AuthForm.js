import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';

const AuthForm = (props) => {
  const { name, displayName, error, handleSubmit } = props;

  return (
    <div className="auth-container">
      <div className="video-section">
        {/* <video autoPlay loop muted className="background-video">
          <source src="/Assets/Videos/galaxyzoom2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <form onSubmit={(evt) => handleSubmit(evt, name)} className="p-3 rounded">
            <div className="mb-3">
              <input className="form-control" name="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-3">
              <input className="form-control" name="password" type="password" placeholder="Password" />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                {displayName}
              </button>
            </div>
            {error && error.response && (
              <div className="alert alert-danger mt-2">{error.response.data}</div>
            )}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, formName) {
      evt.preventDefault();
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

