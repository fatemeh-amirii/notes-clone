import React, { useEffect, useState } from "react";
import "./ShowNotes.css";
import "./like.css";
import logo from "../Header/logo.png";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import "./Modal.css"



function ShowNotes() {
  //states
  const history = useHistory();
  const [fullData, setData] = useState([]);
  const [category, setCategory] = useState();
  // const [isLike,setIsLike]=useState(false);
  const [likeList, setLikeList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(fullData);
    //copy patse postman
    // console.log(likedNotes)
    var axios = require("axios");
    var data = JSON.stringify({
      IsClientSide: false,
      Category: category,
      Token: localStorage.getItem("token"),
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/GetNoteList",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [category]);

  /////////////////////////////////////////////////
  const likeNote = (id) => {
    var axios = require("axios");
    var data = JSON.stringify({
      IsClientSide: false,
      noteId: parseInt(id),
      Token: localStorage.getItem("token"),
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/LikeNote",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    //_________________________________________________

    var axios = require("axios");
    var data = JSON.stringify({
      IsClientSide: false,
      Category: category,
      Token: localStorage.getItem("token"),
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/GetNoteList",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  ///////////////////////////////////////////////

  const handleOpenLikeList = (listOfLike) => {
    setLikeList(listOfLike);
    setShow(true);
    console.log(likeList);
  };

  const handleCloseLikeList = () => setShow(false);

  return (
    <div dir="rtl">
      <section
        id="portfolio"
        className="portfolio"
        style={{ marginTop: "4rem" }}
      >
        <div className="container">
          <div className="section-title">
            <h3>
              تجارب <span>شما</span>
            </h3>
            <p>اینجا میتونی تجربه بقیه توی مشاغل مختلف روببینی</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className="filter-active"
                  onClick={() => setCategory("")}
                >
                  همه
                </li>
                <li
                  data-filter=".filter-app"
                  onClick={() => setCategory("فریلنسری")}
                >
                  فریلنسری ها
                </li>
                <li
                  data-filter=".filter-card"
                  onClick={() => setCategory("آزاد")}
                >
                  شغل آزاد
                </li>
                <li
                  data-filter=".filter-web"
                  onClick={() => setCategory("کارمندی")}
                >
                  کارمندی
                </li>
              </ul>
            </div>
          </div>

          <div className="area text-center" style={{ marginTop: "4rem" }}>
            <div className="col-12">
              <h2>اینجا بخوانید</h2>
              <div className="underline"></div>
            </div>
            <div className="like-container bg-white">
              <div className="row text-center bg-white ">
                {fullData.map((element) => {
                  //  const userList=element.likeUserList
                  if (element.isConfirmed) {
                    return (
                      <div
                        key={element.id}
                        id="card-item"
                        className="col-4 mb-3"
                      >
                        <div className="blog-post-action like-header">
                          <div>
                            <p
                              dir="rtl"
                              className="blog-post-bottom h5 float-right"
                            >
                              {element.firstName} {element.lastName}
                            </p>
                          </div>
                          <br />

                          <div
                            className="like-icon"
                            style={
                              element.isLiked
                                ? { color: "rgba(247, 31, 71, 0.63)" }
                                : { color: "white" }
                            }
                            onClick={(e) => likeNote(element.id)}
                          >
                             ❤
                          </div>
                          <p
                            className="like-number"
                            onClick={() =>
                              handleOpenLikeList(element.likeUserList)
                            }
                          >
                            <span>{element.likeNum}</span>
                          </p>

                          <div className="modal-container">
                            <Modal
                              isOpen={show}
                              onRequestClose={handleCloseLikeList}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                              ariaHideApp={false}
                              parentSelector={() =>
                                document.querySelector("#root")
                              }
                            >
                              <div className="modal-body mt-2 " dir="rtl">
                                <h1>
                                    لایک شده توسط :
                                  <br />
                                </h1>
                              </div>
                              <div className="modal-container">
                            
                                <ul>
                                  {likeList.map((item) => {
                                    console.log(item);
                                    return (
                                      <div className="row">
                                      <div className="col-md-8">
                                        <div className="people-nearby">
                                          <div className="nearby-user">
                                            <div className="row">
                                              <div className="col-md-2 col-sm-2">
                                                <img src={logo} alt="user" className="profile-photo-lg" />
                                              </div>
                                              <div className="col-md-7 col-sm-7">
                                                <h5>
                                                  <a
                                                    href="#"
                                                    className="profile-link"
                                                  >
                                                    {item.firstName} {item.lastNmae}
                                                  </a>
                                                </h5>
                                                <p>جزییات پروفایل</p>
                                                {/* <p className="text-muted">
                                                  500m away
                                                </p> */}
                                              </div>
                                              <div className="col-md-3 col-sm-3">
                                                <button className="btn btn-primary pull-right">
                                                 مشاهده پروفایل
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    );
                                  })}
                                </ul>
                              </div>

                              <button onClick={handleCloseLikeList}>
                                بازگشت
                              </button>
                            </Modal>
                          </div>

                          <p className="like-category">
                            <small>{element.category}</small>
                          </p>
                        </div>
                        <blockquote className="qoute-box">
                          <div>
                            <p className="qoutation-mark">“</p>
                            <hr />
                            <br />

                            <p className="qoute-text">
                              {element.desc}
                              {element.desc}
                            </p>
                          </div>
                        </blockquote>
                      </div>
                    );
                  } else return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowNotes;

// <div className="col-lg-3 col-md-6 d-flex align-items-stretch  bg-danger " style={{margin:"20px"}} >
// <div className="member">
//   <div className="member-img  text-light w-100 ">

//     <h3 className="font-weight-bold" >{element.title}</h3>
//     <p6>{element.category}</p6>
//   </div>
//   <div className="member-info">
//     <h4 className=" text-dark"  > {element.desc} </h4>
//     <span> {element.catch} </span>

//   </div>
// </div>
// </div>

/*
                        <div className="like-container">
             <div className="blog-post-actions card-header " >
            <div>

                <p dir="rtl"className="blog-post-bottom  h5 float-right " >
                {element.firstName} {element.lastName}
            
                </p>
            </div>
            <br/>
           
                <p className="blog-post-bottom like-icon  " dir="rtl">
                  <span className="badge quote-badge">743</span >  ❤
                   
                </p>
                <p className="category"><small>{element.category}</small></p>
            
            
           
          </div>
        <blockquote className="quote-box">


             <div>
                <p className="quotation-mark" >
                    “
                  
                </p>
                <p className="" >{element.title}</p>
                <hr/>
                <br/>
               
                <p className="quote-text">
                    
             {element.desc} 
                  </p>
                 
                  
           
        
        </div>
        </blockquote>
          </div>
              */
