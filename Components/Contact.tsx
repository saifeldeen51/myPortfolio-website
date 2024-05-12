import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons'; // Import icons from Font Awesome
import emailjs from '@emailjs/browser';

const Contact = () => {
  // State variables for form fields and messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9q3lcb9', 'template_qc0hsir', form.current, {
        publicKey: 'FLJQqKdpRsRK-1yRE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    // If email is valid, proceed with form submission
    // For demonstration purposes, assume the form submission is successful
    // You can replace this with actual form submission logic
    // For now, just display success message
    setSuccessMessage("Message sent successfully!, I'll reply you soon");
    // Clear form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setEmailError('');
  };

  return (
    <div id="contact" className="bg-[#09101a] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <h1 className='heading'>
        Contact <span className='text-yellow-400'>Me</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center justify-between space-x-30">
        {/* Email Form */}
        <form ref={form} className="flex flex-col space-y-4" onSubmit={sendEmail}>
          <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="border border-[#55e6a5] rounded-md px-4 py-2" />
          <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className={`border border-[#55e6a5] rounded-md px-4 py-2 ${emailError && 'border-red-500'}`} />
          {emailError && <span className="text-red-500">{emailError}</span>}
          <input type="text" id="subject" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="border border-[#55e6a5] rounded-md px-4 py-2" />
          <textarea id="message" name="message" placeholder="Your Message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required className="border border-[#55e6a5] rounded-md px-4 py-2" />
          {successMessage && <p className="text-yellow-400">{successMessage}</p>}
          <button type="submit" className="bg-[#55e6a5] text-black px-[2rem] py-[1rem] duration-200 text-[18px] font-bold rounded-md hover:bg-yellow-400 transition-all items-center">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-20 text-[#55e6a5]">
          <a className=' hover:text-yellow-300' href="https://www.facebook.com/saif.eldeen.906" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-5xl" />
          </a>
          <a className=' hover:text-yellow-300' href="https://www.linkedin.com/in/saif-eldeen/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
          </a>
          <a className=' hover:text-yellow-300' href="https://www.behance.net/saif-eldeen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBehance} className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
