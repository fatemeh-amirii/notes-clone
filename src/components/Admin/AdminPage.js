import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import queryString, {parse} from "query-string";
import { element } from 'prop-types';
import {Link} from "react-router-dom"



function AdminPage(id) {

const [note,setNote]=useState("")
const [title,setTitle]=useState("")
const [category,setCategory]=useState("")
const [confirmedData,setConfirmedData]=useState([])
const [expectantData,setExpectant]=useState()
const [boolean,setBoolean]=useState(false)
const [fullData,setFullData]=useState([])

useEffect(()=>{
  getUserNote()
  console.log(fullData)
},[category])



const confirmNote=(event)=>{
    let value = queryString.parse(window.location.search);

  var axios = require('axios');
var data = JSON.stringify({
  IsClientSide: false,
  noteId:parseInt(event.value),
  Token:  localStorage.getItem("token")
});

var config = {
  method: 'post',
  url: 'https://api.jobexp.ir/api/note/AdminSetNoteStatus',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log("confirm note")
  console.log(JSON.stringify(response.data));
  var axios = require('axios');
  var data = JSON.stringify({
    IsClientSide: false,
    Category: category,
    Token: localStorage.getItem("token")
  });
  
  var config = {
    method: 'post',
    url: 'https://api.jobexp.ir/api/note/GetNoteList',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data.data);
    setFullData(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log("fulldata:")
  console.log(fullData);
    //getUserNote();
   // console.log(confirmedData)

  //setConfirmedData(response.data)


 })
.catch(function (error) {
  console.log(error);
});

}


const removeNoteByAdmin=(event)=>{
  let value = queryString.parse(window.location.search);
  var axios = require("axios");
  var data = JSON.stringify({
    IsClientSide: false,
    noteId:parseInt(event.value),
    Token: localStorage.getItem("token"),
  });
console.log(data);
  var config = {
    method: "post",
    url: "https://api.jobexp.ir/api/note/DeleteNote",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
     // setFullData(response.data.data);
      // getUserNote()
    })
    .catch(function (error) {
      console.log(error);
    });
};


 const getUserNote = () => {
  var axios = require('axios');
  var data = JSON.stringify({
    IsClientSide: false,
    Category: category,
    Token:"bf69c11f-a75e-4339-ad2c-f935a978e443"
  });
  
  var config = {
    method: 'post',
    url: 'https://api.jobexp.ir/api/note/GetNoteList',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    setFullData(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  
 };


    return (
        <div>
           <section id="team" className="team"dir="rtl">
        <div className="container">
      
          <div className="section-title">
             
            <h3>نوشته های در انتظار تایید</h3>
            
          </div>
      
          <div className="row " dir="rtl">
      
      
          {
  fullData.map((element)=>{
    if(element.isConfirmed===false){
      return(
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="member">
          <div className="member-img bg-secondary text-light">
            <p >{element.desc}</p>
          </div>
          <div className="member-info">
            <h4 className="text-danger">{element.title}</h4>
            <span>{element.category}</span>
            <button type="button" className="btn btn-danger"  value={element.id}  onClick={(e)=>removeNoteByAdmin(e.target)}  >حذف</button>
            <button type="button" className="btn btn-success"  value={element.id}  onClick={(e)=>confirmNote(e.target)} >تایید</button>
          </div>
        </div>
      </div>
        
      )
    } else return null
    

  
  })
}

      
      
          </div>
      
        </div>
      
      
      </section>
          

{/* confirmed note */}
<section id="portfolio" className="portfolio "  dir="rtl">
  <div className="container">

    <div className="section-title">
      <h3>تجارب <span>همه</span></h3>
      <p>لیست همه نوشته ها</p>
    </div>

    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">همه</li>
          <li data-filter=".filter-app" onClick={(e)=>{setCategory("فریلنسری")}} >فریلنسری ها</li>
          <li data-filter=".filter-card"  onClick={(e)=>{setCategory("آزاد")}} >شغل آزاد</li>
          <li data-filter=".filter-web"  onClick={(e)=>{setCategory("کارمندی")}} >کارمندی</li>
        </ul>
      </div>
    </div>



      <div className="row " dir="rtl">
    
    {
      fullData.map((element)=>{
        if(element.isConfirmed===true){
          return(
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <div className="member-img bg-secondary text-light">
                <p >{element.desc}</p>
              </div>
              <div className="member-info">
                <h4 className="text-danger">{element.title}</h4>
                <span> {element.category}</span>
                <br/>
                <button type="button" className="btn btn-danger" value={element.id}  onClick={(e)=>removeNoteByAdmin(e.target)} >حذف</button>
                {/* <button type="button" className="btn btn-warning">ویرایش</button> */}
                <Link className="btn btn-dark"
                  //pass to new page  url => 
                                              to={{
                                                  pathname:"/adminEdit",
                                                  search:  "id="+element.id
                                                
                                              }}>
                                                ویرایش
                                              </Link>
              </div>
            </div>
          </div> 
          )
        }else return null
      })
    }
        
  
      </div>
 

      

    </div>

  
</section>

        </div>
    )
}

export default AdminPage
