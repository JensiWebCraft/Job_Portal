import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-section">
          <h2 className="logo">💼 JobPortal</h2>
          <p>
            Find your dream job with top companies across India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/">Jobs</a>
          <a href="/">Companies</a>
          <a href="/">About</a>
        </div>

        {/* For Employers */}
        <div className="footer-section">
          <h3>For Employers</h3>
          <a href="/">Post Job</a>
          <a href="/">Manage Jobs</a>
          <a href="/">Applicants</a>
          <a href="/">Pricing</a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@jobportal.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Ahmedabad, Gujarat</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 JobPortal.</p>
      </div>
    </footer>
  );
}

export default Footer;