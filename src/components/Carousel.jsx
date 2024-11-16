import React from 'react'
import Left from '../images/iPhone 12 Pro vänster.svg'
import Front from '../images/iPhone 12 Pro framsida.svg'
import Right from '../images/iPhone 12 höger.svg'

const Carousel = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
    <div className="container space-y-3">
        <h2 className="h1">How Does It work</h2>
        <div className="carousel">
            <div className="carousel-item">
                <img src={Left} alt=""/>
            </div>
            <div className="carousel-item">
                <img src={Front} alt=""/>
            </div>
            <div className="carousel-item">
                <img src={Right} alt=""/>
            </div>
        </div>
        <div className="text">
            <h3 className="h4">Latest transaction history</h3>
            <p className="text-m">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>
    </div>
</section>
  )
}

export default Carousel
