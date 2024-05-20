import React, { useState } from 'react';
import { Element } from 'react-scroll';

import '../styles/ContactForm.css';


const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setConfirmationMessage('Your message is in the process of being sent')

    fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Réponse réseau non réussie: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Mettez à jour le message pour indiquer le succès de l'envoi
      setConfirmationMessage('Your message has succefully been sent ! I\'ll make sure to reply soon.Thank you !');
    })
    .catch((error) => {
        console.error('Erreur:', error);
        // Mettez à jour le message en cas d'erreur
        setConfirmationMessage('Erreur lors de l\'envoi du message.');
    });
  };


  return (
    <Element name="contact">

    <section className="contact">
    <h1>Contact</h1>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          Nom:<br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:<br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Message:<br />
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button className='btn' type="submit">Envoyer</button>
      </form>

      {confirmationMessage && <div className="confirmationMessage">{confirmationMessage}</div>}
    </section>

    </Element>

  );
};

export default ContactForm;