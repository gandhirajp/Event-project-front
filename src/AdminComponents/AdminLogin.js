import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: 'admin'
    },
    onSubmit: async (values) => {
      try {
        navigate("/admindashboard")
      } catch (error) {
        console.log(error)
      }
    },

  });

  return (
    <>
      <div>

        <section classNameName="vh-100 bg-success" >
          <div classNameName="container-fluid py-3 h-100" id='adminlogin'>
            <div classNameName="row d-flex justify-content-center align-items-center h-100">
              <div classNameName="col col-xl-10">
                <div classNameName="card " id='card' >
                  <div classNameName="row g-0">
                    <div classNameName="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://wallpaperaccess.com/full/186244.jpg"
                        alt="login form"
                        classNameName="img-fluid w-100 h-100"
                        id='loginimg'
                      />
                    </div>
                    <div classNameName="col-md-6 col-lg-7 d-flex align-items-center">
                      <div classNameName="card-body p-5 p-lg-5 text-black">

                        <form onSubmit={formik.handleSubmit}>

                          <div classNameName="d-flex align-items-center mb-3 pb-1">
                            <span classNameName="h1 fw-bold mb-0">Admin here</span>
                          </div>

                          <h5 classNameName="fw-normal mb-3 pb-3" >Admin account</h5>

                          <div classNameName="form-outline mb-4 pwd ">
                            <input type="email" classNameName="form-control form-control-lg" placeholder='Email address' name='email' onChange={formik.handleChange}
                              value={formik.values.email} required />

                          </div>
                          <div classNameName="form-outline mb-4 pwd ">

                            <input type="password" name='password' classNameName="form-control form-control-lg" placeholder='password' onChange={formik.handleChange}
                              value={formik.values.password} required />

                          </div>
                          <div classNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" classNameName="btn btn-primary btn-md mb-2">Admin login</button>
                          </div>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default AdminLogin
