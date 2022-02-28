//React
import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Footer() {

  return (
    <footer className="mt-2 mt-md-3 mx-3">
      <Row>
        {/* Footer Logo */}
        <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
          <Link className="navbar-brand mr-0" to="/">
            <img src="/logo/logoLight.svg" className="logo-small" alt="Shorts - Shotcuts for iOS" />
            <div className="d-inline-block align-middle logo-text">
              <h1 className="d-block text-start">Shorts</h1><p className="text-start text-muted lead">Shortcuts for iOS</p>
            </div>
          </Link>
        </Col>
        {/* Footer Logo */}
        {/* Footer Links */}
        <Col xs={4} md={2} className="text-center">
          <h5>Shorts</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/about">About</Link></li>
            <li><Link className="text-muted" to="/">Contact</Link></li>
            <li><Link className="text-muted" to="/">Twitter</Link></li>
          </ul>
        </Col>
        <Col xs={4} md={2} className="text-center">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Link</Link></li>
            <li><Link className="text-muted" to="/">Resource</Link></li>
          </ul>
        </Col>
        <Col xs={4} md={2} className="text-center">
          <h5 className="">Legal</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Privacy</Link></li>
            <li><Link className="text-muted" to="/">Terms</Link></li>
          </ul>
        </Col>
        {/* /Footer Links */}
      </Row>
    </footer>
  );
}

export default Footer;