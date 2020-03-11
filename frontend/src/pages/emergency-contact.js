import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class EmergencyContact extends Component{
    render({strapiEmergencyContacts}= this.props.data){
        console.log(strapiEmergencyContacts)
        return(
            <Layout>
                <section className="emergency-contact" >
            <div className="background-gradiant">
                <div className="container ">
                    <div className="heading d-flex justify-content-center align-items-center">
                        <h2 className="page-title">Emergency Contact</h2>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row mt-40 mb-40">
                    <div className="col-md-6">
                        <div className="hospital-no">
                            <h4 className="m-0 sm-heading "><i className="fas fa-ambulance"></i> Hospital</h4>
                            <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Contact No.</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Global Hospital</td>
                                    <td><a href="tel:8796969608">+91 8796969608</a></td>
                                  </tr>
                                  <tr>
                                    <td>ONP Meera Hospital</td>
                                    <td><a href="tel:9672354584">+91 9672354584</a></td>
                                  </tr>
                                  <tr>
                                    <td>Jehangir Hospital</td>
                                    <td><a href="tel:7426848212">+91 7426848212</a></td> 
                                  </tr>
                                </tbody>
                              </table>                       
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="police-no">
                            <h4 className="m-0 sm-heading"><i className="fas fa-hospital"></i> Police Station</h4>
                            <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Contact No.</th>
                                    
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Sinhgad Road Police Station</td>
                                    <td><a href="tel:24348270">020 24348270</a></td>
                                    
                                  </tr>
                                  <tr>
                                    <td>Alankar Police Station</td>
                                    <td><a href="tel:25445003">020 25445003</a></td>
                                  
                                  </tr>
                                  <tr>
                                    <td>Kothrud Police Station</td>
                                    <td><a href="tel:25391515">020 25391515</a></td>
                                    
                                  </tr>
                                </tbody>
                              </table>                       
                        </div>

                    </div>
                </div>
            </div>
        </section>
            </Layout>            
        )
    }
}


export default EmergencyContact



export const query = graphql`
  query{
    strapiEmergencyContacts {
      id
      Hospitals {
        id
        Name
        mobile_no
      }
      pstation {
        id
        name
        mobile_no
      }
    }
  }
  `