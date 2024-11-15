import React, { useState } from "react";
import "./help.css";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is CashPal Money Transfer?",
      answer: "CashPal is a secure and reliable platform for sending money to family and friends, both locally and internationally.",
    },
    {
      question: "How long does it take to transfer money?",
      answer: "Transfer times vary depending on the destination and transfer method. Most transfers are instant, while others may take 1-3 business days.",
    },
    {
      question: "Are there any fees for transferring money?",
      answer: "Yes, a small fee may apply depending on the amount and destination of your transfer. Fees are clearly displayed before you confirm your transfer.",
    },
    {
      question: "How can I track my transfer?",
      answer: "You can track your transfer status in the 'Transaction History' section of your account. You’ll receive updates on the progress via email as well.",
    },
    {
      question: "Is my information secure with CashPal?",
      answer: "Yes, CashPal uses advanced encryption and secure protocols to protect your personal and financial information.",
    },
    {
      question: "What should I do if my transfer is delayed?",
      answer: "If your transfer is delayed, please contact our support team for assistance. You can reach us via the 'Contact Us' section or call our helpline.",
    },
  ];

  const benefits = [
    "Hassle-free Purchasing: No need for frequent payments; simply use your prepaid balance.",
    "Automatic record-keeping of purchases and deposits.",
    "Exclusive promotions and offers for account holders.",
    "Automatic Delivery: Ensure your collection is always up-to-date with automatic deliveries.",
    "Priority Access: Be the first to receive new and limited-edition features.",
    "Simplified purchase process at all participating locations.",
    "Nationwide access at participating locations."
  ];

  const steps = [
    {
      step: "Step 1: Fill the Application Form",
      detail: "Fill out the CashPal account application form.",
    },
    {
      step: "Step 2: Submit Required Documents",
      detail: "Provide the necessary documents, including identification and address proof.",
    },
    {
      step: "Step 3: Make an Initial Deposit",
      detail: "Deposit the required minimum amount to activate your CashPal account.",
    },
    {
      step: "Step 4: Account Activation",
      detail: "Your account will be activated, and you can start using it for transfers.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h2>Help Section</h2>
      <p>Find answers to frequently asked questions about CashPal Money Transfer:</p>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <h2>Benefits of Having a CashPal Account</h2>
      <ul className="benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="benefit-item">{benefit}</li>
        ))}
      </ul>

      <h2>How to Open a CashPal Account</h2>
      <div className="steps-list">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <h3>{step.step}</h3>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
