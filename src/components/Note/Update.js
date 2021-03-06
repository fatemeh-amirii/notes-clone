import { useEffect, useState } from "react";
import axios from "axios";
import image from "./te.jpg";
import queryString, {parse} from "query-string";
import { useHistory } from "react-router-dom";



function Update() {
    const history=useHistory()
  const [category, setCategory] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  //const [date] = useState(new Date());
  const [fullData, setFullData] = useState([]);
  //const [noteId,setNoteId]=useState()

useEffect(()=>{
  //
    let value = queryString.parse(window.location.search);
    var axios = require('axios');
var data = JSON.stringify({
  "IsClientSide": true,
  "noteId": parseInt(value.id),
  "Token": localStorage.getItem("token")
});

var config = {
  method: 'post',
  url: 'https://api.jobexp.ir/api/note/GetNote',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
// setFullData()
})
.catch(function (error) {
  console.log(error);
});
},[])



  //add note
  const updateNote = () => {
    
    var axios = require('axios');
    let value = queryString.parse(window.location.search);
var data = JSON.stringify({
  "IsClientSide": true,
  "Desc": note,
  "Title": title,
  "noteId": parseInt(value.id),
  "Category": category,
  "Token": localStorage.getItem("token")
});

var config = {
  method: 'post',
  url: 'https://api.jobexp.ir/api/note/UpdateNote',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  history.push("/note")
})
.catch(function (error) {
  console.log(error);
});
  };




    return (
        <div>
                <div className="col-lg-8 mt-5 mt-lg-0"  >
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
                      placeholder="????????"
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
                        <option selected>???????? ????????</option>
                        <option value="????????">????????</option>
                        <option value="??????????????">??????????????</option>
                        <option value="????????????????">????????????????</option>
                      </select>
                    </div>
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="?????????? ??????????"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    {/* <div className="my-3">
                      <div className="loading">???? ?????? ?????????? </div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        ?????? ????. ?????????? ???? ???? ???????????? ?????????? ?????? ?????????? ?? ??????????
                        ???????????? ????????
                      </div>
                    </div> */}
                    <div className="text-center">
                      {/* <button type="submit">?????????? </button> */}
                      <input
                        className="button"
                        type="button"
                        value="??????????"
                        onClick={updateNote}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
    )
}

export default Update
