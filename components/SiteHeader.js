'use client';

import { useState } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a className="brand" href="/#top" aria-label="MyReach home"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>myreach</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/#how-it-works">How it works</a><a href="/#screen-owners">For screen owners</a><a href="/#advertisers">For advertisers</a><a href="/contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/contact">Get started <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span></span><span></span></button>
      </div>
      <nav className={`mobile-nav${open ? ' open' : ''}`} id="mobile-menu" aria-label="Mobile navigation">
        <a href="/#how-it-works" onClick={close}>How it works</a><a href="/#screen-owners" onClick={close}>For screen owners</a><a href="/#advertisers" onClick={close}>For advertisers</a><a href="/contact" onClick={close}>Contact</a><a className="mobile-nav-cta" href="/contact" onClick={close}>Get started <span aria-hidden="true">↗</span></a>
      </nav>
      <a className="admin-app-badge" href="/assets/admin-owner.apk" download="admin-owner.apk" aria-label="Download the Admin and Owner app">
        <span className="admin-app-badge-label">For admins &amp; owners</span><span>Get the app ↗</span>
      </a>
    </header>
  );
}
