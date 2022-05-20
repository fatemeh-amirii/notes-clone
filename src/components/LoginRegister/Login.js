import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

function Login() {
  const history = useHistory();
  //states

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("isAdmin", true);
  }, []);
  //functions
  const openRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const login = (e) => {
    e.preventDefault();

    var axios = require("axios");
    var data = JSON.stringify({
      Phone: phone,
      Password: password,
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/user/Login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("exp", response.data.exp);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("userId", response.data.id);
        history.push("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });

    // var axios = require('axios');
    // var data = JSON.stringify({
    //   "Phone": phone,
    //   "Password":password
    // });

    // var config = {
    //   method: 'post',
    //   url: 'https://api.jobexp.ir/api/user/Login',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };

    // axios(config)
    // .then(function (response) {//success
    //   console.log(JSON.stringify(response.data));
    //   localStorage.setItem("token",response.data.token)
    //   localStorage.setItem("expToken",response.data.exp)
    //   localStorage.setItem("name",response.data.name)
    //  history.push("/")
    // })
    // .catch(function (error) {

    //   console.log(error);
    // });
  };

  return (
    <div className="form-bg ">
      <div className="container  ">
        <div className="row justify-content-center ">
          <div className="col-md-4 col-md-offset-4">
            <div className="login-form-container rtl">
              <div className="row">
                <div className="login-form-icon">
                  <i aria-hidden="true" className="fa fa-user"></i>
                </div>
              </div>
              <h3 className="login-title">ورود</h3>
              <form className="login-form-horizontal justify-content-center  ">
                <div className="col-12">
                  <div className="login-form-group">
                    <label for="phone">شماره همراه:</label>
                    <br />
                    <input
                      className="login-form-control"
                      type="text"
                      id="phone"
                      placeholder=" شماره همراه"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="login-form-group">
                    <label for="password">گذرواژه:</label> <br />
                    <input
                      className="login-form-control"
                      type="password"
                      id="password"
                      placeholder="گذرواژه"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  className="button"
                  className="btn btn-default"
                  onClick={(e) => login(e)}
                >
                  ورود
                </button>
                <div className="row justify-content-center   ">
                  <div className="col py-2 text-center ">
                    <p
                      className="register-div"
                      onClick={(e) => openRegister(e)}
                    >
                      {" "}
                      ایجاد حساب
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
