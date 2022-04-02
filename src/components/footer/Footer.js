import React from "react";
import './footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer pt-5">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-5">
            <div className="section-title text-center">
              <h1 className="fw-bold text-white">Contact</h1>
              <h3 className="mb-5">Contact us to know more info about your favourite films</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <div className="contact-form">
              <form id="contact-form">
                <div className="row">
                  <div className="col-lg-8 mb-3">
                    <input type="text" name="user_name" placeholder="Name" className="form-control form-control-lg fs-6"/>
                  </div>

                  <div className="col-lg-8 mb-3">
                    <input type="email" name="user_email" placeholder="Email" className="form-control form-control-lg fs-6"/>
                  </div>

                  <div className="col-lg-8 mb-3">
                    <textarea name="message" placeholder="Message..." rows="5" className="form-control form-control-lg fs-6"></textarea>
                  </div>

                  <div className="col-lg-5 mb-5">
                    <button type="submit" className="button-form btn btn-dark">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-5 my-auto mt-1 text-center">
            <div className="social-link">
              <div className="icon">
                <a href="https://github.com/FrancescoSangalli" target="_blank" rel="noreferrer" className="social fs-4 me-5 ms-5">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/francesco-sangalli-4700091a7/" target="_blank" rel="noreferrer" className="social fs-4 me-5">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>

              <div className="mt-3">
                <p className="text-white">&copy; 2022 | Francesco Sangalli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
