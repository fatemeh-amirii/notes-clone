import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";


function Login() {
  const history = useHistory();
  //states

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

useEffect(()=>{

localStorage.setItem("isAdmin",false)


},[])
  //functions
  const openRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const login = (e) => {
    e.preventDefault();
    var axios = require('axios');
var data = JSON.stringify({
  "Phone": phone,
  "Password": password
});

var config = {
  method: 'post',
  url: 'https://api.jobexp.ir/api/user/Login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  localStorage.setItem("token",response.data.token)
    localStorage.setItem("expToken",response.data.exp)
    localStorage.setItem("name",response.data.name)
    history.push("/")
})
.catch(function (error) {
  console.log(error);
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
    <div className="login" >
      <Form className="login-form rtl">
        <FormGroup >
          <Label >شماره همراه:</Label>
          <Input
            
            type="text"
            placeholder="شماره "
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>گذرواژه:</Label>
          <Input
            type="password"
            placeholder="گذرواژه"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormGroup>
        <Button className="button" onClick={(e)=>login(e)}>
          <span className="span">ورود</span>
        </Button>
        <br/>
        <Button onClick={openRegister} className="button">
          <span className="span">ثبت نام</span>
        </Button>
      </Form>
    </div>
  );
}

export default Login;
