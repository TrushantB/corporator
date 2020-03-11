import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class ContactUs extends Component{
    render(){
        return(
            <Layout>
                <section className="contact-us-wrapper">
            <div className="background-gradiant">
                <div className="container ">
                    <div className="heading d-flex justify-content-center align-items-center">
                        <h2 className="page-title">Contact Us</h2>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <div className=" mt-40 mb-40">
                    <div className="heading-info">
                        <h2 className="text-center section-title">Reach Us</h2>
                        
                        <p className="text-center text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy</p>
                    </div>
                    <div className="row mt-3 mt-md-5">
                        <div className="col-md-4 col-sm-4">
                            <div className="address text-center">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4 className="sm-heading">Office Address</h4>
                                <p className="text-center">1229, Sinhgad Road,Pune</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 mb-4 mb-sm-0">
                            <div className="phone text-center">
                                    <i className="fas fa-phone"></i>
                                <h4 className="sm-heading">Phone</h4>
                                <a href="tel:9673363242">
                                    +91 967 336 3242
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="email-info text-center">
                                    <i className="fas fa-envelope"></i>
                                <h4 className="sm-heading">Email Address</h4>
                                <a href="mailto:rohit@gmail.com">
                                    rohit@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100" data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.632409728009!2d73.83737021436849!3d18.500302474623467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb6f15cd1d5%3A0x5e7cc01f45a445ba!2zQVMgQm9ZJ1MgKOCkhuCkquCkoyDgpLjgpY3gpLU64KSkKQ!5e0!3m2!1sen!2sin!4v1575265275079!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <div className="contact-form mb-4 mb-sm-5" data-aos="fade-up">
                <div className="container">
                    <div className="mt-40 mb-40">
                        <h2 className="text-center  section-title">Get In Touch</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <form action="POST" data-nelify="true" className="d-flex flex-wrap">
                                    <div className="form-group">
                                        <label for="email">Your Name:</label>
                                        <input type="text" autocomplete="off" className="form-control" id="email" /> 
                                    </div>
                                    <div className="form-group email">
                                        <label for="email">Email address:</label>
                                        <input type="email" autocomplete="off" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Phone No:</label>
                                        <input type="text" autocomplete="off" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group subject">
                                        <label for="pwd">Subject:</label>
                                        <input type="subject" autocomplete="off" className="form-control" id="pwd" />
                                    </div>
                                    <div className="form-group comment">
                                        <label for="comment">Comment:</label>
                                        <textarea className="form-control" autocomplete="off" rows="5" id="comment"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
           
        </section>
            </Layout>            
        )
    }
}


export default ContactUs
