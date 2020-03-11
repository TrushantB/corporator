import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class Gallery extends Component{
    render( { strapiGalleries } = this.props.data){
        

        
        
        


        return(
            <Layout>

<section className="gallery-wrapper ">
        <div className="background-gradiant">
            <div className="container ">
                <div className="heading d-flex justify-content-center align-items-center">
                    <h2 className="page-title">Gallery</h2>
                </div>
            </div>
        </div>
          
      <div className="gallery mt-40 mb-40">
            <div className="container">
              <div className="row">

               { 
                   strapiGalleries.images.map((item)=>{
                       console.log(item)
                       return(
                
                <div key={item.id} className="col-md-4 col-sm-6 col-12" data-aos="fade-up">
                        <div className="overlay">
                            <div className="gallery-image">
                                <img src={item.url} alt="gallery-image" className="image" />
                            </div>
                            <div className="middle">
                                <div><i className="fas fa-plus-circle text-white"></i></div>
                            </div>
                        </div>
                  </div>
                       ) 
                   }) 
               }

                  
              </div>
            </div>
      </div>
    </section> 

            </Layout>            
        )
    }
}


export default Gallery

export const query = graphql`
  query{
  strapiGalleries {
    id
    images {
      id
      url
    }
  }
}`


  
