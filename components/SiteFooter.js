import config from '../config';

export default function SiteFooter() {
  const whatsapp = `https://wa.me/${String(config.whatsappNumber).replace(/\D/g, '')}?text=${encodeURIComponent(config.whatsappDefaultMessage)}`;
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a className="brand brand-light" href="/#top"><span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>myreach</span></a>
        <p>Turn idle TVs into<br /><em>advertising opportunities.</em></p>
        <div className="footer-links"><a href="/#how-it-works">How it works</a><a href="/#screen-owners">For screen owners</a><a href="/#advertisers">For advertisers</a><a href="/contact">Contact</a><a href="/privacy-policy">Privacy policy</a><a href="/terms-and-conditions">Terms &amp; conditions</a><a href="/assets/admin-owner.apk" download="admin-owner.apk">Download Admin &amp; Owner app ↗</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2025 MyReach</span><span>Your screen. Your customers. Your space.</span><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp us ↗</a><a href="/#top">Back to top ↑</a></div>
    </footer>
  );
}
