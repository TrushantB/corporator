/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Footer from "./footer"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        strapiAboutUses{
          first_name
             last_name
             party_name
             face_img{
               publicURL
             }
             party_symbol{
               publicURL
             }
             mob_no
             mail_id
             facebook_link
             twitter_link
             insta_link
             linkedin_link
             android_link
       }
      }
      
      
    `}
    render={data => (
      <>
      <Helmet>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
</Helmet>

        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header aboutUs={data.strapiAboutUses} />
            </Col>
          </Row>
          {/* <Navbar pageInfo={pageInfo} /> */}
          <Row noGutters>
            <Col>
              <Container fluid className="px-0">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          
          <Row noGutters className="justify-content-center">
            <Col>
              <Footer aboutUs={data.strapiAboutUses} />
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
