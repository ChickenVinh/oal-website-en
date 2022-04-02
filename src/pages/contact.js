import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Envelope, Geo } from "react-bootstrap-icons"

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <div className="container">
      <h1 className="display-4">Contact</h1>
      <div className="row justify-content-around">
        <div className="p-4 col-sm-5 text-center bg-light">
          <Envelope size={50} />
          <p>info@oalconsult.com</p>
        </div>
        <div className="p-4 col-sm-5 col-offset-sm-2 text-center bg-light">
          <Geo size={50} />
          <p>
            Germany
            <br />
            Augustusplatz 1-4
            <br />
            04129 Leipzig
            <br />
            <br />
            Vietnam
            <br />
            39 Nguyen Quoc Tri Cau Giay
            <br />
            Hanoi
          </p>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
