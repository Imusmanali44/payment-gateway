import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { QuestionCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({ open, setIsOpen }) => {
  return (
    <Navbar expand="lg" className="pg-navbar fixed-top">
      <Container fluid>
        <div className="nav-start-wrap d-flex">
          <button
            className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle d-xl-none"
            onClick={() => setIsOpen(!open)}
          >
            <span className="icon">
              <span className="feather-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-align-left"
                >
                  <line x1="17" y1="10" x2="3" y2="10"></line>
                  <line x1="21" y1="6" x2="3" y2="6"></line>
                  <line x1="21" y1="14" x2="3" y2="14"></line>
                  <line x1="17" y1="18" x2="3" y2="18"></line>
                </svg>
              </span>
            </span>
          </button>
          <div className="badge badge-soft-primary d-flex flex-row">
            <span
              className="fs-5 d-sm-flex d-none"
              id="main_text_merchant_text"
            >
              MERCHANT CONNECT
            </span>
            <span
              className="fs-5 d-sm-none d-inline-block"
              id="main_text_merchant_text"
            >
              MERCHANT CONN.
            </span>
          </div>
        </div>

        <div className="ms-auto">
          <ul className="p-0 m-0 d-flex align-items-center">
            <li className="nav-item nav-link py-0 me-2">
              <Link
                to="/login"
                className="badge badge-soft-primary d-flex align-items-center"
              >
                <QuestionCircle />
                <span className="ms-2 d-lg-inline-block d-none">
                  How it works
                </span>
              </Link>
            </li>
            <li className="nav-item nav-link py-0 me-2">
              <Link
                to="/login"
                className="badge badge-soft-primary d-flex align-items-center"
              >
                <QuestionCircle />
                <span className="ms-2 d-lg-inline-block d-none">
                  Customer Care
                </span>
              </Link>
            </li>
            <NavDropdown
              className="avatar avatar-primary avatar-xs avatar-rounded dropdown-menu-end"
              title="S"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <div className="user-info d-flex">
                  <div className="media-head d-flex me-2">
                    <div className="avatar avatar-primary avatar-sm avatar-rounded">
                      <span className="initial-wrap">S</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <div className="dropdown">
                      <a
                        className="d-block link-dark fw-medium"
                        href="#"
                        data-bs-auto-close="inside"
                      >
                        Sukhad Gautam
                      </a>
                    </div>
                    <div className="fs-7">thesukhadgautam@gmail.com</div>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/contact">
                Help & Support
              </NavDropdown.Item>
              <NavDropdown.Item href="/contact">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
