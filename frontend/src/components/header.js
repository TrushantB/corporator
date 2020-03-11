import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ aboutUs }) => (
  <header>
    <section className=" top-bar top-bar-sticky" id="topbar-fixed">
                <div className="container">
                    <div className="top-bar-info">
                        <div className="d-flex justify-content-between">
                            
                            <div className="conatct-info">
                                <a  href={`tel:${aboutUs.mob_no}`} >
                                    <i className="fas fa-phone"></i>
                                <span> +91 {aboutUs.mob_no}</span>
                                </a>
                                <a  href={`mailto:${aboutUs.mail_id}`} > 
                                    <i className="fas fa-envelope"></i>
                                <span> {aboutUs.mail_id} </span>
                                </a>
                            </div>
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
                            <div className="language">
                                
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Language
                                    </button>
                                    <div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" href="#">Marathi</Link>
                                    <Link to="/" className="dropdown-item" href="#">Hindi</Link>
                                    <Link to="/" className="dropdown-item" href="#">English</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            <section className="candidate-bar p-2" > 
                <div className="left-site">
                    <Link to="/" href="index.html">
                        <div className="logo-wrapper">
                            <img src={aboutUs.party_symbol.publicURL} title={aboutUs.party_name} alt={aboutUs.party_name} className="logo" />
                        </div>
                    </Link>
                </div>
                <div className="candidate-topbar__name d-flex left-site align-items-center">
                <Link to="/" >  <img src={aboutUs.face_img.publicURL} alt={`${aboutUs.first_name} ${aboutUs.last_name}`} title={`${aboutUs.first_name} ${aboutUs.last_name}`}  />   </Link>
                    <h2 className="candidate-name"> <Link to="/" > {aboutUs.first_name} {aboutUs.last_name} </Link> </h2> 
                </div>
                <div className="right-site">
                    <Link to="/" href="index.html">
                        <img src={aboutUs.party_symbol.publicURL} title={aboutUs.party_name} alt={aboutUs.party_name} className="logo" />
                    </Link>
                </div>
            </section>

            <section className=" nav-menu-stiky" id="fixed">
                <div className="container">
                    <nav className="navbar navbar-expand-md  navbar-dark justify-content-center p-0">     
                        <Link to="/" className="navbar-brand left-logo m-0" href="index.html ">
                            <img src="images/footer-logo.png" alt="Footer-logo" width="100px" />
                        </Link>
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <i className="fas fa-bars"></i>
                        </button> 
                        <div className="collapse navbar-collapse align-items-center justify-content-center" id="collapsibleNavbar">
                            <ul className="navbar-nav align-items-center" id="myDIV">
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
                                <li>
                                    
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Language
                                        </button>
                                        <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item" href="#">Marathi</Link>
                                        <Link to="/" className="dropdown-item" href="#">Hindi</Link>
                                        <Link to="/" className="dropdown-item" href="#">English</Link>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                       
                    </nav>
                </div>
            </section>

  </header>
)


export default Header
