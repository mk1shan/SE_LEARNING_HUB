import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <div className="footer-logo">SE Learning Hub</div>
        <p className="footer-tagline">Empowering the next generation of software engineers</p>
        <div className="social-links">
          <a href="#" className="social-link" aria-label="GitHub Profile">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="#" className="social-link" aria-label="Twitter Profile">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
        <p className="copyright">&copy; 2025 SE Learning Hub by Mudipa kishan. Created for Software Engineering students.</p>
      </div>
    </footer>
  );
}

export default Footer;