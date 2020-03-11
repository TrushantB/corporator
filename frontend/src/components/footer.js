import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/googleplay.png"



const Footer = ({ aboutUs }) => (
    <footer >
       
            <div className="container pt-4 pb-4">
                <div className=" row">
                    <div className="footer-wrapper w-100">
                        <div className="footer-logo">
                            <Link to="/"><img src={aboutUs.party_symbol.publicURL} alt="Logo" className="logo" /></Link>
                        </div>
                        <div className="quick-link">
                            <h4 className="text-white sm-heading">Quick Link</h4>
                            
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link">About Us</Link>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <Link to="/gallery" className="nav-link">
                                        Gallery
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/social-work" className="nav-link">Social Work</Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link to="/register-complaint" className="nav-link">Register Complaint</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/emergency-contact" className="nav-link">Emergency Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                                </li>
                                       
                            </ul>
                        </div>
                        <div className="footer-follow">
                            <h4 className="text-white sm-heading">Follow</h4>
                            <div className="social-link ">
                                
                                <a  href={aboutUs.facebook_link} target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a  href={aboutUs.twitter_link} target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a  href={aboutUs.insta_link} target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>


                            </div>
                        </div>
                        <div className="download">
                            <div className="">
                                <h4 className="text-white sm-heading">Download</h4>
                                <div className="google-play">
                                    <a href={aboutUs.android_link} target="_blank"><img src={logo} className="google-play-icon" /></a>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <p className="text-white m-0">
                        <a href="https://ivisionstudio.in/" target="_blank" >iVision Web Studio</a> © 2020. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
)

export default Footer