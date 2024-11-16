import React from 'react'
import Brand1 from '../images/brand1.svg'
import Brand2 from '../images/brand2.svg'
import Brand3 from '../images/brand3.svg'
import Brand4 from '../images/brand4.svg'
import Brand5 from '../images/brand5.svg'
import Brand6 from '../images/brand6.svg'

const Brands = () => {
  return (
    <section id="brands">
            <div className="container">
                <div id="brand1" className="brand-box">
                    <img src={Brand1} alt=""/>
                </div>
                <div id="brand2" className="brand-box">
                    <img src={Brand2} alt=""/>
                </div>
                <div id="brand3" className="brand-box">
                    <img src={Brand3} alt=""/>
                </div>
                <div id="brand4" className="brand-box">
                    <img src={Brand4} alt=""/>
                </div>
                <div id="brand5" className="brand-box">
                    <img src={Brand5} alt=""/>
                </div>
                <div id="brand6" className="brand-box">
                    <img src={Brand6} alt=""/>
                </div>
            </div>
        </section>
  )
}

export default Brands
