import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";




import JobMenu from "./JobMenu";

function Home() {
  const [itemImages, setItemImages] = useState(JobMenu);
  const history=useHistory()

  //functions
  const filterItem=(newCategory)=>{
    const updatedItems=JobMenu.filter((currentElement)=>{
          return currentElement.category===newCategory
    })
    setItemImages(updatedItems)

  }

  const openAllNotes=()=>{
    history.push("/ShowNotes")
  }

  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <h1>تجارب شما مارو میسازه</h1>
          <section id="cta" className="cta" style={{background:"none"}}>
          <div className="container"  style={{display:"block"}}>
         
            <div className="text-center"  >
            <a className="cta-btn" onClick={()=>history.push("/ShowNotes")}>بانک تجارب</a>
            </div>
          </div>
        </section>
       
        </div>
      </section>

      <main id="main">
        <section id="about" className="about"  >
          <div className="container" >
            <div className="section-title">
              <h3>
                ما <span>کی هستیم؟</span>
              </h3>
              <p>
                ما یک تیم دونفره هستیم و ایده این سایت از اونجایی به ذهنمون رسید
                که نیاز به دونستن تجربه دیگران رو تو خودمون احساس کردیم. راستش
                هرکسی لازم داره از تجربیات کسی که راهی که تو سرش داره رو رفته
                درس بگیره. چقدر خوب میشه که تجربیات خودمون رو اینجا مکتوب کنیم و
                به هم کمک کنیم.
              </p>
            </div>
          </div>
        </section>
    {/* <section></section> */}
        <section id="cta" className="cta">
          <div className="container" style={{display:"block"}}>
            <div className="text-center">
              <h3>تجربه تو چی میگه</h3>
              <p> این موهارو که تو آسیاب سفید نکردی</p>
              <a className="cta-btn" href="#">
                تو برایمان بگو
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container" style={{display:"block"}}>
            <div className="section-title">
              <h3 onClick={openAllNotes} >
                مشاغل <span>شما</span>
              </h3>
              <p>
                اینجا میتونی دسته های مختلف مشاغل روببینی و تجربیات بقیه رو
                بخونی
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*"  onClick={()=>setItemImages(JobMenu)}>
                    همه
                  </li>
                  <li data-filter=".filter-app"  onClick={()=>filterItem("freelance")} >فریلنسری ها</li>
                  <li data-filter=".filter-card"  onClick={()=>filterItem("azad")} >شغل آزاد</li>
                  <li data-filter=".filter-web"  onClick={()=>filterItem("employee")} >کارمندی</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
              {
              itemImages.map((element) => {
                const { id, image, category ,description} = element;

                return (
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <img
                    src={image}
                    className="img-fluid"
                    alt=""
                  />
                  
                </div>

                );
              })
              }

             
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>jobExp</h3>
                <br />
                <p>
                  Iran Shiraz
                  <strong>Phone:</strong> +98 938 887 3136
                  <br />
                  <strong>Email:</strong> info@jobExp.ir
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              Copyright{" "}
              <strong>
                <span>jobExp</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
