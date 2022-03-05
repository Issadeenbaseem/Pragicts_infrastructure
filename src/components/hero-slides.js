import React from 'react'
import HeroImage1 from '../images/hero-images/infra_1.jpeg'
import HeroImage2 from '../images/hero-images/infra_2.jpeg'
import HeroImage3 from '../images/hero-images/infra_3.jpeg'
import HeroImage4 from '../images/hero-images/infra_4.jpeg'

const slides = [
    {
        id: 1,
        image: HeroImage1,
        mainText: 'Your IT Infrastructure <br /> <span>Efficient, Effective & Secure? </span>',
        subText: 'We can help you to put it right (Tier-1 Expertise & Track Record)'
    },
    {
        id: 2,
        image: HeroImage2,
        mainText: 'Considering an Effective   <br />  <span>Cloud Strategy & Implementation?</span>',
        subText: 'We can help you with this',
        action: {
            'link': '/'
        }
    },
    {
        id: 3,
        image: HeroImage3,
        mainText: 'IT Infrastructure <br /><span>  Faliures, Incidents & Blips?</span>',
        subText: 'We can help you with this',
        action: {
            'link': '/'
        }
    },
    {
        image: HeroImage4,
        mainText: 'Constrained By<br /> <span>IT Infrastructure Expertise?</span>',
        subText: 'Tier-1 capacity on onsite, remote & hybrid models .',
        action: {
            'link': '/'
        }
    }
]

const HeroSlides = () => {

    return (
        <div className="hero-wrap" id="sec1" data-scrollax-parent="true">
            <div className="slider-carousel-wrap full-height fullscreen-slider-wrap">
                <div className="fullscreen-slider full-height cur_carousel-slider-container fl-wrap" data-slick='{"autoplay": true, "autoplaySpeed": 4000 , "pauseOnHover": false}'>
                {slides.map(slide => (
                    <div key={slide.image} className="fullscreen-slider-item full-height fl-wrap">
                        <div className="bg par-elem hero-bg"  data-bg={slide.image}></div>
                        <div className="overlay"></div>
                        <div className="half-hero-wrap">
                            <h1 dangerouslySetInnerHTML={{ __html: slide.mainText }}></h1>
                            <h4>{slide.subText}</h4>
                            <div className="clearfix"></div>
                            {/* <a href={slide.action.link} className="custom-scroll-link btn float-btn flat-btn color-btn mar-top">Let's Start</a> */}
                        </div>
                    </div>
                ))}
                </div>
                <div className="sp-cont   sp-cont-prev"><i className="fal fa-arrow-left"></i></div>
                <div className="sp-cont   sp-cont-next"><i className="fal fa-arrow-right"></i></div>
                <div className="fullscreenslider-counter"></div>
            </div>
            <div className="hero-decor-numb">
                <span>6.9149106  </span><span>79.9105932 </span>
                <a href="https://g.page/PragICTS?share" target="_blank" className="hero-decor-numb-tooltip">Based In Colombo, Sri Lanka</a>
            </div>
        </div>
    )
}

export default HeroSlides
