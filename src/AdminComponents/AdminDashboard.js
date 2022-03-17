import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function AdminDashboard() {
    const [eventList, setEventList] = useState([])
    useEffect(() => {
        fetchTheaters()
    }, [])

    let fetchTheaters = async () => {
        try {
            let allEvents = await axios.get("https://event-project2.herokuapp.com/event")
            setEventList(allEvents.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure want to delete?")
            if (result) {
                await axios.delete(`https://event-project2.herokuapp.com/event/${id}`)
                fetchTheaters();
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div id="wrapper">
                {/* SideBar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <Link to="/admindashboard" className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-ticket"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3"> Admin Page</div>
                    </Link>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <div className="nav-link" to="/userdashboard">
                            <i className="fas fa-film"></i>
                            <span>List of All Events</span></div>
                    </li>
                    <hr className="sidebar-divider" />
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to={"/ParticipateList"} data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-film"></i>
                            <span>Participate List</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-sign-out"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>

                {/* Dashboard content*/}
                <div id="content-wrapper" className="d-flex flex-column ">
                    <div id="content">

                        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3">
                            <h1 className="h3 mb-0 text-gray text-dark ml-3">All Event Data</h1>

                            <Link to={"/add-event"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mr-4 px-3">Add Event</Link>
                        </div>

                        <div className="row">
                            <section id="gallery">
                                <div className="container mt-4">
                                    <div className="row">
                                        {
                                            eventList.map((event) => {
                                                return <div className="col-lg-4 col-md-6 mb-4">
                                                    <div className="card fw-bold">
                                                        <div className="card-body" style={{ textAlign: "center" }}>
                                                            <img src={`${event.imgUrl}`} alt="" className="imagee"  />
                                                           
                                                        </div>
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item">Event name : {event.eventname}</li>
                                                            <li className="list-group-item">Event Date : {event.date} 12.00 pm </li>
                                                            
                                                        </ul>
                                                        <div className="card-body">
                                                            <Link to={`/edit-event/${event._id}`}><button className='btn btn-primary mr-3'>Edit</button></Link>
                                                            <button onClick={() => handleDelete(event._id)} className='btn btn-danger'>Delete</button>
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

export default AdminDashboard


