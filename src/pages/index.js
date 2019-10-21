import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <section className="page-section" id="features">
          <div className="container">
            <h2 className="text-center mt-0">Top Features</h2>
            <hr className="divider my-4" />
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-recycle text-primary mb-4"></i>
                  <h3 className="h4 mb-2">100% Natural</h3>
                  <p className="text-muted mb-0">
                    Made from high quality Antartic Krill, sourced from the
                    pristine Southern Ocean. High concentration of Omega-3
                    phospholipids.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe-americas text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Eco-Friendly & Sustainable</h3>
                  <p className="text-muted mb-0">
                    We strongly belive in sustainability. We guarantee our
                    harvesting does not affect the balance of the ecosystem. We
                    work closely in cooperation with CCAMLR.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-users text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Customer Support</h3>
                  <p className="text-muted mb-0">
                    Our professionals are committed to excellence in their work
                    and deliver an exceptional standard of service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">About Us</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  Conspac began in 1973 as a trading company featuring animal
                  feeds such as hay and grain. Our scope gradually included fish
                  feed, particularly krill. Recognizing its unique features and
                  benefits have led us to focus on Antarctic krill for fish feed
                  and human consumption. After 25 years in the industry, we
                  understand the logistics and issues in regard to krill.
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#contact"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Contact Us!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="products">
          <div className="container">
            <h2 className="text-center mt-0">Our Products</h2>
            <hr className="divider my-4" />
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                  <Img
                    className="headshot mb-4"
                    fixed={this.props.data.blanched.childImageSharp.fixed}
                    alt="Blanched Krill"
                  />
                  <h3 className="h4 mb-2">Blanched Krill</h3>
                  <p className="text-muted mb-0">
                    Superba. Subject to seasonal availabilty.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                  <Img
                    className="headshot mb-4"
                    fixed={this.props.data.frozen.childImageSharp.fixed}
                    alt="Frozen Krill"
                  />
                  <h3 className="h4 mb-2">Frozen Krill</h3>
                  <p className="text-muted mb-0">
                    Superba or Pacifica. Subject to seasonal availability.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                  <Img
                    className="mb-4"
                    fixed={this.props.data.meal.childImageSharp.fixed}
                    alt="Krill Meal"
                  />
                  <h3 className="h4 mb-2">Krill Meal</h3>
                  <p className="text-muted mb-0">Human Grade or Feed Grade.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-light" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Let’s talk Krill and learn what it can do for you. Your
                  business is important to us so we will respond promptly.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-primary"></i>
                <div>+1 (604) 541-5454</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-primary"></i>
                <a className="d-block" href="mailto:contact@yourwebsite.com">
                  info@conspac.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    frozen: file(relativePath: { eq: "frozen-raw-krill.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    blanched: file(relativePath: { eq: "krill-blanched.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    meal: file(relativePath: { eq: "krill-meal.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
