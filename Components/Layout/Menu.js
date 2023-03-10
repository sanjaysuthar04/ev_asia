import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" role="button" className="nav-link" tabindex="0">
              Home
            </Link>

            <Link
              href="/about-evasia-expo"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              About EV ASIA Expo
            </Link>
            <Link
              href="/concurrent-events"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              Concurrent Events
            </Link>

            <NavDropdown title="For Exhibitor" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Exhibiting Countries
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Travel & Accommodation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Application Form
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Floor Map</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="For Visitor" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Visitor’s Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hotels & Travels
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Buyer’s Registration
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Partners & Media</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>

            <Nav.Link href="#link">About Organizer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
