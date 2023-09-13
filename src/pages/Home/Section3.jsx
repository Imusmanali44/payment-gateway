import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section className="section">
      <Container fluid="xxl" className="h-100 ">
        <Row className="align-items-center h-100">
          <Col lg="12">
            <div className="text-center">
              <h5>UPIGateway's Use Cases</h5>
              <h2>
                Unlock the potential of UPIGateway's Dynamic QR in different
                scenarios
              </h2>
            </div>
          </Col>
        </Row>

        <section className="sub-section use-cases">
          <Row className="align-items-center h-100 g-5">
            <Col lg="6">
              <div className="d-flex bg-white p-4 rounded-xl border border-1 position-relative overflow-hidden align-items-center">
                <div className="sub-section-content">
                  <h3>Accepts payments via websites</h3>
                  <div className="fw-normal pe-2 mt-2">
                    Make payment acceptance a breeze by integrating dynamic QR
                    codes into your website, e-commerce platform, and mobile
                    apps.
                  </div>
                  <div className="flex items-start justify-start mt-3">
                    <Link
                      className="items-center fw-bold text-center rounded"
                      to="/"
                    >
                      Integrate Now &gt;
                    </Link>
                  </div>
                </div>
                <img
                  className="mt-4 w-50"
                  alt="hero"
                  src="https://upigateway.com/images/laptop_mokup_new.png"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex bg-white p-4 rounded-xl border border-1 position-relative overflow-hidden align-items-center">
                <div className="sub-section-content">
                  <h3>Accepts payments via OTT & Smart TV Apps</h3>
                  <div className="fw-normal pe-2 mt-2">
                    Integrate Dynamic QR into your app and start accepting
                    payments for premium features, subscriptions, or in-app
                    purchases with ease.
                  </div>
                  <div className="flex items-start justify-start mt-3">
                    <Link
                      className="items-center fw-bold text-center rounded"
                      to="/"
                    >
                      Integrate Now &gt;
                    </Link>
                  </div>
                </div>
                <img
                  className="mt-4 w-50"
                  alt="hero"
                  src="https://upigateway.com/images/tv_mokup_new.png"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex bg-white p-4 rounded-xl border border-1 position-relative overflow-hidden align-items-center">
                <div className="sub-section-content">
                  <h3>Accept payments in store</h3>
                  <div className="fw-normal pe-2 mt-2">
                    Say goodbye to errors and delays at the point of sale.
                    Display our dynamic QR code on your POS terminal and accept
                    payments seamlessly.
                  </div>
                  <div className="flex items-start justify-start mt-3">
                    <Link
                      className="items-center fw-bold text-center rounded"
                      to="/"
                    >
                      Integrate Now &gt;
                    </Link>
                  </div>
                </div>
                <img
                  className="mt-4 w-50"
                  alt="hero"
                  src="https://upigateway.com/images/pos_new.png"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex bg-white p-4 rounded-xl border border-1 position-relative overflow-hidden align-items-center">
                <div className="sub-section-content">
                  <h3>Accept payments on self serving Kiosks</h3>
                  <div className="fw-normal pe-2 mt-2">
                    Allow customers to make contactless payments at
                    self-ordering kiosks in fast-food restaurants, vending
                    machines in offices, airports, and parking lots with the
                    help of UPIGateway's dynamic QR feature.
                  </div>
                  <div className="flex items-start justify-start mt-3">
                    <Link
                      className="items-center fw-bold text-center rounded"
                      to="/"
                    >
                      Integrate Now &gt;
                    </Link>
                  </div>
                </div>
                <img
                  className="mt-4 w-50"
                  alt="hero"
                  src="https://upigateway.com/images/kiosks_new_pos.png"
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default Section3;
