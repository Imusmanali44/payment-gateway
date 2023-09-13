import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-white pg-navbar fixed-top pb-lg-0">
      <Container fluid="xxl">
        <Navbar.Brand href="/">
          <img
            className="brand-img img-fluid"
            src="https://merchant.upigateway.com/new_assets/dist/img/brand-sm.svg"
            alt="UPI"
          />
          <img
            className="brand-img img-fluid"
            src="https://merchant.upigateway.com/new_assets/dist/img/upigate.svg"
            alt="Gateway"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={
                "text-center app-nav-link nav-link text-nowrap fs-7 py-3 me-lg-4 mx-auto mt-2 mt-lg-0 " +
                (location.pathname === "/" ? "active-link" : "")
              }
            >
              Home
            </Link>
            <Link
              to="/faq"
              className={
                "text-center app-nav-link nav-link text-nowrap fs-7 py-3 me-lg-4 mx-auto mt-2 mt-lg-0 " +
                (location.pathname === "/faq" ? "active-link" : "")
              }
            >
              FAQ
            </Link>
            <Link
              to="/contact_us"
              className={
                "text-center app-nav-link nav-link text-nowrap fs-7 py-3 me-lg-4 mx-auto mt-2 mt-lg-0 " +
                (location.pathname === "/contact_us" ? "active-link" : "")
              }
            >
              Contact Us
            </Link>
          </Nav>
          <div className="ms-lg-5 d-flex gap-3 justify-content-center justify-content-lg-start">
            <Link
              className="fs-7 btn btn-secondary mt-4  mb-6 mt-2 mt-lg-0"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="fs-7 btn btn-primary mt-4  mb-6 mt-2 mt-lg-0"
              to="/register"
            >
              Create Account
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
