import React, { useEffect, useState } from 'react'
import { SocialIcon } from "react-social-icons";
import "./Profile.css";

import Cities from "./cities.json";
import Provinces from "./provinces.json";
import {useLocation } from "react-router-dom"
import {useHistory} from "react-router-dom"
// import {useHistory} from "react-router"
const PublicProfile=props=>{
      const [fullData,setFullData]=useState([])
      const [cityName,setCity]=useState("")
      const [province,setProvince]=useState("")
      const location =useLocation();
      const history=useHistory()
       const [jobTitle,setTitle]=useState("")
       const [jobType,setType]=useState("")
       const [instagram, setInstagram] = useState("");
       const [linkedin, setLinkedIn] = useState("");
      const [ desc,setDesc ]=useState("")

useEffect(()=>{
   setCityAndProvince()
   setProvinceName()
   setInsta()
   setDescr()
 console.log(location);
 
console.log(location.state.token)
  var axios = require('axios');
  var data = JSON.stringify({
    Token: "d7b6f598-c69e-4280-a53e-636d5e3f1437",
    UserId:location.state.userId
  });
  
  var config = {
    method: 'post',
    url: 'https://api.jobexp.ir/api/user/ShowProfile',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    setFullData(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  


},[])


const setCityAndProvince=()=>{
// console.log(fullData.city);
Cities.forEach((item)=>{
  if(item.id===fullData.city){
    setCity(item.name)
    console.log(cityName)
  }
})
 
}

const setProvinceName=()=>{
  console.log("hi");
  Provinces.forEach((item)=>{
    if(item.id===fullData.village){
      setProvince(item.name)
      console.log(province)
    }
  })
}

const setInsta=()=>{
  setInstagram(fullData.instagram)
  setLinkedIn(fullData.linkedin)
  console.log(instagram);
  console.log(linkedin);
}

const setDescr=()=>{
  setDesc(fullData.profileDesc)
}


const back=()=>{
  history.push("/ShowNotes")
}

    return (
        <div  className="main-content mt-2  " >
            
           <div className="col d-flex justify-content-center text-center" >
           <div className="card card-profile shadow mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img
                      className="rounded-circle"
                      src={fullData.imgSrc}
                      alt="content"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-header-p text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex  justify-content-evenly mt-4 ">
                <button  onClick={(e)=>back(e)} className="btn-p btn-sm btn-info mr-4 " href="#">
                  بازگشت  
                </button>
                <a className="btn-p btn-sm btn-default float-right" href="#">
                  پیام دادن
                </a>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading-p">22</span>
                      <span className="description"> دوستان</span>
                    </div>
                    <div>
                      <span className="heading-p">89</span>
                      <span className="description">دیدگاه</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>{cityName} 
                  <i className="ni location_pin mr-2"></i>{province} 
                </div>
              </div>
              <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2"></i>Solution
                Manager - Creative Tim Officer
              </div>
              <div>
                <i className="ni education_hat mr-2"></i>دانشگاه خلیج فارس بوشهر
              </div>
              <hr className="my-4" />
              <p>

              this is description  <br/>
              {desc}
              </p>
              <div className="d-flex flex-row justify-content-center">
                <div className="p-2">
                  <SocialIcon
                    className="p-icon"
                    style={{ height: 50, width: 50 }}
                    network="twitter"
                    bgColor="#000"
                  />
                </div>
                <div className="p-2">
                  <SocialIcon
                    className="p-icon"
                    style={{ height: 50, width: 50 }}
                    network="instagram"
                    bgColor="#000"
                    url={instagram}
                  />
                </div>
                <div className="p-2">
                  <SocialIcon
                    className="p-icon"
                    style={{ height: 50, width: 50 }}
                    network="github"
                    bgColor="#000"

                  />
                </div>
                <div className="p-2">
                  <SocialIcon
                    className="p-icon"
                    network="linkedin"
                    bgColor="#000"
                    url={linkedin}
                  />
                </div>
              </div>
            </div>
          </div>
           </div>
              
        </div>
    )
}

export default PublicProfile
