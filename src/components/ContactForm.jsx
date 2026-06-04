import { useState } from "react"; // 1. Import useState
import "../styles/contactform.css";

function ContactForm() {
  
    const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    setIsSubmitted(true);
  };

  return (
    <section className="form-container">
      <h2 className="form-heading">Have Questions About Planetary Science?</h2>
      
            {isSubmitted ? (
        <div className="success-message">
          <h3>✅ Thank you for reaching out!</h3>
          <p>Your message has been successfully sent. Our team will get back to you shortly.</p>
          
                    <button className="submit-btn" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <p className="form-description">
            Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              
              <div className="input-group"> 
                <label htmlFor="fullname">Full Name<span className="required">*</span></label>
                <input type="text" id="fullname" name="fullname" placeholder="Full name" required />
              </div>

              <div className="input-group"> 
                <label htmlFor="email">Email<span className="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="example@example.com" required />
              </div>

              <div className="input-group"> 
                <label htmlFor="phone-number">Phone number<span className="required">*</span></label> 
                <input type="tel" id="phone-number" name="phone-number" placeholder="Please enter a valid phone number" maxLength="11" required />
              </div>    

              <div className="input-group"> 
                <label htmlFor="message">Message<span className="required">*</span></label>
                <textarea id="message" name="message" placeholder="Enter your message" minLength="10" maxLength="100" required></textarea>
                <span className="helper-text">100 characters</span>
              </div>
              
            </div> 
            
            <button type="submit" className="submit-btn">
              Submit <span className="arrow">&#8250;</span>
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default ContactForm;