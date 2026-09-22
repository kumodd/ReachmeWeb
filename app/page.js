'use client';

import { useEffect } from 'react';
import config from '../config';
import ContactForm from '../components/ContactForm';

const appLink = config.appLink;
const whatsappLink = `https://wa.me/${String(config.whatsappNumber).replace(/\D/g, '')}?text=${encodeURIComponent(config.whatsappDefaultMessage)}`;

function Label({ children, number }) {
  return <div className="home-label"><b>{number}</b><span></span>{children}</div>;
}

function ArrowLink({ children, href = '/contact', light = false }) {
  return <a className={`home-arrow-link${light ? ' home-arrow-link-light' : ''}`} href={href}>{children}<span>↗</span></a>;
}

function Feature({ icon, title, children, accent = '' }) {
  return <article className={`home-feature ${accent}`}><span className="home-feature-icon">{icon}</span><h3>{title}</h3><p>{children}</p></article>;
}

export default function HomePage() {
  useEffect(() => {
    const items = document.querySelectorAll('.home-reveal');
    const observer = new IntersectionObserver((entries, io) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('home-visible'); io.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <main className="home-page">
    <section className="home-hero">
      <div className="home-hero-grid">
        <div className="home-hero-copy home-reveal">
          <Label number="01">THE EVERYDAY TV NETWORK</Label>
          <h1>Your TV is already <em>there.</em></h1>
          <p className="home-hero-subtitle">Let’s make it useful.</p>
          <p className="home-hero-body">MyReach turns the screen already in your restaurant, clinic, salon, café, or shop into a useful marketing tool.</p>
          <div className="home-hero-actions"><ArrowLink href="/contact">Put my screen to work</ArrowLink><a href="#advertisers" className="home-text-link">I’m an advertiser <span>→</span></a></div>
        </div>
        <div className="home-hero-stage home-reveal home-reveal-delay">
          <div className="stage-note stage-note-top">your space<br /><em>your story</em></div>
          <div className="stage-chip stage-chip-one"><strong>50%</strong><span>your content</span></div>
          <div className="stage-chip stage-chip-two"><strong>0</strong><span>competitor ads</span></div>
          <div className="home-screen-card">
            <div className="screen-card-top"><span><i></i> MYREACH / LIVE</span><span>01 — 04</span></div>
            <div className="screen-card-main"><small>YOUR BUSINESS,</small><strong>seen<br /><em>better.</em></strong><div></div><p>Offers · menu · news<br /><b>all in one place</b></p></div>
            <div className="screen-card-bottom"><span>YOUR SCREEN</span><span>CONNECTED</span></div>
          </div>
          <div className="stage-chip stage-chip-three"><span>fresh ideas</span><strong>every day ↗</strong></div>
          <div className="stage-caption">A little more from<br />the screen you have.</div>
        </div>
      </div>
      <div className="home-scroll-cue"><span>scroll to explore</span><b>↓</b></div>
    </section>

    <section className="home-ticker" aria-label="MyReach places"><div className="home-ticker-track"><span>Restaurants</span><b>✳</b><span>Clinics</span><b>✳</b><span>Cafés</span><b>✳</b><span>Salons</span><b>✳</b><span>Stores</span><b>✳</b><span>Waiting rooms</span><b>✳</b><span>Restaurants</span><b>✳</b><span>Clinics</span><b>✳</b></div></section>

    <section className="home-manifesto home-section home-reveal" id="how-it-works"><div className="home-container home-manifesto-grid"><div className="home-side-note"><Label number="02">THE IDEA</Label><span className="home-side-line"></span><span>existing screen<br />new possibility</span></div><div><h2>The best place to<br /><em>reach someone</em><br />is often right in<br />front of them.</h2><p className="home-lead">Your customers are already there. MyReach helps your screen give them one more useful reason to look.</p></div></div></section>

    <section className="home-partner home-section" id="screen-owners"><div className="home-container"><div className="home-section-head home-reveal"><div><Label number="03">FOR SCREEN PARTNERS</Label><h2>Keep your TV.<br /><em>Grow your reach.</em></h2></div><p>Connect the display you already have and let MyReach turn spare screen time into a better way to promote your business.</p></div><div className="home-split-row home-reveal"><div className="home-split-copy"><div className="home-mini-kicker">THE SIMPLE SPLIT</div><div className="home-split-visual"><span>50%</span><span>50%</span></div><div className="home-split-labels"><span><b>Your content</b>Offers · menu · services</span><span><b>MyReach content</b>Complementary brands</span></div><p>You provide the existing TV. Your business remains the main focus. MyReach handles the promotional content and network.</p><ArrowLink href={appLink}>Download the TV app</ArrowLink></div><div className="home-partner-note"><span className="home-sticker-star">✳</span><small>SCREEN PARTNER PROMISE</small><strong>Your business<br /><em>stays yours.</em></strong><p>Fresh content. A local network. No competitor ads.</p><div className="home-note-sign">— myreach</div></div></div></div></section>

    <section className="home-features home-section"><div className="home-container"><div className="home-feature-intro home-reveal"><Label number="04">WHAT YOU GET</Label><h2>More than a screen.<br /><em>A marketing tool.</em></h2><p>MyReach gives your business a simple way to stay visible, current, and connected with the people already inside your space.</p></div><div className="home-feature-grid"><Feature icon="✳" title="Promote your business" accent="home-feature-wide">Show products and services, offers and discounts, menus and pricing, new arrivals, contact details, and clear calls to action.<div className="home-tags"><span>Products</span><span>Offers</span><span>Menus</span><span>CTAs</span></div></Feature><Feature icon="✎" title="We create the content">No designer or marketing team needed. MyReach can create polished 15–30 second promotional creatives for your business.</Feature><Feature icon="◎" title="Your business stays the focus">Your own business content remains the core content displayed on your screen throughout the day.</Feature><Feature icon="⌁" title="Fresh content, regularly updated">Update promotions as your offers, products, services, and campaigns change.</Feature><Feature icon="⌖" title="Reach customers where they are">Your promotions appear inside your own business, while customers are already there.</Feature><Feature icon="↗" title="Join the local network">Your display becomes part of a growing network of local businesses and digital screens.</Feature></div><div className="home-feature-footer home-reveal"><b>⚡ Simple setup.</b> You provide the display. MyReach handles content and network management.</div></div></section>

    <section className="home-protection home-section"><div className="home-container home-protection-grid"><div className="home-protection-copy home-reveal"><Label number="05">THE PROMISE</Label><h2>Your competitors<br />won’t appear<br /><em>on your screen.</em></h2><p>Your business should never have to promote another business in the space you provide. MyReach protects your category and keeps your audience useful to you.</p><ArrowLink href="/contact" light>Talk to us about your screen</ArrowLink></div><div className="home-protection-board home-reveal home-reveal-delay"><div className="protection-board-top"><span>MYREACH / PROTECTED</span><b>100%</b></div><div className="protection-board-main"><small>YOUR</small><strong>space</strong><span>stays yours.</span></div><div className="protection-board-bottom"><i>×</i> No same-industry ads</div><div className="protection-sticker">NOT YOUR<br /><b>COMPETITOR.</b></div></div></div><div className="home-container home-category-row home-reveal"><span>Instead, meet</span><strong>complementary categories.</strong><div className="home-category-pills"><i>Biscuits</i><i>Beverages</i><i>Wellness</i><i>Personal care</i><i>Insurance</i><i>Real estate</i><i>Education</i></div></div></section>

    <section className="home-advertiser home-section" id="advertisers"><div className="home-container home-advertiser-grid"><div className="home-ad-map home-reveal"><div className="home-map-grid"></div><div className="home-campaign-card"><small>MYREACH / CAMPAIGN</small><strong>Be there<br /><em>when they are.</em></strong><span>⌖ YOUR AUDIENCE</span></div><div className="home-nearby-card"><small>LIVE IN</small><b>12</b><small>PLACES NEARBY</small></div></div><div className="home-advertiser-copy home-reveal home-reveal-delay"><Label number="06">FOR ADVERTISERS</Label><h2>Don’t just advertise online.<br /><em>Be there.</em></h2><p>Reach people in the places where they already spend time. Choose the right location, venue, audience, time, and campaign.</p><div className="home-filter-list"><span>Location</span><span>Venue</span><span>Audience</span><span>Time</span><span>Campaign</span></div><ArrowLink href="/contact" light>Plan a campaign</ArrowLink></div></div></section>

    <section className="home-network home-section"><div className="home-container home-network-grid"><div className="home-network-copy home-reveal"><Label number="07">THE NETWORK</Label><h2>Every screen<br /><em>makes it stronger.</em></h2><p>Restaurants, clinics, cafés, salons, and stores connect to create a local advertising layer powered by TVs that already exist.</p></div><div className="home-network-visual home-reveal home-reveal-delay"><div className="home-network-orbit orbit-one"></div><div className="home-network-orbit orbit-two"></div><div className="home-network-center">MY<br /><em>REACH</em></div><div className="home-network-node node-a">TV<span>restaurant</span></div><div className="home-network-node node-b">TV<span>clinic</span></div><div className="home-network-node node-c">TV<span>café</span></div><div className="home-network-node node-d">TV<span>salon</span></div></div></div></section>

    <section className="home-contact home-section" id="contact"><div className="home-container home-contact-grid"><div className="home-contact-copy home-reveal"><Label number="08">LET’S TALK</Label><h2>Have a screen?<br />Have a <em>campaign?</em></h2><p>Tell us what you are building. We’ll help you find the right way to make your space, screen, or campaign work harder.</p><div className="home-contact-links"><a href={whatsappLink} target="_blank" rel="noreferrer"><b>Chat on WhatsApp</b><span>{config.contactAvailability} ↗</span></a><a href={`mailto:${config.contactEmail}`}><b>{config.contactEmail}</b><span>Email works too ↗</span></a></div></div><div className="home-reveal home-reveal-delay"><ContactForm /></div></div></section>

    <section className="home-final"><div className="home-container home-final-inner home-reveal"><span className="home-final-star">✳</span><Label number="09">START WITH THE SCREEN YOU HAVE</Label><h2>Your TV is already<br /><em>reaching people.</em></h2><p>The question is: what should it reach them with?</p><div className="home-final-actions"><ArrowLink href="/contact">Get started</ArrowLink><a className="home-final-app" href={appLink} download={config.appFileName}>Download TV app ↗</a></div></div></section>
  </main>;
}
