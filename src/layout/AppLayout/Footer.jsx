import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer app-footer">
      <Container fluid="xxl" className="footer-top">
        <Row>
          <Col lg="4">
            <Link className="w-100" to="/">
              <div className="flex align-items-start justify-content-start">
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
              </div>
            </Link>
            <p className="w-100 mt-3 me-5">
              Accept payments from your customers through our easy-to-use
              Dynamic QR code service, with 0% transaction fees.
            </p>
          </Col>
          <Col lg="4">
            <div className="w-100">
              <h3 className="mb-3 text-base font-medium text-black">
                Contact Us
              </h3>
              <ul className="p-0 mb-10 space-y-1 list-none">
                <li>
                  <p className="me-8">
                    Feelfree to get in touch with us via send us a message
                  </p>
                </li>
                <li>
                  <a
                    className=" font-medium text-left "
                    href="mailto:support@upigateway.com"
                  >
                    support@upigateway.com
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="4">
            <div className="w-100">
              <h3 className="mb-3 text-base font-medium text-black">
                Subscribe to our Newsletter:
              </h3>
              <Form className="w-100 postnewsviafetch custom-validation">
                <div className="flex flex-col">
                  <Form.Group className="mb-4">
                    <Form.Control
                      className="py-2"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>

                  <button
                    className="btn btn-primary btn-block fw-semibold btn btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid="xxl">
        <Row>
          <Col>
            <p className="footer-text text-center text-lg-start py-4 m-0">
              *UPIGateway provides Dynamic QR Generating service. UPIGateway
              does not offer payment gateway service, nor does it provide UPI ID
              and UPI Merchant account. Please read our policy and T&amp;C
              before using our services
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-bottom py-4">
        <Container fluid="xxl">
          <Row>
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
      </Container>
    </footer>
  );
};

export default Footer;
