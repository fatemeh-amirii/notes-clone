import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

//import "./Header.css";
import logo from "./logo.png";
import {  useHistory } from "react-router-dom";


function isAccessTokenExpired() {
  let accessExp = localStorage.getItem("expToken");
  if (accessExp !== undefined && accessExp !== null && accessExp !== "") {
    let now = Date.now();
    accessExp = new Date(accessExp);
    if (accessExp <= now) return true;
    else return false;
  } else return true;
}

function Header() {
  const history=useHistory()
  // const [{data,user},dispatch]=useStatValue()


  let isAuth = !isAccessTokenExpired();


  useEffect(() => {
   
  }, [isAuth])
  

  const handleSignOut = () => {
    
    var axios = require("axios");
    var data = JSON.stringify({
      token: localStorage.getItem("token"),
    
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/user/Logout",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.removeItem("token");
        localStorage.removeItem("expToken");
        localStorage.removeItem("name");
        history.push("/")
      
      })
      .catch(function (error) {
        console.log(error);
      });
     
  };

  return (
    
<div>
<header id="header" className="fixed-top header-inner-pages" style={{background:"rgba(240, 20, 61, 0.63)"}} >
    <div className="container d-flex align-items-center justify-content-between">

     
      <a href="#" className="logo" ><img src={logo} alt="" className="img-fluid"  style={{maxHeight:"30px"}} /></a>

      <nav id="navbar" className="navbar" dir="rtl" >
        <ul>
          <li><Link className="nav-link scrollto " to="/" >JobExp</Link></li>
          <li><Link className="nav-link scrollto"  to="/note">صفحه شما</Link></li>
          <li><Link className="nav-link scrollto"  to="/myProfile"> profilr</Link></li>

          {
            
            !isAuth ? ( <li><Link className="nav-link scrollto"   to="/login" >ورود</Link></li>)  : null
          }
         {
           isAuth ? (<li><a className="nav-link scrollto " onClick={()=>handleSignOut()} >خروج</a></li>) : null
         }
          
          {/* <li><Link className="nav-link scrollto " to="/messages" >پیام ها</Link></li> */}
          <li><Link className="nav-link scrollto"  to="/success"> پیام ها</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
</div>



  );
}
export default Header;
