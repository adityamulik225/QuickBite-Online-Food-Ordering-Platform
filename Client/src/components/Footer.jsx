import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">🍔 QuickBite</h2>
          <p>
            Delicious food delivered fast to your doorstep.
            Fresh meals, top restaurants, and quick service.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Nagpur, Maharashtra</p>
          <p>📞 +91 9876543210</p>
          <p>✉ quickbite@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 QuickBite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;