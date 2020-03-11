import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class SocialWorkDetails extends Component{
    render(){
        return(
            <Layout>
            <section className="social-work-details">
            <div className="background-gradiant">
                <div className="container ">
                    <div className="heading d-flex justify-content-center align-items-center">
                        <h2 className="page-title">Social Work</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-40 mb-40">
                    <div className="col-md-12 col-lg-8 " data-aos="fade-up">
                        <div className="">
                            <h4 className="blog-title sm-heading ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy
                            </h4>
                            <p className="font-weight-bold text">
                                Posted On 
                                <span>
                                    Friday, 14th June 2019
                                </span>
                            </p>
                            <div className="social-work-details-image">
                                <img src="images/social_work_1.jpg" alt="social-work-details-image" />
                            </div>
                            <p className="mt-4 font-weight-bold text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into 
                                electronic typesetting, remaining essentially unchanged. It was popularised in 
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including 
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                        <button className="btn twitter-btn"><i className="fab fa-twitter text-white mr-2"></i><span className="text-white">Tweet</span></button>
                        <div className="more-images mt-5">
                            <h4 className="m-0 sm-heading">More Images</h4>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 mt-3">
                                <div className="post-image">
                                    <img src="images/social_work_2.jpg" alt="post-image" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 mt-3">
                                <div className="post-image">
                                    <img src="images/social_work_3.jpg" alt="post-image" />
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-5 pt-4 sidebar-wrapper" data-aos="fade-up">
                        <div className="sidebar mt-5">
                            <h4 className="sm-heading">Quick Links</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="emergency-contact.html">emergency Contact</a></li>
                                <li><a href="contact-us.html">Contact</a></li>
                            </ul>
                        </div>
                        <div className="sidebar mt-5">
                            <h4 className="sm-heading">Latest News</h4>
                            <ul>
                                <li>
                                    <a href="social-work-detail.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </a>
                                </li>
                                <li>
                                    <a href="social-work-detail.html">Nunc sed diam id nisl pellentesque iaculis at at magna.
                                    </a>
                                </li>
                                <li>
                                    <a href="social-work-detail.html">
                                        Sed elementum magna eu lacus ultrices mollis.
                                    </a>
                                </li>
                                <li>
                                    <a href="social-work-detail.html">
                                        Nullam vitae risus vitae arcu pretium maximus maximus nec mi.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        </Layout>        
        )
    }
}

export default SocialWorkDetails
