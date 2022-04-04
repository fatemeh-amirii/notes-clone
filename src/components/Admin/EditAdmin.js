import { useEffect, useState } from "react";
import axios from "axios";

import queryString, {parse} from "query-string";
import { useHistory } from "react-router-dom";



function EditAdmin() {
    const history=useHistory()
    const [category, setCategory] = useState(" ");
    const [firstName, setFirstName] = useState(" ");
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    //const [date] = useState(new Date());
    const [fullData, setFullData] = useState([]);
    //const [noteId,setNoteId]=useState()
  

    useEffect(()=>{
        let value = queryString.parse(window.location.search);
        var axios = require('axios');
    var data = JSON.stringify({
      "IsClientSide": false,
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
      "IsClientSide": false,
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
      history.push("/admin")
    })
    .catch(function (error) {
      console.log(error);
    });
      };
    
    


    return (
        <div>
            <div>
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
                    {/* <div className="my-3">
                      <div className="loading">در حال ارسال </div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        ثبت شد. ممنون که به پیشرفت جامعه فکر میکنی و دغدغه
                        پیشرفت داری
                      </div>
                    </div> */}
                    <div className="text-center">
                      {/* <button type="submit">ارسال </button> */}
                      <input
                        className="button"
                        type="button"
                        value="ارسال"
                        onClick={updateNote}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
        </div>
    )
}

export default EditAdmin
