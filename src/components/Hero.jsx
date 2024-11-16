import React from 'react'
import AppStore from '../images/appstore-light.svg.svg'
import GooglePlay from '../images/googleplay-light.svg.svg'
import IphoneStorLiten from '../images/iphonestorliten.svg'


const Hero = () => {
  return (
    <section id="hero">
            <div className="container">
                <div className="headline">
                    <h1 className="d4">Manage All Your Money in One App</h1>
                </div>
                <div className="content">
                    <p className="text-lg">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <div className="buttons">
                        <a className="btn-download-app" href="#"><img src={AppStore} alt="appstore"/></a>
                        <a className="btn-download-app" href="#"><img src={GooglePlay} alt="googleplay"/></a>
                    </div> 
    
                    <a href="#" className="discover-more">
                        <span className="btn-circle">
                            <i className="fa-solid fa-circle-chevron-down"></i>
                        </span>
                        <span>Discover more</span>
                    </a>
                </div> 
                <div className="images">
                    <img className="phone-img-container"src={IphoneStorLiten} alt="two iphones"/>
                </div>
            </div>
        </section> 
  )
}

export default Hero
