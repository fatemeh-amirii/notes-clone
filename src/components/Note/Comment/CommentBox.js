import React, { useEffect, useState } from "react";
import "./CommentBox.css";

function CommentBox({noteId}) {
  //states
  const [commentValue, setCommentValue] = useState("");
  const [commentList, setCommentList] = useState([]);
  // const [count,setCount]=useState(false)
    



  useEffect(() => {
    showList();
    console.log(commentValue);
    console.log("______________________________")
    console.log(noteId)
    console.log("______________________________")
  }, [commentValue]);

  const showList = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      NoteId:noteId,
      Token:localStorage.getItem("token"),
    });

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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submitCommentLine = (e) => {
    // e.preventDefault();
    addComment();
    // showList()
  };

  const enterCommentLine = (e) => {
   
    if(e.charCode === 13){
    addComment();
    //   showList()
    }
  };

  const addComment = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      NoteId:noteId,
      UserId: parseInt(localStorage.getItem("userId")),
      Comments: commentValue,
      Token:localStorage.getItem("token"),
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
          setCommentValue("")
      })
      .catch(function (error) {
        console.log(error);
      });
     showList();
  };

  const enableCommentButton = () => {
    return commentValue ? false : true;
  };

  const changeCommentButtonStyle = () => {
    return commentValue ? "comments-button-enabled" : "comment-button-disabled";
  };

 
  return (
    <>
      <div className="container justify-content-center mt-5 border-left border-right comment-box">
        <div className="d-flex justify-content-center pt-3 pb-2">
          {" "}
          <input
            type="text"
            name="text"
            onKeyPress={(e) => enterCommentLine(e)}
            placeholder="+ Add a comment"
            id="comment-input"
            onChange={(e) => setCommentValue(e.target.value)}
            value={commentValue}
            className="form-control addtxt"
          />
          <button
            type="submit"
            className="comment-button"
            id={changeCommentButtonStyle}
            disabled={enableCommentButton}
            onClick={(e) => submitCommentLine(e)}
          >
            Post
          </button>
        </div>

        {/* comment list */}

        {commentList.map((element) => {
          return (
            <div className="d-flex justify-content-center py-2">
              <div className="second py-2 px-2">
                {element.comments}
                {/* <span className="text1">{element.comments}</span> */}
                <div className="d-flex justify-content-between py-1 pt-2">
                  <div>
                    <img src="https://i.imgur.com/AgAC1Is.jpg" width="18" />
                    <span className="text2">{element.userName}</span>
                  </div>
                  <div>
                    <span className="text3">Upvote?</span>
                    <span className="thumbup">
                      <i className="fa fa-thumbs-o-up"></i>
                    </span>
                    <span className="text4">3</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommentBox;

/*
    <div className="container justify-content-center mt-5 border-left border-right">
        <div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="+ Add a note"    value={comment} onChange={(e)=>setComment(e.target.valye)}   className="form-control addtxt"/> </div>
      
        <div className="d-flex justify-content-center py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18"/><span className="text2">Martha</span></div>
                    <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18"/><span className="text2">Curtis</span></div>
                    <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center py-2">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
                <div className="d-flex justify-content-between py-1 pt-2">
                    <div><img src="https://i.imgur.com/gishFbz.png" width="18" height="18"/><span className="text2">Beth</span></div>
                    <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
                </div>
            </div>
        </div>
      
    </div>
 
*/
