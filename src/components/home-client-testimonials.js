import React from 'react'

import Techsynology from '../images/clients/tech-synology.png'
import Techcisco from '../images/clients/tech-cisco.png'
import Techfortinet from '../images/clients/tech-fortinet.png'
import Techwindowsserverclient from '../images/clients/tech-windowsserverclient.png'
import Techeset from '../images/clients/tech-eset.png'
import Techanydesk from '../images/clients/tech-anydesk.png'
import Techgoogleworkspace from '../images/clients/tech-googleworkspace.png'
import Techaws from '../images/clients/tech-aws.png'
import Techmisrosoft365 from '../images/clients/tech-misrosoft365.png'
import Techprometheus from '../images/clients/tech-prometheus.png'
import Techgrafana from '../images/clients/tech-grafana.png'




const clients = [
    {
        name: 'Synology',
        logo: Techsynology,
        url: 'https://technomediclk.com'
    },
    {
        name: 'Cisco',
        logo: Techcisco,
        url: 'https://authenticitiessrilanka.com/'
    },
    {
        name: 'Fortinet',
        logo: Techfortinet,
        url: 'https://biophilia.lk'
    },
    {
        name: 'Windowsserverclient',
        logo: Techwindowsserverclient,
        url: 'http://cppglass.com'
    },
    {
        name: 'Eset',
        logo: Techeset,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Anydesk',
        logo: Techanydesk,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Googleworkspaceet',
        logo: Techgoogleworkspace,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Aws',
        logo: Techaws,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Misrosoft365',
        logo: Techmisrosoft365,
        url: 'http://unicornmetalics.com/'
    },
    {
        name: 'Prometheus',
        logo: Techprometheus,
        url: 'http://unicornmetalics.com/'
    },

    {
        name: 'Grafana',
        logo: Techgrafana,
        url: 'http://unicornmetalics.com/'
    },

   


]

const HomeClientTestimonials = () => {
    return (
        <section  data-scrollax-parent="true" id="testimonials">
            <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" >Technologies<span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Technology Stack</h3>
                    <h2>Infrastructure<span> Technologies</span></h2>
                </div>
            </div>
            <div className="clearfix"></div>
           
            <div className="fl-wrap">
                <div className="container">
                    <ul className="client-list client-list-white">
                        {clients.map(client => (
                            <li key={client.name}><a href={client.url} target="_blank"><img src={client.logo} className='respimg' alt={client.name} title={client.name} /></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeClientTestimonials
