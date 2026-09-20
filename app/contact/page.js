import ContactForm from '../../components/ContactForm';
import config from '../../config';

export const metadata = { title: 'Contact MyReach', description: 'Contact the MyReach team about your screen or advertising campaign.' };

export default function ContactPage() {
  const whatsapp = `https://wa.me/${String(config.whatsappNumber).replace(/\D/g, '')}?text=${encodeURIComponent(config.whatsappDefaultMessage)}`;
  return <main><section className="route-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-dot"></span>Let’s talk</div><h1>Make your screen<br /><em>useful.</em></h1></div></section><section className="contact section-pad"><div className="container contact-grid"><div className="contact-copy"><div className="section-label"><span>01</span><span className="label-rule"></span><span>CONTACT MYREACH</span></div><h2>Start a<br /><em>conversation.</em></h2><p>Whether you own a screen, want to reach an audience, or have a partnership idea, send us a note and we will get back to you.</p><div className="contact-details"><a className="contact-direct" href={whatsapp} target="_blank" rel="noreferrer"><span className="contact-icon">◌</span><span><b>Chat on WhatsApp</b><small>{config.contactAvailability}</small></span><span className="contact-arrow">↗</span></a><a className="contact-direct" href={`mailto:${config.contactEmail}`}><span className="contact-icon">@</span><span><b>{config.contactEmail}</b><small>Email works too</small></span><span className="contact-arrow">↗</span></a></div></div><ContactForm /></div></section></main>;
}
