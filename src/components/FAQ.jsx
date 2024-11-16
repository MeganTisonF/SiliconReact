import React, { useState, useEffect } from "react";
import BoxCall from '../images/icon-boxcall.svg';
import BoxText from '../images/icon-boxtext.svg';
import ArrowUp from '../images/arrow up.svg';
import ArrowDown from '../images/arrow.svg';
import Notification from '../images/notification.svg';
import Email from '../images/email.svg';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]); // Håll API-data
  const [error, setError] = useState(null); // Hantera fel

  // Hämta FAQ-data från API:t
  useEffect(() => {
    fetch("https://win24-assignment.azurewebsites.net/api/faq")
      .then((response) => response.json())
      .then((data) =>
        setFaqs(data.map((item) => ({ ...item, open: false }))) // Lägg till 'open'-nyckel för att hantera öppning/stängning
      )
      .catch((err) => setError("Could not fetch FAQs"));
  }, []);

  // Toggla för att öppna/stänga frågor
  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-question">
          <h2>Any questions? Check out the FAQs</h2>
          <div className="question-p">
            <p className="text-lg">
              Still have unanswered questions and need to get in touch?
            </p>
          </div>
          <div className="questions-options">
            <img src={BoxCall} alt="Call Icon" />
            <img src={BoxText} alt="Text Icon" />
          </div>
        </div>

        <div className="faq-container">
          {error && <p className="error-message">{error}</p>}
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div key={faq.id} className="faq-section-box">
                <div className="faq-header" onClick={() => toggleFAQ(index)}>
                  <div className="headline">
                    <h5 className="h6">{faq.title}</h5>
                  </div>
                  <div className="icon-arrow">
                    <img
                      src={faq.open ? ArrowUp : ArrowDown}
                      alt="Toggle Icon"
                    />
                  </div>
                </div>
                {faq.open && (
                  <div className="faq-text">
                    <p className="text-s">{faq.content}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>Loading FAQs...</p>
          )}
        </div>

        <div className="box">
          <img className="not" src={Notification} alt="Notification" />
          <div className="minih4">
            <h4 className="h4">
              Subscribe to our newsletter to stay informed about latest updates
            </h4>
          </div>
          <div className="input-group">
            <img className="icon" src={Email} alt="Email Icon" />
            <input
              className="form-input email"
              type="email"
              placeholder="Your Email"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


