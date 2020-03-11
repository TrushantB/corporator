import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class SocialWork extends Component{
    render({allStrapiPosts}= this.props.data){
        
        return(
            <Layout>
            <section className="socila-work-wrapper">
            <div className="background-gradiant">
                <div className="container ">
                    <div className="heading d-flex justify-content-center align-items-center">
                        <h2 className="page-title">Social Work</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-40 mb-40">

                    {
                        allStrapiPosts.edges.map((item)=>{
                              return( 
                                <div className="col-md-4 col-sm-6 mb-4 mb-md-2 pb-2 pb-sm-0 d-flex" data-aos="fade-up">
                                <div className="post">
                                    <div className="post-image">
                                        <img src={item.node.post_image.publicURL} alt="Post Image" />
                                    </div>
                                    <span>{item.node.date}</span>
                                    <h4 className="sm-heading">
                                        <a href="">
                                        {item.node.title}
                                        </a>
                                    </h4>
                                    <p className="text"> 
                                            {item.node.description.substring(0, 100)}
                                    </p>
                                    <Link to="social-work-detail"> 
                                         Read More
                                         <i className="fas fa-angle-double-right ml-1"></i>
                                    </Link>
                                </div>
                            </div>
                               )  
                        })
                    }

                    
                    
                    
                </div>
            </div>
        </section>       
        </Layout>    
        )
    }
}

export default SocialWork


export const query = graphql`
  query{
    allStrapiPosts {
        edges {
          node {
            id
            title
            date
            description
            post_image {
              id
              publicURL
            }
          }
        }
      } 
  }`