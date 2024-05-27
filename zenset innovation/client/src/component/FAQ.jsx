import React, { useState } from "react";
import "../styles/FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Zensperk offer?",
      answer:
        "Zensperk provides comprehensive web development services, including custom website design, e-commerce solutions, SEO optimization, and digital marketing strategies. We also offer website maintenance and support.",
    },
    {
      question: "How much does it cost to develop a website?",
      answer:
        "The cost of developing a website varies depending on the project's complexity, features, and design requirements. We offer tailored packages to meet different budgets. Contact us for a detailed quote.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for website development depends on the scope and complexity of the project. On average, a standard website can take 4-8 weeks from initial consultation to launch. More complex projects may take longer.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all our websites are designed to be fully responsive, ensuring they look and function perfectly on all devices, including smartphones and tablets.",
    },
    {
      question: "How do I get started with Zensperk?",
      answer:
        "Getting started is easy! Contact us through our website or give us a call to schedule a free consultation. We'll discuss your project, goals, and how we can help bring your vision to life.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="head">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <FaChevronDown />
          </button>
          <div
            className={`faq-answer ${
              activeIndex === index ? "faq-answer-active" : ""
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
