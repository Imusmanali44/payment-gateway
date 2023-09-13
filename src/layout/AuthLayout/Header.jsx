import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { QuestionCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar expand="lg" className="pg-navbar fixed-top">
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
        <div className="ms-auto">
          <ul className="p-0 m-0">
            <li className="nav-item nav-link py-0">
              <Link to="/contact-us" className="btn btn-sm btn-outline-light d-flex align-items-center">
                <QuestionCircle className="me-3" />
                <span>Get Help</span>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
