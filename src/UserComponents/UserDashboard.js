import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
function UserDashboard() {

    const [theaterList, setTheaterList] = useState([])
    useEffect(async () => {
        try {
            let dashboard = await axios.get("https://event-project2.herokuapp.com/userdashboard", {
                headers: {
                    Authorization: window.localStorage.getItem("my_token")
                }
            })
            console.log(dashboard.data.authorization)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchTheaters()
    }, [])

    let fetchTheaters = async () => {
        try {
            let allTheaters = await axios.get("https://event-project2.herokuapp.com/event")
            setTheaterList(allTheaters.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div id="wrapper">
                {/* Dashboard content*/}
                <div id="content-wrapper" className="d-flex flex-column userdata"  >
                    <div id="content">

                        <div className="d-sm-flex justify-content-between mb-3 sticky-top" style={{ background: "black", padding: "20px" }}>
                            <h1 className="h3 mb-0" style={{ color: "white" }}>Coding Events</h1>
                            <Link className="nav-link collapsed " to="/" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-sign-out"></i>
                                <span >Logout</span>
                            </Link>
                        </div>


                        <div className="row">

                            <section id="gallery">
                                <div className="container mt-4 ">
                                    <div className="row">
                                        {
                                            theaterList.map((theater) => {
                                                return <div className="col-lg-4 col-md-6  mb-4">
                                                 
                                                    <div className="card  text-center" style={{ color: "black" }} id="cardhover" >
                                                        <img src={`${theater.imgUrl}`} className="card-img-top w-100 h-100" alt="img" />
                                                        <div className="card-body fw-bold " >
                                                           
                                                            <h2 className="   text-danger "> {theater.eventname}</h2>
                                                            <h5 classNameName='fs-6 fw-bold' >Eventdate : {theater.date} : 12.00pm</h5>
                                                            <h5 classNameName='text-primary fs-6 fw-bold'>Event type : online</h5>                                                   
                                                            <Link to={"/registerform"} >                           
                                                                <button classNameName='btn btn-primary  w-50 mt-3' >Register</button>
                                                            </Link>
                                                                                                                     
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
