import axios from 'axios';
import React, { useState } from 'react';
import { userLogin } from '../api';
import Swal from 'sweetalert2'
const Footer = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [modalStatus,setModalStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
      let isValid = true;
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } 
        setErrors(newErrors);
        return isValid;

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) {
       loginUser(formData);
    }
  }
  const loginUser = async (formData)=>{
    try {
      const loggedInResult = await userLogin(formData);
      if(loggedInResult.data.success){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${loggedInResult.data.message}`,
            showConfirmButton: true,
          }).then(function(result){
            if(result.isConfirmed){
              document.getElementsByClassName('btn-close')[0].click();
            }
          })
      }
    } catch (error) {
     console.log(error)      
    }
  }
  return (<>
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              SIGN IN
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="col-form-label">
                  Email
                </label>
                <input type="email" className="form-control" value={formData.email} onChange={handleChange} id="email" name="email" />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange}/>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>



    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <img src="images/sofa.png" alt="Image" className="img-fluid" />
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img
                    src="images/envelope-outline.svg"
                    alt="Image"
                    className="img-fluid"
                  />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>
              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                Furni<span>.</span>
              </a>
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
              nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
              velit imperdiet dolor tempor tristique. Pellentesque habitant
            </p>
            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Knowledge base</a>
                  </li>
                  <li>
                    <a href="#">Live chat</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Our team</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nordic Chair</a>
                  </li>
                  <li>
                    <a href="#">Kruzo Aero</a>
                  </li>
                  <li>
                    <a href="#">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright ©. All Rights Reserved. — Designed with love by{" "}
                <a href="https://untree.co">Untree.co</a> Distributed By{" "}
                <a hreff="https://themewagon.com">ThemeWagon</a>{" "}
                {/* License information: https://untree.co/license/ */}
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>


  </>);
}
export default Footer;