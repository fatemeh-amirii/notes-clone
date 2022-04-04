import { element } from "prop-types";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Success.css";
import messagePic from "./message.png"



function Success() {
  const history = useHistory();
  const [fullData, setFullData] = useState([]);
  const [isActiveConfirm, setIsActiveConfirm] = useState();

  useEffect(() => {
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
        console.log(response.data);
        setFullData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleAlert = () => {
    if (isActiveConfirm) {
      setIsActiveConfirm(false);
    } else if (!isActiveConfirm) {
      setIsActiveConfirm(true);
    }
  };

  const handleClose = () => {
    history.push("/note");

    //and add note to user Older note
  };
  return (
    <section id="team" className="team" style={{float:"none"}}>
      <div className="container" >
        <div className="section-title">
          <h4 className="payam">پیام</h4>
        <hr className="hr-text" data-content="And"/>
        </div>

        <div className="row " >
          <div className="row notification-container" dir="rtl">
            <div className="card col-sm-6 cart"     >
              <div className=" header fixed-top text-center" style={{ position: "absolute" ,direction: 'rtl' }}>
                <h5 className="blog-post-action card-header">پیام ادمین</h5>
                <br />
              </div>

              <div className="card-body " style={{ position: "absolute" }}>
                {fullData.map((element) => {
                  if (element.isConfirmed) {
                    return (
                      <div>
                        <div
                          className="alert alert-success alert-dismissible fade show alert-box"
                          role="alert"
                        >
                          <h5 className="card-title">تاییدیه</h5>
                          <p className="card-text">
                            تجربه شما با تیتر&nbsp;{element.title}&nbsp; با
                            موفقیت در سایت منتشر شد
                          </p>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                       
                      </div>
                    );
                  } else if (!element.isConfirmed) {
                    return (
                      <div className="alert alert-secondary alert-box" role="alert">
                        <br />
                        <h5 className="card-title">در انتظار تایید</h5>
                        <p className="card-text">
                          تجربه شما با تیتر &nbsp;{element.title}&nbsp;در انتظار
                          تایید ادمین است
                        </p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                          // onClick={(e)=>handleAlert()}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="card col-sm-6 messages-pic " >
              <img src={messagePic} alt="messages" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
/*

<div class="m-4">
    <!-- Success Alert -->
    <div class="alert alert-success alert-dismissible fade show">
        <strong>Success!</strong> Your message has been sent successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>


 */
