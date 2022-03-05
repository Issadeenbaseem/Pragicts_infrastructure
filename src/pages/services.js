import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import Footer from '../components/footer'
import Relation from '../images/services/rationalizaion.jpg'
import Network from '../images/services/networking.jpg'
import Support from '../images/services/support.jpg'
import Security from '../images/services/security.jpg'
import Management from '../images/services/management.jpg'
import Performance from '../images/services/performance.jpg'
import Backup from '../images/services/backup.jpg'
import Virtualization from '../images/services/virtualization.jpg' 
import Consulting from '../images/services/consulting.jpg'
import Cloud from '../images/services/cloud.jpg'
import BgImage from '../images/bg/solutions-page-banner.jpg'
import SocialIconsFooter from '../components/social-icons-footer'

const SolutionsPage = () => {
    return (
        <Layout pageTitle="Services">
            <div id="services" className="single-page-wrap">
                <div className="content">
                    <div className="single-page-decor"></div>
                    <div className="single-page-fixed-row">
                        <div className="scroll-down-wrap">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                            <span>Scroll Down</span>
                        </div>
                        <Link to="/" className="single-page-fixed-row-link"><i className="fal fa-arrow-left"></i> <span>Back to home</span></Link>
                    </div>

                    <section className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
                        <div className="bg par-elem"  data-bg={BgImage} data-scrollax="properties: { translateY: '30%' }"></div>
                        <div className="overlay"></div>
                        <div className="pattern-bg"></div>
                        <div className="container">
                            <div className="section-title">
                                <h2>Services<span> </span></h2>
                                <div className="horizonral-subtitle"><span>Services</span></div>
                            </div>
                            <a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i className="fal fa-long-arrow-down"></i></a>
                        </div>
                    </section>
                
                    <section className="dark-bg no-padding">
                        <div className="hidden-info-wrap-bg">
                            <div className="bg-ser">
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <div className="hidden-info-wrap">
                            <div className="hidden-info fl-wrap">
                                <div className="hidden-works-list fl-wrap">
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Network}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>Networking</h3>
                                                <p>Design, implement, manage and support your network to meet your business needs.</p>
                                                <p>
                                                <ul>
                                                    <li># Design/Architecture</li>
                                                    <li># Implementation</li>
                                                    <li># Management and Support</li>
                                                </ul>
                                                </p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">01.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Security}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>Security</h3>
<p>When it comes to security there is no one pill solution. It has to be a cohesive and inclusive strategy both at a macro and micro level with detailed granularity across all levels, touch, and interface points over hardware and software.</p>                                                <div className="clearfix"></div>
                                               <p>
                                               <ul>
                                                   <li># Firwalls</li>
                                                   <li># SD WANs</li>
                                                   <li># VPN</li>
                                                   <li># DMZ</li>
                                                   <li># Proxi Servers</li>
                                                   <li># Traffic flow control for throughput and security</li>
                                               </ul>
                                               </p>
                                               
                                                <span className="serv-number">02.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Performance}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>IT Performance Management</h3>
                                                <p>Performance management and monitoring across the entire IT infrastructure landscape (across all touchpoints, layers, devices, infrastructure, wired, wireless, etc.)</p>
                                                <p>
                                                    <ul>
                                                        <li># Traffic routing</li>
                                                        <li># Platform optimization (Devices, Services, Routers, Switches, Access Points, etc.)</li>
                                                    </ul>
                                                </p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">03.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Relation}>
                                        <a target="_blank" href='https://pulse.pragicts.com'>
                                            <div className="hidden-works-item-text">
                                                <h3>IT Rationalization</h3>
                                                <p>We can help you to rationalize your IT infrastructure through.</p>
                                                <p>
                                                    <ul>
                                                        <li># Virtualization</li>
                                                        <li># cloud</li>
                                                        <li># Standardization</li>
                                                        <li># Optimization across all tiers</li>
                                                    </ul>
                                                </p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">04.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Virtualization}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>Virtualization</h3>
                                                <p>Virtualization of physical server assets for cost, scalability, management, and utilization optimization.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">05.</span>
                                            </div>
                                        </a>
                                    </div>
                                  
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Cloud}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>Cloud Transition</h3>
                                                <p>Transition your on-premise infrastructure to find the right balance between cloud and on-premise infrastructure for cost, availability, and scale.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">06.</span>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Management}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>IT Management</h3>
                                                <p>Data management (on-premise, Offsite, and DRS) strategy, design, implementation, management, and support.</p>

                                                <div className="clearfix"></div>
                                                <span className="serv-number">07.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Consulting}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>Consulting</h3>
                                                <p>Consulting relating to IT infrastructure strategy, design, implementation, rationalization, optimization, security, availability, scalability, and backup.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">08.</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hidden-works-item  serv-works-item fl-wrap" data-bgscr={Backup}>
                                        <a target="_blank" href='#'>
                                            <div className="hidden-works-item-text">
                                                <h3>Backup</h3>
                                                <p>We can help you automate and manage your corporate data is backed up and secured from data loss, theft, and recovery.</p>
                                                <div className="clearfix"></div>
                                                <span className="serv-number">09.</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fl-wrap limit-box"></div>
                    </section>

                    <SocialIconsFooter />
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default SolutionsPage
