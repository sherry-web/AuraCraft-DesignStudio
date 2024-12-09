import React, { useState } from 'react';
import './styles/FAQ.css';

const faqs = [
  {
    question: 'What services does AuraCraft offer?',
    answer: 'We offer UX/UI design, front-end development, and brand strategy services.',
  },
  {
    question: 'How do I get started on a project?',
    answer: 'You can contact us through our form or schedule a consultation.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3>{faq.question}</h3>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
