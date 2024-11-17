import React, { useState } from 'react';
import Notification from '../images/notification.svg';
import Email from '../images/email.svg';


const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      console.log({ email });
      setError(false);
      setEmail(''); // Återställ inputfältet
    } else {
      setError(true);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(false); // Ta bort error när användaren börjar skriva
  };

  const validateEmail = (value) => {
    return value.trim() !== ''; // Kontrollera att fältet inte är tomt
  };

  return (
    <form id="subform" onSubmit={handleSubmit}>
      <div className="box">
        <img className="not" src={Notification} alt="Notification" />
        <div className="minih4">
          <h4 className="h4">Subscribe to our newsletter to stay informed about the latest updates</h4>
        </div>
        <div className="inputgroup">
          <img className="icon" src={Email} alt="Email Icon" />
          <input
            id="emailreq"
            className={`form-input email ${error ? 'error' : ''}`}
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={handleInputChange}
          />
          {error && <p className="invalid-input">Email is required</p>}
          <button id="sub-btn" type="submit" className="btn">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default Subscribe;



