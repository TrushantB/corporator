import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class RegisterComplaint extends Component{
    render({strapiAboutUses}= this.props.data){

        
        return(
            <Layout>
              
              <section className="register-complaint">
            <div className="background-gradiant">
                <div className="container ">
                    <div className="heading d-flex justify-content-center align-items-center">
                        <h2 className="page-title">Register Complaint</h2>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
            <div className="row mt-40 mb-40">
                <div className="col-md-5">
                    <div className="profile-image text-center">
                        <img src={strapiAboutUses.profile_image.publicURL} alt="Profile image" />
                    </div>
                    <p className="text-center text pt-4">
                        Please feel free to contact me if you need any further information.
                    </p>
                    
                </div>
                <div className="col-md-7">
                    <form action="/action_page.php" >
                        <h4 className="sm-heading">Any Complaint? Let Us Know</h4>
                        <div className="form-group">
                            <label for="email">Your Name:</label>
                            <input type="text" autocomplete="off" className="form-control" id="email" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group email ml-0">
                            <label for="email">Email address:</label>
                            <input type="email" autocomplete="off" className="form-control" id="email" placeholder="Enter Your Mail" />
                        </div>
                        <div className="form-group subject ml-0">
                            <label for=" ">What Happened?</label>
                            <textarea className="form-control" autocomplete="off" rows="5" id="" placeholder="Please Provide As Many details "></textarea>
                        </div>
                        <div className="form-group comment">
                            <label for="comment">How Can we make things right for you</label>
                            <textarea className="form-control" rows="5" id="comment" placeholder="Enter Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </section>

            </Layout>            
        )
    }
}


export default RegisterComplaint


export const query = graphql`
  query{
    strapiAboutUses {
      profile_image {
        id
        publicURL
      }
    }
  }`