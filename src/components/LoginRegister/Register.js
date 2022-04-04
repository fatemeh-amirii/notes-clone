import React, { useState } from 'react'
import {Button ,Form,FormGroup, Label,Input} from "reactstrap"
import {useHistory } from "react-router-dom";
import "./Register.css"
import axios from 'axios';

function Register() {
    const history = useHistory();
//states
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [phone,setPhone]=useState("")
const [password,setPassword]=useState("")



//functions
const register=(e)=>{
   e.preventDefault()
    var axios = require('axios');
    var data = JSON.stringify({
      "FirstName": firstName,
      "LastNmae": lastName,
      "Phone": phone,
      "Password": password
    });
    
    var config = {
      method: 'post',
      url: 'https://api.jobexp.ir/api/user/RegisterUser',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      history.push("/")
    })
    .catch(function (error) {
      alert(error)
      console.log(error);
    });
    
}

const openLogin=(e)=>{
    e.preventDefault()
    history.push("/login")
}


    return (
        <div className="register">
        <Form  onSubmit={(e)=>register(e)} className="register-form rtl"  >
        
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
      </Form>
      
       </div>
    )
}

export default Register
