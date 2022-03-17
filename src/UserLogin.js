import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./user.css";

function UserLogin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post("https://event-project2.herokuapp.com/login", values)
        window.localStorage.setItem("my_token", loginData.data.token)
        navigate("/userdashboard")
      } catch (error) {
        console.log(error)
      }
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
       <section className="vh-100">
        <div className="container py-3 h-100" id='userLogin'>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card " id='card' >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      alt="login form"
                      className="img-fluid w-100 h-100"
                      id='loginimg'
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-5 p-lg-5 text-black">

                      <form onSubmit={formik.handleSubmit}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          {/* <i className="fas fa-cubes fa-2x me-3" ></i> */}
                            <img src="data:image/png;base64,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" alt="" width="40" height="40"></img>
                         
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email"  className="form-control form-control-lg" placeholder='Email address' name='email' onChange={formik.handleChange}
                              value={formik.values.email} required />
                         
                        </div>

                        <div className="form-outline mb-4 pwd ">
                      
                          <input  type={passwordShown ? "text" : "password"} name='password' className="form-control form-control-lg" placeholder='password' onChange={formik.handleChange}
                            value={formik.values.password} required />
                
                          <span className="p-viewer d-flex align-item-center">
                            <i onClick={togglePassword} className="fa fa-eye" aria-hidden="true"></i>
                          </span>
                        </div>

                        <div className="pt-1 mb-4">
                          <button type="submit " className="btn btn-dark btn-lg btn-block" >Login</button>
                        </div>
                        <hr className="my-4" />
                    
                        <p className="mb-5 pb-lg-2" >Don't have an account? <Link to={"/register"}>Register here</Link> </p>
                      
                        <hr className="my-4" />
                       
                        <p className="mb-5 pb-lg-2" >Admin account? <Link to={"/adminlogin"}>Admin</Link></p>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserLogin
