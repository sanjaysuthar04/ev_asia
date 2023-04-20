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
            <Link href="/" role="button" className="nav-link ms-3" tabindex="0">
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
              <Link
                href="/exhibitor-profile"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Profile
              </Link>
              <Link
                href="/exhibitor-countries"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Exhibiting Countries
              </Link>
              <Link
                href="/reasons-to-exhibit"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Reasons to Exhibit
              </Link>
              {/* <Link
                href="/travel-accommodation"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Travel & Accommodation
              </Link> */}
              {/* <Link
                href="/application-form"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Application Form
              </Link>
              <Link
                href="/floor-map"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Floor Map
              </Link> */}
            </NavDropdown>

            <NavDropdown title="For Visitor" id="basic-nav-dropdown">
              <Link
                href="/visitors-profile"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Visitor Profile
              </Link>
              <Link
                href="/visiting-countries"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Visiting Countries
              </Link>
              {/* <Link
                href="/hotels-travels"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Hotels & Travels
              </Link>
              <Link
                href="/buyer-registration"
                className="dropdown-item"
                data-rr-ui-dropdown-item
              >
                Buyer’s Registration
              </Link> */}
            </NavDropdown>
            {/* <Link
              href="/partners-media"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              Partners & Media
            </Link>
            <Link
              href="/contact-information"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              Contact Us
            </Link>

            <Link
              href="/about-organizer"
              role="button"
              className="nav-link"
              tabindex="0"
            >
              About Organizer
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
