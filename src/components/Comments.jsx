import React from 'react'
import Review1 from '../images/review1.svg'
import Review2 from '../images/review2.svg'
import Quotes from '../images/quotes.svg'

const Comments = () => {
  return (
    <section id="comments">
        <div className="comments-flex">
            <div className="headline">
                <h1 className="h1">Clients are Loving Our App</h1>
            </div>
            <div className="review1">
                <img src={Review1} alt="Review 1"/>
                <div className="quotes">
                <img src={Quotes} alt="Quotes Icon"/>
                </div>  
            </div>
            <div className="review2">
                <img src={Review2} alt="Review 2"/>
                <div className="quotes">
                <img src={Quotes} alt="Quotes Icon"/> 
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Comments
