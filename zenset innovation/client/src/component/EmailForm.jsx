import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/EmailForm.css";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_infoabhieee";
    const templateId = "template_t5gzbwo";
    const publicKey = "HJBNJXFOaLJM78sI0";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: "Web Wizard",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSuccessMessage("We will get back to you soon!"); // Set success message
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="Emailcontainer">
      <div className="Emailcontact-box">
        <div className="Emailleft">
          <img src="/contactUs.png" alt="Send Enquiry" />
        </div>
        <div className="Emailright">
          <h2>Provide your details below</h2>
          {successMessage && (
            <p className="successMessage">{successMessage}</p>
          )}{" "}
          {/* Display success message */}
          <form onSubmit={handleSubmit} className="emailForm">
            <input
              type="text"
              className="EmailField"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="EmailField"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="EmailField"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="EmailField"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
