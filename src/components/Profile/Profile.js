import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Cities from "./cities.json";
import Provinces from "./provinces.json";
import "./Profile.css";
import { Link, useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();
  const [provinceId, setProvince] = useState();
  const [image, setImage] = useState(null);
  const [resume,setResume]=useState(null)
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState();
  const [edu, setEdu] = useState();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState();
  const [age, setAge] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobStatus, setJStatus] = useState("");
  const [name, setName] = useState("");
  const [fname, setfName] = useState("");
  const [cityNum, setCityNum] = useState();
  const [desc, setDesc] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedIn] = useState("");

  useEffect(() => {
    console.log(image);
    console.log(result);
  }, []);

  const handleConfirm = (e) => {
    e.preventDefault();
    var axios = require("axios");
    var FormData = require("form-data");
    var fs = require("fs");
    var data = new FormData();
    data.append("Age", age);
    data.append("JobType", category);
    data.append("JobStatus", jobStatus);
    data.append("EducationNum", edu);
    data.append("City", cityNum);
    data.append("Village", cityNum);
    data.append("ProfileDesc", desc);
    data.append("Linkdin", linkedin);
    data.append("Instagram", instagram);
    data.append("JobTitle", "programmer");
    data.append("pic_file", image) ;
    data.append("height", "300");
    data.append("width", "300");
    data.append("quality", "500");
    data.append("IsClientSide", "true");
    data.append("Token","6219fb1e-ce41-4f15-b755-ef30234760a4");
    data.append("UserId", localStorage.getItem("userId"));

    var config = {
      method: "post",
      url: "https://api.jobexp.ir/api/user/SetProfile",
      headers: {
        ...data,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        //  history.push("/")
        setResult(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      //get the file that you actually selected..so get the first file that you suspected because somtimes you can click multiple files
      setImage(e.target.files[0]);
      console.log(image);
    }
  };
  
  const handleResume=(e)=>{
    if (e.target.files[0]) {
      //get the file that you actually selected..so get the first file that you suspected because somtimes you can click multiple files
      setResume(e.target.files[0]);
      console.log(resume);
    }
  }

  return (
    <div className="main-content rtl ">
      {/* Top Navbar */}

      <nav
        className="navbar-p navbar-top navbar-expand-md navbar-dark rtl "
        id="navbar-main"
      >
        <div className="container-fluid-p ">
          {/* Brand */}

          {/* End Brand */}

          {/* User */}
          <ul className="navbar-nav align-items-center d-none d-md-flex">
            <li className="nav-item dropdown">
              <a
                className="nav-link pr-0"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media align-items-center">
                  <span className="avatar  avatar-sm rounded-circle">
                    <img
                      alt="Avatar Image"
                      src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                    />
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-wight-bold ">
                      Mina Haseli
                    </span>
                  </div>
                </div>
              </a>

              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">خوش امدید!</h6>
                </div>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span> پروفایل من</span>
                </a>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span> پروفایل من</span>
                </a>
                <a href="../examples/profile.html" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span> پروفایل من</span>
                </a>
              </div>
            </li>
          </ul>

          {/* End User */}
        </div>
      </nav>
      {/* End Navbar */}
      {/* Header */}
      <div
        className=" header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            " url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8"></span>

        {/* Header container */}
        <div className="container-fluid-p d-flex align-items-center ">
          <div className="row">
            <div className="col-lg-7 col-md-10 ">
              <h1 className="display-2 text-white ">سلام مینا</h1>
              <p className="text-white mt-0 mb-5">
                شرکت طراحی سایت و برنامه نویسی دات وب با ارائه خدمات طراحی سایت
                و طراحی اپلیکیشن و سئو و بهینه سازی وب سایت کمک بسیار به کسب و
              </p>
              <div className="btn-p btn-info">
                <label for="avatar" className="custom-file-upload">
                  آپلود فایل
                </label>
                <input
                  id="avatar"
                  className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block  "
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Header container */}
      {/* End Header */}

      {/* Page Content */}
      <div classsName="col d-flex justify-content-center ">
        <div className="container-fluid-p mt--7  ml-md-auto">
          {/* <div className="row" style={{backgroundColor:"red"}}> */}
          {/* <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0"></div> */}

          <div className="row  justify-content-center p-row ">
            <div className="col-xl-8 order-xl-1  text-center">
              <div className="card-p bg-secondary shadow">
                <div className="card-p-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">حساب من</h3>
                    </div>
                    <div className="col-4 text-right">
                      <a href="#" className="btn-p btn-sm btn-primary">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-p-body  ">
                  <form onSubmit={(e) => handleConfirm(e)}>
                    <h6 className="heading-small text-muted mb-4">
                      اطلاعات کاربر
                    </h6>

                    <div className="pl-lg-4 jumbotron-p">
                      {/* <div className="row ">
                      <div className="col-lg-6">
                        <div className="form-group focused"  onChange={(e)=>setUserName(e.target.value)} >
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            نام کاربری
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            placeholder="نام کاربری"

                          />
                        </div>
                      </div>
                     
                    </div> */}
                      <div className="row">
                        <div className="col-lg-4">
                          <div
                            className="form-group focused"
                            onChange={(e) => setName(e.target.value)}
                          >
                            <label
                              className="form-control-label float-right"
                              for="input-first-name"
                            >
                              نام:
                            </label>
                            <input
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              placeholder="نام"
                           
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="form-group focused"
                            onChange={(e) => setfName(e.target.value)}
                          >
                            <label
                              className="form-control-label float-right"
                              for="input-last-name"
                            >
                              نام خانودگی:
                            </label>
                            <input
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              placeholder="Last name"
                             
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="form-group focused"
                            onChange={(e) => setAge(e.target.value)}
                          >
                            <label
                              className="form-control-label float-right"
                              for="input-age"
                            >
                              سن:
                            </label>
                            <input
                              type="number"
                              id="input-age"
                              className="form-control form-control-alternative"
                              placeholder="سن"
                            
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="form-group"
                            onChange={(e) => setInstagram(e.target.value)}
                          >
                            <label
                              className="form-control-label float-right"
                              for="input-email"
                           
                            >
                              اینستاگرام:
                            </label>
                            <input
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative float-right"
                              placeholder="اینجا وارد کنید"
                            
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div
                            className="form-group"
                            onChange={(e) => setLinkedIn(e.target.value)}
                          >
                            <label
                              className="form-control-label float-right"
                              for="input-email"
                            >
                              لینکدین:
                            </label>
                            <input
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder="اینجا وارد کنید"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row jumbotron-p">
                      <div
                        className="col-lg-4"
                        onChange={(e) => setEdu(e.target.value)}
                      >
                        <div class="form-check">
                          <h6 className="heading-small text-muted mb-4">
                            مقطع تحصیلی
                          </h6>
                          <input
                            name="options"
                            type="radio"
                            class="form-check-input"
                            id="radio1"
                            value={1}
                          />
                          دیپلم
                          <label class="form-check-label" for="radio1"></label>
                        </div>
                        <div class="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio2"
                            name="options"
                            value={2}
                          />
                          کارشناسی
                          <label
                            className="form-check-label"
                            for="radio2"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio3"
                            name="options"
                            value={3}
                          />
                          کارشناسی ارشد
                          <label
                            className="form-check-label"
                            for="radio3"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="radio4"
                            className="form-check-input"
                            name="options"
                            value={4}
                          />
                          دکترا
                          <label
                            className="form-check-label"
                            for="radio4"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="radio5"
                            className="form-check-input"
                            name="options"
                            value={4}
                          />
                          سایر
                          <label
                            className="form-check-label"
                            for="radio5"
                          ></label>
                        </div>
                      </div>
                    </div>

                      
                    <div className="pl-lg-4 jumbotron-p mb-2 pb-2">
                      <h6 className="heading-small text-muted mb-4 ">
                        دانشگاه محل   تحصیل
                      </h6>
                      <div className="form-group focused">
                        <label> دانشگاه محل تحصیل  </label>
                        <textarea
                          rows="4"
                          className="form-control form-control-alternative "
                          placeholder=" "
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        >
                         
                        </textarea>
                      </div>
                    </div>

                    {/* <hr className="my-4" /> */}
                    <div className="row jumbotron-p ">
                      <div
                        className="col-lg-4"
                        onClick={(e) => setCategory(e.target.value)}
                      >
                          <h6 className="heading-small text-muted mb-4">
                            حیطه شغلی
                          </h6>
                        <div className="form-check">
                          <input
                            name="category"
                            type="radio"
                            className="form-check-input"
                            value={1}
                            id="radio1"
                          />
                          ازاد
                          <label
                            className="form-check-label"
                            for="radio1"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio2"
                            name="category"
                            value={2}
                          />
                          فریلنسری
                          <label
                            className="form-check-label"
                            for="radio2"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio3"
                            name="category"
                            value={3}
                          />
                          کارمندی
                          <label
                            className="form-check-label"
                            for="radio3"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio4"
                            name="category"
                            value={4}
                          />
                          سایر
                          <label
                            className="form-check-label"
                            for="radio4"
                          ></label>
                        </div>
                      </div>
                     
                    </div>

                    <div className="pl-lg-4 jumbotron-p mb-2 pb-2">
                      <h6 className="heading-small text-muted mb-4 ">
                        درباره ی من
                      </h6>
                      <div className="form-group focused">
                        <label>مهارت های من</label>
                        <textarea
                          rows="4"
                          className="form-control form-control-alternative "
                          placeholder=" اینجا بنویسید ..."
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        >
                         
                        </textarea>
                      </div>
                    </div>

                    <div className="row jumbotron-p ">
                      <div
                        className="col-lg-4"
                        onClick={(e) => setJStatus(e.target.value)}
                      >
                          <h6 className="heading-small text-muted mb-4">
                            وضعیت شغلی
                          </h6>
                        <div className="form-check">
                          <input
                            name="status"
                            type="radio"
                            className="form-check-input"
                            value={1}
                            id="radio1"
                          />
                          مشغول به کار
                          <label
                            className="form-check-label"
                            for="radio1"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio2"
                            name="status"
                            value={2}
                          />
                          به دنبال کار
                          <label
                            className="form-check-label"
                            for="radio2"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio3"
                            name="status"
                            value={3}
                          />
                          کارآموز
                          <label
                            className="form-check-label"
                            for="radio3"
                          ></label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio4"
                            name="status"
                            value={4}
                          />
                          سایر
                          <label
                            className="form-check-label"
                            for="radio4"
                          ></label>
                        </div>
                      </div>
                    </div>

                    {/* Location */}

                    <div className="pl-lg-4 jumbotron-p">
                      <h6 className="heading-small text-muted mb-4">
                        اطلاعات محل سکونت
                      </h6>
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="form-group focused">
                            {/* <label className="form-control-label" for="input-address">نشانی</label> */}

                            <select
                              className="form-control-label"
                              onChange={(e) => setProvince(e.target.value)}
                            >
                              {Provinces.map((province, i) => (
                                <option value={province.id} key={i}>
                                  {province.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group focused">
                            <select
                              className="form-control-lable"
                              style={{ width: "134px" }}
                              onChange={(e) => setCityNum(e.target.value)}
                            >
                              {Cities.filter(
                                (city) => city.province_id == provinceId
                              ).map((element) => (
                                <option value={element.id}>
                                  {element.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-lg-4 jumbotron-p resume mb-2 pb-2">
                      <h6 className="heading-small text-muted mb-4 ">
                        رزومه 
                      </h6>
                      <div className="form-group focused">
                      <input
                  id="resume"
                  className="h4 mb-0 text-white text-uppercase resume-btn d-none d-lg-inline-block " 
                  type="file"
                  onChange={(e) => handleResume(e)}
                />
                        
                      </div>
                    </div>

                    {/* Description */}
                
                    {/* <Link className="btn btn-info " to="/"  onClick={(e)=>handleConfirm} >
                                تایید
                                
                  </Link> */}
                    <input
                      type="submit"
                      className="btn-p btn-info"
                      value="تایید"
                      onClick={(e) => handleConfirm(e)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Page Content */}
    </div>
  );
}

export default Profile;
