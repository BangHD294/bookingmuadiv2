import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";    
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agentcode, setAgentcode] = useState("");
  const [hashcode, setHashcode] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeAgentcode = (e) => {
    const agentcode = e.target.value;
    setAgentcode(agentcode);
  }

  const onChangHashcode = (e) => {
    const hashcode = e.target.value;
    setHashcode(hashcode);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password, agentcode, hashcode))
        .then(() => {
          window.location.reload();
          props.history.push("/profile");
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }


  return (
    <div className="">
      <Form onSubmit={handleLogin} ref={form} >
        <div className="account-pages my-5 pt-sm-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                  <div className="bg-soft-primary">
                    <div className="row">
                      <div className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Sign in to continue to VNISC.</p>
                        </div>
                      </div>
                      <div className="col-5 align-self-end">
                        <img src="assets\images\profile-img.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div>
                      <a href="index.html">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img src="assets\images\logo.svg" alt="" className="rounded-circle" height={34} />
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="p-2">
                      <div className="form-horizontal" action="index.html">
                        <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <input type="text" className="form-control" id="username" placeholder="Enter username" name='username'
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="userpassword">Password</label>
                          <input type="password" className="form-control" id="userpassword" placeholder="Enter password" name='password'
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="userpassword">Agentcode</label>
                          <input type="text" className="form-control" id="userpassword" placeholder="Enter agentcode" name='agentcode'
                            value={agentcode}
                            onChange={onChangeAgentcode}
                            validations={[required]} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="userpassword">Hashcode</label>
                          <input type="text" className="form-control" id="userpassword" placeholder="Enter hashcode" name='hashcode'
                            value={hashcode}
                            onChange={onChangHashcode}
                            validations={[required]} />
                        </div>
                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        )}
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customControlInline" />
                          <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                        </div>
                        <div className="mt-3">
                          <button className="btn btn-primary btn-block waves-effect waves-light" type="submit" disabled={loading}>
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                              Log In</button>

                        </div>
                        <div className="mt-4 text-center">
                          <h5 className="font-size-14 mb-3">Sign in with</h5>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              {/* <a href="javascript::void()" className="social-list-item bg-primary text-white border-primary"> */}
                              <a href=" " className="social-list-item bg-primary text-white border-primary">
                                <i className="mdi mdi-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              {/* <a href="javascript::void()" className="social-list-item bg-info text-white border-info"> */}
                              <a href=" " className="social-list-item bg-info text-white border-info">
                                <i className="mdi mdi-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              {/* <a href="javascript::void()" className="social-list-item bg-danger text-white border-danger"> */}
                              <a href=" " className="social-list-item bg-danger text-white border-danger">
                                <i className="mdi mdi-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 text-center">
                          <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock mr-1" /> Forgot your password?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-5 text-center">
                    <div>
                      <p>Don't have an account ? <a href="auth-register.html" className="font-weight-medium text-primary"> Signup now </a> </p>
                      <p>© 2020 VNISC. Crafted with <i className="mdi mdi-heart text-danger" /> by VNISC</p>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>

        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Login;
