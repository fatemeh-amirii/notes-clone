import React, { useState,useRef  } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";
import { optionCSS } from "react-select/dist/declarations/src/components/Option";
import Cities from "./cities.json"
import Provinces from"./provinces.json"




function Profile() {

  const [provinceId,setProvince]=useState()
    const [city,setCity]=useState()

  const cityHandler=()=>{
     Cities.map((element,i)=>(
     if( element.province_id === provinceId) {} 
          <option value={element.id} >{element.name}</option>
      
     ))


  }



  useEffect(()=>{
    console.log(provinceId);
   
  } ,[provinceId])



  return (
    <div className="main-content">
      {/* Top Navbar */}

      <nav
        className="navbar navbar-top navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div className="container-fluid">
          {/* Brand */}
          <a
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block "
            href="#"
          >
            User Profile
          </a>
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
                    <span className="mb-0 text-sm font-wight-bold">
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
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">سلام مینا</h1>
              <p className="text-white mt-0 mb-5">
                شرکت طراحی سایت و برنامه نویسی دات وب با ارائه خدمات طراحی سایت
                و طراحی اپلیکیشن و سئو و بهینه سازی وب سایت کمک بسیار به کسب و
              </p>
              <a href="#" className="btn btn-info">
                ویرایش پروفایل
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* End Header container */}
      {/* End Header */}

      {/* Page Content */}
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img
                        className="rounded-circle"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        alt="content"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <a className="btn btn-sm btn-info mr-4" href="#">
                    {" "}
                    وصل شدن{" "}
                  </a>
                  <a className="btn btn-sm btn-default float-right" href="#">
                    پیام دادن{" "}
                  </a>
                </div>
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description"> دوستان</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">دیدگاه</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3>
                    Jessica Jones<span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2"></i>شیراز ایران
                  </div>
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Solution
                  Manager - Creative Tim Officer
                </div>
                <div>
                  <i className="ni education_hat mr-2"></i>دانشگاه خلیج فارس
                  بوشهر{" "}
                </div>
                <hr className="my-4" />
                <p>
                  Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
                  Murphy — writes, performs and records all of his own music.
                </p>
                <a href="#">نمایش بیشتر</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">حساب من</h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#" className="btn btn-sm btn-primary">
                    Settings
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">اطلاعات کاربر</h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
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
                    <div class="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" for="input-email">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          id="input-email"
                          className="form-control form-control-alternative"
                          placeholder="jesse@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label
                          className="form-control-label"
                          for="input-first-name"
                        >
                          نام
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
                      <div className="form-group focused">
                        <label
                          className="form-control-label"
                          for="input-last-name"
                        >
                          نام خانودگی
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
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-age">
                          سن
                        </label>
                        <input
                          type="number"
                          id="input-age"
                          className="form-control form-control-alternative"
                          placeholder="سن"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />

                {/* Location */}

                <h6 className="heading-small text-muted mb-4">
                  {" "}
                  اطلاعات تماس{" "}
                </h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group focused">
                        {/* <label className="form-control-label" for="input-address">نشانی</label> */}

                        <select  onChange={(e)=>setProvince(e.target.value)}  > 
                        {
                          Provinces.map((province,i)=>(
                            <option  value={province.id} key={i} >{province.name}</option>
                          ))
                        }
                        </select>
                        <select>

                          {/* {
 Cities.map((element)=>(
  
if(element.province_id===provinceId)
retu
)) */}

                          }
                        </select>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* End Page Content */}
    </div>
  );
}

export default Profile;
