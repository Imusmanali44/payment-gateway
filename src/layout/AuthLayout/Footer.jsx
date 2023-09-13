import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid="xxl">
        <Row className="py-2">
          <Col>
            <p className="footer-text text-center text-lg-start m-0">
              *UPIGateway provides Dynamic QR Generating service. UPIGateway
              does not offer payment gateway service, nor does it provide UPI ID
              and UPI Merchant account. Please read our policy and T&amp;C
              before using our services
            </p>
          </Col>
        </Row>
      </Container>
      <hr className="hr" />
      <Container fluid="xxl">
        <Row className="pb-4">
          <Col lg="8">
            <p className="footer-text text-center text-lg-start m-0">
              © UPIGateway 2020-23, All Rights Reserved.
            </p>
          </Col>
          <Col
            lg="4"
            className="justify-content-center justify-content-xl-end d-flex flex-row"
          >
            <Link
              className="me-2 link-low-em"
              to="/policy"
              title="UPI Gateway Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="me-2 link-low-em"
              to="/terms"
              title="UPI Gateway T&amp;C"
            >
              T&amp;C
            </Link>
            <Link className="link-low-em" to="/account_access_police">
              AA Policy
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
