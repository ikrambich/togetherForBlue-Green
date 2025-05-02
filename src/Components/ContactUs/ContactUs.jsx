import React from 'react'
import "./ContactUs.css"
import linkedin from "../../assets/linkdin.png"
import instagram from "../../assets/instagram.png"
import fcb from "../../assets/fcbook.png"


const ContactUs = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "de689798-6ef8-4090-9a2a-cbcbb740fd89");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="ContactUsContainer">
         <div className="titleContactUsContainer">
                    <hr className='left-lineContactUs'></hr>
                    <h1 className="ContactTitle">💚 Get In touch</h1>
                    <hr className='right-lineContact'></hr> 
                </div>

    <div className="contact-container">
          
      <div className="contact-info">
        <h2>Send us a message 📧</h2>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
        <p>📧 bluegreentogether@gmail.com</p>
        <p>📍 Algeria · Algiers </p>
        <div className="social-media">
          <a href="https://www.instagram.com/together.for.blue.and.green/?next=%2F" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""></img></a>
          <a href="https://www.facebook.com/ForBlueandGreen/" target="_blank" rel="noopener noreferrer"><img src={fcb} alt=""></img></a>
          <a href="https://www.linkedin.com/company/together-for-blue-and-green/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""></img></a>
        </div>
      </div>

      <div className="contact-form">
        <h3>Contact Us Directly</h3>
        <form onSubmit={onSubmit}> 
            <input type="text" placeholder="Enter your name" required/>
            <input type="text" placeholder="Enter your mobile number" required/>
            <textarea placeholder="Enter your message" rows="6" required></textarea>
            <button type="submit">Submit now →</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </div>

  )
}

export default ContactUs
