import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">💼</span>
        <h2>JobPortal</h2>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Jobs</a></li>
        <li><a href="/">Companies</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;