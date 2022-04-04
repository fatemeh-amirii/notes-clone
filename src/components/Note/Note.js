import { useEffect, useState } from "react";
import React from "react";
import NoteEditor from "../NoteEditor/NoteEditor";
//import "./Note.css";
import axios from "axios";
import image from "./te.jpg";
import {Link} from "react-router-dom"
import "./like.css"

function Note() {
  // states:

  const [category, setCategory] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  //const [date] = useState(new Date());
  const [fullData, setFullData] = useState([]);
  //const [noteId,setNoteId]=useState()

  useEffect(() => {
    console.log(fullData);
    getUserNote();
    // console.log(noteId);
  }, []);

  // functions
  // const getNoteFromEditor = (childData) => {
  //   setNote(childData);
  // };

  const addNote = () => {
    // var axios = require("axios");
    var data = JSON.stringify({
      Desc: note,
      Title: title,
      Category: category,
      Token: localStorage.getItem("token"), //localStorage
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/AddNote",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("Token", response.data.Token);
        // setFullData(response.data.data);
        console.log(response.data.data);
        getUserNote();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getUserNote = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      Token: localStorage.getItem("token"),
    });

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/note/GetNoteListForEachUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setFullData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeNote = (event) => {
    var axios = require("axios");
    var data = JSON.stringify({
      IsClientSide: true,
      noteId: parseInt(event.value),
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
        //setFullData(response.data);
        getUserNote()
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  return (
    <div>
      <section id="contact" className="contact" dir="rtl">
        <div className="container">
          <div className="section-title">
            <h1>تجربه تو</h1>
            <br />
            <p2>تو اونقدر با تجربه هستی که بنویسی</p2>
          </div>

          <div>
            <img src={image} className="img-fluid" alt="" />
          </div>

          <div className="row mt-5 float-right">
            <div className="col-lg-4 float-right">
              <div className="info float-right">
                <div className="address">
                  <i className="bi bi-arrow-down-left-circle float-right "></i>
                  <h4>تجربه تو</h4>
                </div>

                <div className="email">
                  <i className="bi bi-arrow-down-right-circle-fill float-right"></i>
                  <h2 className="text-danger">اینجا</h2>
                </div>

                <div className="phone">
                  <i className="bi bi-arrow-down-left-circle float-right"></i>
                  <h4>ثبت کن</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="form-control"
                      id="name"
                      placeholder="تیتر"
                      required
                    />

                    <div className="form-group mt-3">
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        onChange={(e) => {
                          const category = e.target.value;
                          setCategory(category);
                        }}
                      >
                        <option selected>دسته شغلی</option>
                        <option value="آزاد">آزاد</option>
                        <option value="کارمندی">کارمندی</option>
                        <option value="فریلنسری">فریلنسری</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="اینجا بنویس"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">در حال ارسال </div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        ثبت شد. ممنون که به پیشرفت جامعه فکر میکنی و دغدغه
                        پیشرفت داری
                      </div>
                    </div>
                    <div className="text-center">
                      {/* <button type="submit">ارسال </button> */}
                      <input
                        className="button"
                        type="button"
                        value="ارسال"
                        onClick={addNote}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div dir="rtl" className="area text-center" style={{ marginTop: "8rem" }}>
            <div className="col-12">
              <h2>نوشته های تو</h2>
              <div className="underline"></div>
            </div>
            <div className="like-container">
              <div className="row text-center ">
                {fullData.map((element) => {
                  if (element.isConfirmed) {
                    return (
                      <div key={element.id} id="card-item" className="col-4">
                        <div className="blog-post-action like-header">
                        <div>
                            <p
                              dir="rtl"
                              className="blog-post-bottom h5 float-right">
                              {element.title}
                            </p>
                          </div>
                          <br />

                         
                          <p className="like-category">
                            <small>{element.category}</small>
                          </p>
                        </div>
                        <blockquote className="qoute-box">
                          <div>
                            <p className="qoutation-mark" >
                            “
                           </p>
                            <hr/>
                            <br/>

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
      {/* <section id="team" className="team" dir="rtl">
        <div className="container">
          <div className="section-title">
            <h3>
              نوشته های <span>تو</span>
            </h3>
          </div>

          <div className="row " dir="rtl">
            {fullData.map((element) => {
         
         if(element.isConfirmed){
          return (
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img bg-secondary text-light">
                  <h5>{element.category}</h5>
                  <p>{element.title}</p>
                </div>
                <div className="member-info">
                  <h4 className="text-danger"> {element.desc} </h4>
                  <span> {element.catch} </span>
                  <button
                    type="button"
                    className="btn btn-danger"
                    value={element.id}
                    onClick={(e)=>removeNote(e.target)}
                  >
                    حذف
                  </button>
                  <Link className="btn btn-dark"
                  //pass to new page  url => 
                                              to={{
                                                  pathname:"/editeNote",
                                                  search:  "id="+element.id
                                                
                                              }}>
                                                ویرایش
                                              </Link>
                </div>
              </div>
            </div>
          );
         }else{
           return null
         }
              
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Note;