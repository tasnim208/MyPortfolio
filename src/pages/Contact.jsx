import { useState } from "react";
import "../styles/contact.css";


export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h2>Contactez-moi</h2>

      <div className="form-group">
        <label>Nom</label>
        <div className="input-box">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={form.nom}
            onChange={handleChange}
          />
          <span className="icon">👤</span>
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
          />
          <span className="icon">📧</span>
        </div>
      </div>

      <div className="form-group">
        <label>Message</label>
        <div className="input-box">
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <span className="icon">💬</span>
        </div>
      </div>

      <button>Envoyer</button>
    </div>
  );
}
