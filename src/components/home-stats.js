import React from 'react'
import NumbersBgImage from '../images/bg/bg-stats.jpg'

const HomeStats = () => {

    return (
        <section style={{ paddingTop: '0px' }} id="highlights" data-scrollax-parent="true">
        <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }"><span>//</span>Highlights</div>
        <div className="container">
            <div className="section-title fl-wrap">
                <h3>Our Highlights</h3>
                <h2> Infrastructure <span>Highlights</span></h2>
            </div>
            <div className="process-wrap fl-wrap">
                <ul>
                    <li>
                        <div className="time-line-icon">
                            <i className="fab pragicts-analysis-icon"></i>
                        </div>
                        <h4>Solution Driven and Brand/Technology Agnostic</h4>
                        <div className="process-details">
                            {/* <h6>Duis autem vel eum iriure dolor</h6> */}
                            <p>As with people, every company, however, similar to another, is unique and different both at the macro and micro levels.

We focus on providing the right solution to the customer's specific context and requirements. We are not influenced by brands and specific technologies.</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">01.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-requirements-articulation-icon"></i>
                        </div>
                        <h4>Professional Team</h4>
                        <div className="process-details">
                            {/* <h6>In ut odio libero, at vulputate urna. </h6> */}
                            <p>All staff with academic and professional (with certifications) pedigree with experience</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">02.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-design-icon"></i>
                        </div>
                        <h4>Capacity and Capability</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                            <p>Company-level collective and collaborative expertise for depth, breadth, and capacity effective solution articulation, implementation, and management against an individual-based approach.</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">03.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-support-icon"></i>
                        </div>
                        <h4>Professional Due Diligence</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                            <p>Total management so that clients can focus on their business. We will take care of IT (all the strategic, operational, and leg work) relieving the customer to focus
on their business. Regular oversight function by PragICTS management for additional due diligence and management for effective operation and delivery.
</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">04.</span>
                    </li>
                    <li>
                    <div className="time-line-icon">
                            <i className="fal pragicts-support-icon"></i>
                        </div>
                        <h4>Standards Driven</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                            <p>(SOP and SLA) driven service delivery with systems for constant monitoring, correction, and reporting for consistency, transparency, and throughput.</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">05.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-support-icon"></i>
                        </div>
                        <h4>Effective Procurement & management.</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                            <p>Procure the right technology, equipment, and brand from the right supplier at the right price with complete due diligence and transparency.
SOP based procurement procedures with vendor evaluations and quotations for effective and transparent decision making.</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">06.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-support-icon"></i>
                        </div>
                        <h4>Sensible Pricing</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                            <p>Services tailored to fit the exact needs of the client and context. Cost-effective through right-sizing.</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">07.</span>
                    </li>
                    <li>
                        <div className="time-line-icon">
                            <i className="fal pragicts-support-icon"></i>
                        </div>
                        <h4>Referenceable Client Base</h4>
                        <div className="process-details">
                            {/* <h6>Nulla posuere sapien vitae lectus suscipit</h6> */}
                            <p>Our client base is fully referenceable for that added assurance.</p>
                            {/* <a href="#">More Details</a> */}
                        </div>
                        <span className="process-numder">08.</span>
                    </li>
                </ul>
            </div>
            {/* <div className="fl-wrap mar-top">
                <div className="srv-link-text">
                    <h4>Need more info ? Visit my services page :  </h4>
                    <a href="services.html" className="btn float-btn flat-btn color-btn">My Services</a>
                </div>
            </div> */}
        </div>
        <div className="bg-parallax-module" data-position-top="90"  data-position-left="30" data-scrollax="properties: { translateY: '-150px' }"></div>
        <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
        <div className="sec-lines">
            <div className="container full-height"><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div></div>
        </div>
    </section>
    )
}

export default HomeStats
