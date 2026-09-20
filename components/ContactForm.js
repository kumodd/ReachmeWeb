'use client';

import { useState } from 'react';
import config from '../config';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [`Hi ${config.contactName},`, '', 'I would like to connect through the MyReach website.', '', `Name: ${data.get('name')}`, `Phone / WhatsApp: ${data.get('phone')}`, `Email: ${data.get('email') || 'Not provided'}`, `I am a: ${data.get('interest')}`, `Message: ${data.get('message') || 'Not provided'}`].join('\n');
    const number = String(config.whatsappNumber).replace(/\D/g, '');
    if (!number) { setStatus('Add a WhatsApp number in config.js before submitting.'); return; }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true); setStatus('WhatsApp is ready with your details. Review the message and tap send.'); event.currentTarget.reset();
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading"><span>START A CONVERSATION</span><i>✳</i></div>
      <div className="form-row"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" type="text" autoComplete="name" placeholder="e.g. Kiran Sharma" required /></div>
      <div className="form-row"><label htmlFor="phone">Phone / WhatsApp <span>*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="e.g. +91 98765 43210" required /></div>
      <div className="form-row"><label htmlFor="email">Email <small>(optional)</small></label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" /></div>
      <div className="form-row"><label htmlFor="interest">I am a… <span>*</span></label><select id="interest" name="interest" required defaultValue=""><option value="" disabled>Choose one</option><option>Screen owner</option><option>Advertiser</option><option>Potential partner</option><option>Something else</option></select></div>
      <div className="form-row"><label htmlFor="message">How can we help? <small>(optional)</small></label><textarea id="message" name="message" rows="3" placeholder="Tell us a little about your screen or campaign…"></textarea></div>
      <button className="button button-primary form-submit" type="submit">Send on WhatsApp <span aria-hidden="true">↗</span></button>
      {status && <p className={`form-status ${sent ? 'success' : 'error'}`} role="status">{status}</p>}
      <p className="form-note">Your details will open in WhatsApp so you can review them before sending.</p>
    </form>
  );
}
