import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__author">
        Developed by David Castellano
        <span className="footer__date">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
