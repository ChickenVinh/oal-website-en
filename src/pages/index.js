import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GraphUp, People, Diagram2 } from "react-bootstrap-icons"

import banner from "../images/banner.jpg"
import modern from "../images/modern.jpg"
import boats from "../images/boats.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <div
        className="container text-center align-items-center"
        style={{
          minHeight: "550px",
          paddingTop: "50px",
          paddingRight: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        <h1 style={{ fontSize: "55px" }}>Oak & Lotus Consulting</h1>
        <p>Germany based Consulting firm with focus on EU-Vietnam</p>
        <div className="container align-items-center">
          <div
            className="row d-inline-flex justify-content-around"
            style={{ maxWidth: "550px" }}
          >
            <div className="p-4 col-sm text-center">
              <a
                class="btn btn-primary white-hover orange-background black"
                href="#"
                role="button"
              >
                Our Projects
              </a>
            </div>
            <div className="p-4 col-sm text-center">
              <a
                class="btn btn-primary white-hover black-background"
                href="#"
                role="button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row" style={{ paddingTop: "50px" }}>
        <div className="mb-3 col-sm text-center">
          <GraphUp className="mb-2" color="rgb(217, 142, 51)" size={30} />
          <h3>Management Consulting</h3>
          <p>
            Implementation of our customers' growth goals & strategy advice and
            planning
          </p>
        </div>
        <div className="mb-3 col-sm text-center">
          <People className="mb-2" color="rgb(217, 142, 51)" size={30} />
          <h3>Human Resources</h3>
          <p>
            Consulting on projects regarding health care and other significant
            industries
          </p>
        </div>
        <div className="mb-3 col-sm text-center">
          <Diagram2 className="mb-2" color="rgb(217, 142, 51)" size={30} />
          <h3>Joint Venture</h3>
          <p>
            Venturing into Vietnam, cooperative arrangements between two or more
            business entities
          </p>
        </div>
      </div>
    </div>
    <div className="bg-light" style={{ padding: "30px" }}>
      <div className="container">
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-sm">
            <img src={boats} />
          </div>
          <div className="col-sm">
            <h3>Project Consulting</h3>
            <p>
              We position our clients at the forefront of their field by
              advancing a positive agenda across complex terrain.
            </p>
            <br />
            <p>
              Whatever the scenario, we tap into deep networks and innate
              understanding of each party’s priorities and drivers — the
              unspoken context to every conversation.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <h3>Vietnam - future leader</h3>
            <p>
              Once among the smaller economies in ASEAN, Vietnam has made great
              strides towards economic modernisation, emerging as a
              manufacturing powerhouse and a promising hub for services
              industries.
            </p>
            <br />
            <p>
              Viet Nam is among the fastest growing economies in ASEAN with the
              2nd largest labour market.
            </p>
          </div>
          <div className="col-sm">
            <img src={modern} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
