{/* <div className=" col-8 modal-container overflow- justify-content-center">
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
  <div className="modal-body row mt-2 " dir="rtl">
    <h1>
        لایک شده توسط : 
      <br />
    </h1>
  </div>
  <div className="modal-container row overflow-hidden" dir="rtl">

    <ul>
      {likeList.map((item) => {

          
        // console.log(item);
        return (
          <div className="row">
          <div className="col-md-8">
            <div className="people-nearby">
              <div className="nearby-user">
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                    <img src={logo} alt="user" className="profile-photo-lg" />
                  </div>
                  <div className="col-md-6 col-sm-7">
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
                //     </p> */}
                //   </div>
                //   <div className="col-md-3 col-sm-3">
                //     <button className="btn btn-primary pull-right"  onClick={(e)=>ShowProfile(item.id)} >
                //      مشاهده پروفایل
                //     </button>
                    {/* {
                        <Route path="/publicProfile"  
                        render={()=> <PublicProfile userId={profile.id}  token={profile.token} /> }
                        />
                    } */}
                    {/* {openProfile && <PublicProfile style={{width:"100%", height:"100%"}} userId={profile.id}  token={profile.token} />} */}
                    {/* {setOpenProfile(false)} */}
                  {/* </div>
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
</div> */} 



/*

*/