// import React from 'react'

// function Test() {
//     return (
//    <div>

 
//         <section id="contact" className="contact" dir="rtl" >
//         <div className="container">
  
//           <div className="section-title">
//             <h1>تجربه تو</h1>
//             <br/>
//             <p2>تو اونقدر با تجربه هستی که بنویسی</p2>
//           </div>
  
//           <div>
//             <img src="assets/img/team/te.jpg" className="img-fluid" alt="" />   
//                  </div>
  
//           <div className="row mt-5 float-right">
  
//             <div className="col-lg-4 float-right">
//               <div className="info float-right">
//                 <div className="address">
                  
//                   <i className="bi bi-arrow-down-left-circle float-right "></i>
//                   <h4>تجربه تو</h4>
                  
//                 </div>
  
//                 <div className="email">
//                   <i className="bi bi-arrow-down-right-circle-fill float-right"></i>
//                   <h2 className="text-danger">اینجا</h2>
                  
//                 </div>
  
//                 <div className="phone">
//                   <i className="bi bi-arrow-down-left-circle float-right"></i>
//                   <h4>ثبت کن</h4>
                  
//                 </div>
  
//               </div>
  
//             </div>
//             </div>
  
//             <div className="col-lg-8 mt-5 mt-lg-0">
  
//               <form action="forms/contact.php" method="post" role="form" className="php-email-form">
//                 <div className="row">
//                   <div className="col-md-6 form-group">
//                     <input type="text" name="name" className="form-control" id="name" placeholder="تیتر" required />
             
//                 <div className="form-group mt-3">
                  
//                   <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
//                    onChange={(e) => {
//                     const category = e.target.value;
//                     setCategory(category);
//                   }}>
//                     <option selected>دسته شغلی</option>
//                     <option value="آزاد">آزاد</option>
//                     <option value="کارمندی">کارمندی</option>
//                     <option value="فریلنسری">فریلنسری</option>
//                   </select>
//                 </div>
//                 <div className="form-group mt-3">
//                   <textarea className="form-control" name="message" rows="5" placeholder="اینجا بنویس" value={note}  onChange={setNote(value)} required></textarea>
//                 </div>
//                 <div className="my-3">
//                   <div className="loading">در حال ارسال </div>
//                   <div className="error-message"></div>
//                   <div className="sent-message">ثبت شد. ممنون که به پیشرفت جامعه فکر میکنی و دغدغه پیشرفت داری</div>
//                 </div>
//                 <div className="text-center">
//                     {/* <button type="submit">ارسال </button> */}
//                     <input className="button" type="button" value="ارسال" onClick={addNote} />
//                 </div>
               
//                 </div>
//                 </div>
//               </form>
  
//             </div>
  
//           </div>

//       </section>

     
  
         
//           <section id="team" className="team"dir="rtl">
//             <div className="container">
      
//               <div className="section-title">
                 
//                 <h3>نوشته های <span>تو</span></h3>
               
//               </div>
      
     
//               <div className="row " dir="rtl"> 
//                  {
//           fullData.map((element)=>{
//             const {cat,des,firstName,id,insertTime,isConfirmed,lastName,title,userId}=element
//             return(
//                 <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
//                 <div className="member">
//                   <div className="member-img bg-secondary text-light">
//                     <p >{des}</p>
//                   </div>
//                 <div className="member-info">
//                 <h4 className="text-danger">تیتر متن دوم</h4>
//                 <span>دسته متن دوم</span>
//                 <button type="button" className="btn btn-danger">حذف</button>
//               <button type="button" className="btn btn-dark">آپدیت</button>
//               </div>
//               </div>
//                 </div>
      
//           )
//       }
//               </div>
     
//             </div>
//           </section>
//        </div>
          
//     )
// }

// export default Test
