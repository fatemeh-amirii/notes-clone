import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import { Navbar,Nav,Container } from "reactstrap";
import { Navbar,Nav,Container } from 'react-bootstrap'
import "./Header.css";
// import "../Home/Home.css"
// import logo from "./logo.png";
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
  const [navbar, setNavbar] = useState(false)
 

  let isAuth = !isAccessTokenExpired();

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
      console.log(isAuth)
      changeBackground()
      // adding the event when scroll change Logo
      window.addEventListener("scroll", changeBackground)
  }, [isAuth])
  


  const handleSignOut = (e) => {
    e.preventDefault()
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
    

<Navbar  className={navbar ? "color rtl" : "navbar rtl"} id="color" collapseOnSelect  fixed="top" expand="sm" id="height-nav"  variant="light"   >
    <Container className="d-flex align-items-center justify-content-between" >
      <Navbar.Toggle class="toggler"  aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse  id="responsive-navbar-nav" >
      <Nav    >
        <Navbar.Brand className="font ul"  href="#" >
          <p  className="logo" >
          JobExp
          </p>

        </Navbar.Brand>
  
        <Nav.Link  className="font ul mt-2 "  href="/" > صفحه اصلی  </Nav.Link>
        <Nav.Link  className="font ul mt-2  "   href="/myProfile" > پروفایل   </Nav.Link>
        <Nav.Link  className="font ul mt-2 "  href="/note" > صفحه شما  </Nav.Link>
        <Nav.Link className="font ul mt-2 "  href="/success" >  پیام ها  </Nav.Link>
        {
          !isAuth ? (<Nav.Link className="font ul mt-2 "   href="/login"  >ورود</Nav.Link>) : null
        }
        {
          isAuth ? ( <Nav.Link className="font ul mt-2 "  onClick={(e)=>handleSignOut(e)}  >خروج</Nav.Link>) : null
        }

        {/* {isAuth && (<Nav.Link className="font"  onClick={()=>handleSignOut()}  >خروج</Nav.Link>)}
      {!isAuth && (<Nav.Link className="font"   href="/login"  >ورود</Nav.Link>)} */}


      </Nav>
      </Navbar.Collapse>
    </Container>

</Navbar>




  );
}
export default Header;


/*
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
          
          /* <li><Link className="nav-link scrollto " to="/messages" >پیام ها</Link></li> */
  //         <li><Link className="nav-link scrollto"  to="/success"> پیام ها</Link></li>
  //       </ul>
  //       <i className="bi bi-list mobile-nav-toggle"></i>
  //     </nav>

  //   </div>
  // </header>
