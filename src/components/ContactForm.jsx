import { useState } from "react";
import "../styles/contactform.css";

function ContactForm() {
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.target;

    const formData = new FormData();
    formData.append("fullname", form.fullname.value);
    formData.append("email", form.email.value);
    formData.append("phone-number", form["phone-number"].value);
    formData.append("message", form.message.value);
      
    try {
      const response = await fetch(
        "https://whitebricks.com/tsacademy.php",
         {
           method: "POST",
          body: formData,
         }
      );

      const text = await response.text();
      console.log("RAW SERVER RESPONSE:", text);
    
      if (response.ok) {
        setIsSubmitting(true);
        form.reset();
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactSection" className="form-container">
      <h2 className="form-heading">Have Questions About Planetary Science?</h2>
      
        {isSubmitting ? (
        <div className="success-message">
          <h3>✅ Thank you for reaching out!</h3>
          <p>Your message has been successfully sent. Our team will get back to you shortly.</p>
          
            <button className="submit-btn" onClick={() => setIsSubmitting(false)}>
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <p className="form-description">
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
          </p>
          <p className="form-description">
            Reach out and we'll get back to you.
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
                <input type="tel" id="phone-number" name="phone-number" placeholder="Please enter a valid phone number" maxLength="11" pattern="[0-9]{11}" required />
              </div>    

              <div className="input-group"> 
                <label htmlFor="message">Message<span className="required">*</span></label>
                <textarea id="message" name="message" placeholder="Enter your message" minLength="10" maxLength="100" required></textarea>
                <span className="helper-text">100 characters</span>
              </div>
              
            </div> 
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
              {!isSubmitting && <span className="arrow">&#8250;</span>}
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default ContactForm;