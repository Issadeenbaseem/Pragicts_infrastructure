import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HomeAbout = () => {

    return (
        <section data-scrollax-parent="true" id="overview">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Overview<span>//</span></div>
                <div className="container">
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="main-about fl-wrap">
                           
                            <h2> <span>Expediting </span>  Business Outcomes</h2>
                            <p>Indeed, IT is complex and will continue to be so. Many a choices, options, and paths for a given context. Many brands and alternatives for each context with their own strengths and weaknesses.</p>
                            <p>It is beyond an individual/professional/expert to make effective decisions pertaining to a given context. A poor decision can cost you dearly in terms of money, effort, effectiveness, and efficiency.</p>
                            <p>Requires breadth and depth of expertise and experience to articulate objective solution propositions which are brand and technology agnostic.</p>
                            <p>PragICTS brings tier-1 IT expertise and experience so that you can focus on your business. We do the required due diligence to design, implement, manage and support.</p>
                            <p>Talk to us and experience the difference we can bring on board.</p>
                           
                            {/* <a href="portfolio.html" className="btn float-btn flat-btn color-btn">My Portfolio</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-parallax-module" data-position-top="90"  data-position-left="25" data-scrollax="properties: { translateY: '-250px' }"></div>
            <div className="bg-parallax-module" data-position-top="70"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeAbout
