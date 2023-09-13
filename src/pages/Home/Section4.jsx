import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section4 = () => {
  return (
    <section className="section">
      <Container fluid="xxl" className="h-100 ">
        <Row className="align-items-center h-100">
          <Col lg="12">
            <div className="text-center">
              <h5>UPIGateway's Features</h5>
              <h2>
                Advantages of integrating UPIGateway's Dynamic QR code service
              </h2>
            </div>
          </Col>
        </Row>

        <section className="sub-section features">
          <Row className=" h-100 g-4">
            <Col lg="3">
              <div className="d-flex flex-column p-4">
                <div className="feature-img mb-3">
                  <img
                    src="https://upigateway.com/images/money.png"
                    alt="Icon"
                  />
                </div>
                <div className="sub-section-content">
                  <h3 className="mb-2">Accepts payments via websites</h3>
                  <p className="mb-4">
                    Simplify payment collection with our dynamic QR code feature
                    that allows you to set the payment amount and gives you
                    complete control over the transaction.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className="d-flex flex-column p-4">
                <div className="feature-img mb-3">
                  <img
                    src="https://upigateway.com/images/bhim_upi.png"
                    alt="Icon"
                  />
                </div>
                <div className="sub-section-content">
                  <h3 className="mb-2">Supports all UPI apps</h3>
                  <p className="mb-4">
                    Accept payments from all UPI and bank apps, including Paytm,
                    Google Pay, PhonePe, BHIM, and more.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className="d-flex flex-column p-4">
                <div className="feature-img mb-3">
                  <img
                    src="https://upigateway.com/images/security.png"
                    alt="Icon"
                  />
                </div>
                <div className="sub-section-content">
                  <h3 className="mb-2">Secure & seamless</h3>
                  <p className="mb-4">
                    Merchants can generate a unique QR code for each order,
                    which can be easily displayed on a POS terminal or website
                    for convenient payment collection.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div className="d-flex flex-column p-4">
                <div className="feature-img mb-3">
                  <img
                    src="https://upigateway.com/images/setting.png"
                    alt="Icon"
                  />
                </div>
                <div className="sub-section-content">
                  <h3 className="mb-2">Easy Integration</h3>
                  <p className="mb-4">
                    Connect seamlessly using our no-code setup,
                    developer-friendly APIs, and native SDK.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default Section4;
