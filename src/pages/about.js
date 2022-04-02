import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "../images/aboutus.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <h1 className="display-4">About us</h1>
    </div>
    <div className="bg-light" style={{ padding: "30px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm">
            <img src={image} />
          </div>
          <div className="col-sm">
            <h2>Our Company</h2>
            <p>Born in Germany, Roots in Vietnam</p>
            <br />
            <p>
              We are a German consulting company founded in Leipzig,
              specialising in the private sector as well as in the public domain
              with a broad variety of customers including Internationally
              working groups. (with focus on Vietnam – EU)
            </p>
            <p>
              The cornerstones of our service are our very well maintained
              international network, high quality, integrity and reliability to
              achieve top of the hill results and meet your requirements.
            </p>
            <br />
            <p>
              The 3 founders are self-directed, passionate & self motivated.
            </p>
            <br />
            <p>
              They demonstrated success in developing and seamlessly executing
              plans in fast-paced organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
