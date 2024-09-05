import * as styles from "./Header.css";

import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className={styles.navbar} variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to="/">
          <div className={styles.logoTextBox}>
            <span className={styles.brand}>SKINCARE BRAND</span>
            <span className={styles.brandSub}>For your skin and skin only</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* STANDARD NAVLINKS */}
          <Nav className="me-auto"></Nav>
          {/* AUTH NAVLINKS */}
          <Nav>
            <Nav.Link
              className={styles.navLink}
              as={Link}
              to="/product/products"
            >
              Products
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/auth/login">
              Login
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/auth/signup">
              Signup
            </Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to="/auth/dashboard">
              Dashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
