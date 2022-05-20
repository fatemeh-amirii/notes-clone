import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Register() {
  const history = useHistory();
  //states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //functions
  const register = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      FirstName: firstName,
      LastNmae: lastName,
      Phone: phone,
      Password: password,
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/user/RegisterUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push("/");
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  };

  const openLogin = (e) => {
    e.preventDefault();
    history.push("/login");
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
              <h3 className="login-title">ثبت نام</h3>
              <form className="login-form-horizontal justify-content-center  ">
                <div className="col-12">
                  <div className="login-form-group">
                    <label for="firstName"> نام:</label>
                    <br />
                    <input
                      className="login-form-control"
                      type="text"
                      id="firstname"
                      placeholder="نام "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="login-form-group">
                    <label for="password"> نام خانوادگی:</label> <br />
                    <input
                      className="login-form-control"
                      type="text"
                      id="lastname"
                      placeholder=" نام خانوادگی "
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="login-form-group">
                    <label for="password">شماره تلفن:</label> <br />
                    <input
                      className="login-form-control"
                      type="text"
                      id="phone"
                      placeholder="شماره"
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
                  onClick={(e) => register(e)}
                >
                  ثبت نام
                </button>
                <div className="row justify-content-center   ">
                  <div className="col-4 py-2 text-center ">
                    <p className="register-div" onClick={(e) => openLogin(e)}>
                      ورود
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    /* <Form  onSubmit={(e)=>register(e)} className="register-form rtl"  >
        
        <h6 className="text-center" >مشخصات خود را وارد کنید</h6>
       <FormGroup>
           <Label>نام :</Label>
           <Input type="text" id="firstname"  placeholder="نام " value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
       </FormGroup>
       <FormGroup>
           <Label>نام خانوادگی :</Label>
           <Input type="text" id="lastname"  placeholder=" نام خانوادگی " value={lastName} onChange={(e)=>setLastName(e.target.value)}  />
       </FormGroup>
        <FormGroup>
        <Label>شماره تلفن:</Label>
          <Input type="text" id="phone"  placeholder="شماره"  onChange={(e)=>setPhone(e.target.value)} />
        </FormGroup>
        <FormGroup>
        <Label>گذرواژه:</Label>
          <Input type="password"  id="password"  placeholder="گذرواژه"  onChange={(e)=>setPassword(e.target.value)} />
        </FormGroup>
        <Button className="button"   ><span>ثبت نام</span></Button>
        <br/>
        <Button onClick={(e)=>openLogin(e)} className="button"><span className="span" >ورود</span></Button>
      </Form> */
  );
}

export default Register;
