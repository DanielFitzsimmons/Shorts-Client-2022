//React
import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import * as Icon from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

function Header(props) {
  const { user } = props;

  return (
    <header className="header pt-2 pr-2 pl-2">
      {/* Navbar */}
      <Navbar expand="md">
        <Container fluid>
          {/* Branding */}
          <Link className="navbar-brand" to="/">
            <img src="/logo/logoLight.svg" className="logo" alt="shorts - shotcuts for iOS" />
            <div className="d-inline-block align-middle logo-text text-left">
              <h1 className="text-start">Shorts</h1>
              <p className="text-start text-muted lead">Shortcuts for iOS</p>
            </div>
          </Link>
          {/* /Branding */}

          {/* Hamburger */}
          <Navbar.Toggle aria-controls="navbarNav" />
          {/* /Hamburger */}

          {/* Navbar Links */}
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            {/* Navigation Menu */}
            <ul className="navbar-nav ml-auto text-black">
              <li className="nav-item">
                <Link className="nav-link active bg_slider" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link bg_slider" to="/about">
                  About
                </Link>
              </li>
              {!user &&
                <li className="nav-item">
                  <Link className="nav-link bg_slider" to="/register">
                    Register
                  </Link>
                </li>
              }
            </ul>
            {/* /Navigation Menu */}

            {/* Login and Out Buttons */}
            {!user &&
              <Link to="/login" className="btn btn-primary ml-3 float-right mr-0">
                Login <Icon.Person className="icon sm-icon-l1" />
              </Link>
            }

            {user && (
              <Link to="/logout" className="btn btn-primary ml-3 float-right mr-0">
                Logout {user.firstName} <Icon.Person className="icon sm-icon-l1" />
              </Link>
            )}
            {/* /Login and Out Buttons */}

          </Navbar.Collapse>
          {/* /Navbar Links */}
        </Container>
      </Navbar>
      {/* /Navbar */}
    </header>
  );
}

export default Header;
