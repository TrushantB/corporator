import React, { Component } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class AboutUs extends React.Component{
  
    render({strapiAboutUses}= this.props.data){
      console.log(strapiAboutUses)
        return(
            <Layout>

<section className="about-us-wrapper" > 
            <div className="background-gradiant">
                <div className="container ">
                    <div className="heading d-flex justify-content-center align-items-center">
                        <h2 className="page-title">About {strapiAboutUses.first_name} {strapiAboutUses.last_name} </h2 >
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="row mt-40 mb-40"  data-aos="fade-up">
                    <div className="col-md-5">
                        <div className="profile-image">
                            <img src={strapiAboutUses.profile_image.publicURL} alt="Profile Image" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about-description">
                            <h3 className="candidate-name md-heading">Information</h3>
                            
                            <div className="mt-3 text">
                              {strapiAboutUses.info}
                            </div>
                       
                            </div>
                    </div>
                </div>
                <div className="row mb-40" data-aos="fade-up"  >
                    <div className="col-md-6">
                        <div className="constituncy">
                            <h3 className="md-heading"> About My Vision </h3>
                            <div>
                            {strapiAboutUses.vision}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                       <div className="mission">
                            <h3 className="md-heading"> My Mission</h3>
                            <div>
                              {strapiAboutUses.mission}
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


export default AboutUs

export const query = graphql`
  query{
    strapiAboutUses {
      first_name
      last_name
      profile_image {
        id
        publicURL
      }
      info
      vision
      mission
    }
  }`