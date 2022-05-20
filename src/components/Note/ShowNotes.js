import React, { useEffect, useState } from "react";
import "./ShowNotes.css";
import "./like.css";
import logo from "../Header/logo.png";
import Modal from "react-modal";
import { Route, useHistory } from "react-router-dom";
import "./Modal.css";
import PublicProfile from "../Profile/PublicProfile";
// import { useNavigate } from "react-router-dom";
import img from "./bg.jpg";
import { FaRegComment } from "react-icons/fa";
import CommentBox from "./Comment/CommentBox";
import { element } from "prop-types";

function ShowNotes() {
  const bg = {
    overlay: {
      background: "rgba(0, 0, 0, 0.1)",
      
  
    }
  };
 
  //states
  const history = useHistory();
  const [fullData, setData] = useState([]);
  const [category, setCategory] = useState();
  // const [isLike,setIsLike]=useState(false);
  const [likeList, setLikeList] = useState([]);
  const [show, setShow] = useState(false);
 const [openCommentBox, setOpenCommentBox] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [profile, setProfile] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [noteId, setNoteId] = useState();
  const [hashtag,setHashtag]=useState()
  //comment part

  const handleOpenCommentBox = (id) => {
    setOpenCommentBox(true);
    enterCommentLine();
    setNoteId(id);
    showCommentList(id);
    console.log("this is note id from handleComponent");
    console.log(id);
    // console.log("open comment box");
    // console.log(openCommentBox);
  };

  const handleCloseCommentBox = () => {
    setOpenCommentBox(false);

    console.log("open comment box");
    // setCommentList([])
    // console.log(commentList);

    // console.log(openCommentBox);
  };

  const submitCommentLine = () => {
    // e.preventDefault();
    console.log("submit comment line");
    addComment();
    showCommentList(noteId);
  };

  const enterCommentLine = (e) => {
    // console.log(e.target)
    // console.log("enter comment line");
    // if(e.charCode === 13){
    // addComment();
    //   // showList()
    // }
  };
  const showList = () => {
    console.log("show list");
    console.log(noteId);
    var axios = require("axios");
    var data = JSON.stringify({
      NoteId: parseInt(noteId),
      Token: localStorage.getItem("token"),
    });
    console.log(data);
    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/CommentList",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCommentList(response.data.data);

        //   console.log(commentList)
        // setNoteId(0)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showCommentList = (id) => {
    console.log("show list");
    console.log(id);
    var axios = require("axios");
    var data = JSON.stringify({
      NoteId: parseInt(id),
      Token: localStorage.getItem("token"),
    });
    console.log(data);
    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/CommentList",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCommentList(response.data.data);

        //   console.log(commentList)
        // setNoteId(0)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addComment = () => {
    // console.log("this i note id");
    // console.log(id);
    var axios = require("axios");
    var data = JSON.stringify({
      NoteId: noteId,
      UserId: parseInt(localStorage.getItem("userId")),
      Comments: commentValue,
      Token: localStorage.getItem("token"),
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/AddComment",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCommentValue("");
      })
      .catch(function (error) {
        console.log(error);
      });
    showCommentList(data.NoteId);
  };

  const enableCommentButton = () => {
    return commentValue ? false : true;
  };

  const changeCommentButtonStyle = () => {
    return commentValue ? "comments-button-enabled" : "comment-button-disabled";
  };

  //End Comment

  useEffect(() => {
    console.log(fullData);

    var axios = require("axios");
    var data = JSON.stringify({
      IsClientSide: true,
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
        console.log(JSON.stringify(response.data));
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
      IsClientSide: true,
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
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    //_________________________________________________

    var axios = require("axios");
    var data = JSON.stringify({
      IsClientSide: true,
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
        console.log(JSON.stringify(response.data));
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //_______________________________________________
  //hashtag
  const hashtagList=()=>{

  }

  ///////////////////////////////////////////////

  const handleOpenLikeList = (listOfLike) => {
    setLikeList(listOfLike);
    setShow(true);
    // console.log(likeList);
  };

  const handleCloseLikeList = () => {
    setShow(false);
    setOpenProfile(false);
  };
  /////////////////////
  const ShowProfile = (id) => {
    likeList.forEach((item) => {
      if (item.id === id) {
        setProfile(item);
        // setOpenProfile(true)
        // console.log("this is showing profile");
        // console.log(profile);

        history.push({
          pathname: "/publicProfile",
          state: {
            //location state
            userId: item.id,
            token: item.token,
          },
        });
        // navigate("/publicProfile",{state:{userId:profile.id,token:profile.token}})
      }
    });
  };
  //___________________________________
//add tag
// const addHashtag=()=>{
//   var axios = require('axios');
// var data = JSON.stringify({
//   tagName: hashtag ,
//   postId: element.id,
//   token: localStorage.getItem("token")
// });

// var config = {
//   method: 'post',
//   url: 'https://api.jobexp.ir/api/note/AddTag',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
// }
  

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

          <div className="authors" id="authors">
            <div className="bg-light jumbotron">
              <div className="col-12 text-center">
                <h2 className="title"> نوت های شما</h2>
                <div className="underline"></div>
              </div>
              <div className="container text-center py-3">
                <div className="row ">
                  {fullData.map((element) => {
                    if (element.isConfirmed) {
                      return (
                        <div className="col-lg-4 col-md-3 author mt-5">
                          <div className="card flex">
                            <div className="card-body body-card ">
                              <img
                                src={img}
                                className="rounded-circle w-50 img-fluid"
                                alt="avatar"
                              />
                              <div className="note-p" >

                              <h4>
                                {element.firstName} {element.lastName}
                              </h4>
                              <h5> {element.category} </h5>

                              <p>
                                {element.desc}
                                {element.desc}
                              </p>
                              </div>

                              <div className=" d-flex flex-row justify-content-center box w-50  d-inline-block " >
                                <div
                                  className="p-2 like-icon"
                                  style={
                                    element.isLiked
                                      ? { color: "rgba(247, 31, 71, 0.63)" }
                                      : { color: "black" }
                                  }
                                  onClick={(e) => likeNote(element.id)}
                                >
                                   ❤
                                </div>
                                <p
                                  className="p-3 like-number"
                                  onClick={() =>
                                    handleOpenLikeList(element.likeUserList)
                                  }
                                >
                                  <span>{element.likeNum}</span>
                                </p>
                                <div className="modal-dialog modal-lg">
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
                                          // console.log(item);
                                          return (
                                            <div className="rowjustify-content-center rtl">
                                              <div className="col-md-8">
                                                <div className="people-nearby">
                                                  <div className="nearby-user">
                                                    <div className="row">
                                                      <div className="col-md-2 col-sm-2">
                                                        <img
                                                          src={logo}
                                                          alt="user"
                                                          className="profile-photo-lg"
                                                        />
                                                      </div>
                                                      <div className="col-md-7 col-sm-7">
                                                        <h5>
                                                          <a
                                                            href="#"
                                                            className="profile-link"
                                                          >
                                                            {item.firstName}{" "}
                                                            {item.lastNmae}
                                                          </a>
                                                        </h5>

                                                        {/* <p className="text-muted">
                                                  500m away
                                                </p> */}
                                                      </div>
                                                      <div className="col-md-3 col-sm-3">
                                                        <button
                                                          className="btn btn-primary pull-right myButton"
                                                          onClick={(e) =>
                                                            ShowProfile(item.id)
                                                          }
                                                        >
                                                          مشاهده پروفایل
                                                        </button>
                                                        <Route
                                                          path="/publicProfile"
                                                          render={() => (
                                                            <PublicProfile
                                                              userId={
                                                                profile.id
                                                              }
                                                              token={
                                                                profile.token
                                                              }
                                                            />
                                                          )}
                                                        />
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

                                <div className="p-2">
                                  <a
                                    role="button"
                                    value={element.id}
                                    onClick={(e) => {
                                      handleOpenCommentBox(element.id);
                                    }}
                                  >
                                    <FaRegComment />
                                    {/* Comment */}
                                  </a>
                                </div>
                                <div className="row"   >
                                <Modal
                                  className=" comment-modal mt-5 justify-content-center "
                                  isOpen={openCommentBox}
                                  onRequestClose={handleCloseCommentBox}
                                  size="lg"
                                  aria-labelledby="contained-modal-title-vcenter"
                                  centered
                                  ariaHideApp={false}
                                  style={bg}
                                  parentSelector={() =>
                                    document.querySelector("#root")
                                  }
                                >
                                  <div className="container justify-content-center mt-5 border-left border-right comment-box">
                                    <div className="d-flex  justify-content-center pt-3 pb-2">
                                      <input
                                        type="text"
                                        name="text"
                                        autocomplete="off"
                                        onKeyPress={(e) =>
                                          enterCommentLine(e, element)
                                        }
                                        placeholder="+ نظر شما"
                                        id="comment-input"
                                        onChange={(e) =>
                                          setCommentValue(e.target.value)
                                        }
                                        value={commentValue}
                                        className="form-control addtxt"
                                      />
                                      <button
                                        // type="submit"
                                        className="comment-button btn-1"
                                        id={changeCommentButtonStyle}
                                        // disabled={enableCommentButton}
                                        onClick={() => submitCommentLine()}
                                      >
                                        ارسال
                                      </button>
                                    </div>

                                    {commentList.map((element) => {
                                      return (
                                        <div className=" d-flex justify-content-center ml-2 py-2">
                                          <div className="second py-2 px-2">
                                            {element.comments}

                                            <div className="d-flex justify-content-between py-1 pt-2">
                                              <div>
                                                <img
                                                  src="https://i.imgur.com/AgAC1Is.jpg"
                                                  width="18"
                                                />
                                                <span className="text2">
                                                  {element.userName}
                                                </span>
                                              </div>
                                            
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  <button
                                    className="button raise"
                                    onClick={handleCloseCommentBox}
                                  >
                                    X
                                  </button>
                                </Modal>
                                </div>
                              
                               
                              </div>
                                
                            
                            </div>
                            <div className="card-footer hashtag "   >
                                <p  contenteditable="true" value={hashtag} onChange={(e)=>setHashtag(e.target.value)} ><span>#</span>برچسب
                              </p>
                             
                                </div>
                          </div>
                        </div>
                      );
                    } else return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowNotes;
