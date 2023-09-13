import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section5 = () => {
  return (
    <section className="section">
      <Container fluid="xxl" className="h-100 ">
        <Row className="align-items-center h-100">
          <Col lg="12">
            <div className="text-center">
              <h5>UPIGateway's Testimonial</h5>
              <h2>What people are saying about UPIGateway</h2>
            </div>
          </Col>
        </Row>

        <section className="sub-section ">
          <div className="testimonial">
            <Row>
              <Col lg="4" className="border-right-1">
                <div className="d-flex flex-column p-5">
                  <div className="sub-section-content">
                    <h3 className="mb-2 text-center">
                      Secure, reliable, and easy-to-use
                    </h3>
                    <p className="my-3 text-center">
                      "We have been using UPIGateway for a while now, and we are
                      extremely satisfied with its services. The platform is
                      easy to use, and the payment process is seamless.
                      Moreover, the security features provided by UPIGateway are
                      top-notch, giving us complete peace of mind."
                    </p>
                    <div className="testimonial-user d-flex align-items-center justify-content-center">
                      <img
                        src="https://upigateway.com/images/user1.png"
                        alt="Icon"
                        className="rounded-circle"
                      />
                      <div className="info ms-2">
                        <h5>Akshay Arora</h5>
                        <h6>Telecom Industry</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="border-right-1">
                <div className="d-flex flex-column p-5">
                  <div className="sub-section-content">
                    <h3 className="mb-2 text-center">
                      Revolutionizing Payment Acceptance
                    </h3>
                    <p className="my-3 text-center">
                      "UPIGateway has been a game-changer for our business. With
                      its dynamic QR feature, we can now accept payments from
                      customers through multiple payment apps, making the
                      payment process hassle-free. The customer support team is
                      also very responsive and helpful."
                    </p>
                    <div className="testimonial-user d-flex align-items-center justify-content-center">
                      <img
                        src="https://upigateway.com/images/user1.png"
                        alt="Icon"
                        className="rounded-circle"
                      />
                      <div className="info ms-2">
                        <h5>Akshay Arora</h5>
                        <h6>Telecom Industry</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="d-flex flex-column p-5">
                  <div className="sub-section-content">
                    <h3 className="mb-2 text-center">
                      Streamlining Payments with UPIGateway
                    </h3>
                    <p className="my-3 text-center">
                      "We switched to UPIGateway for our payment processing
                      needs and it has made a significant difference in our
                      operations. The system is intuitive and easy to use, and
                      we appreciate the flexibility to accept payments through
                      various UPI apps."
                    </p>
                    <div className="testimonial-user d-flex align-items-center justify-content-center">
                      <img
                        src="https://upigateway.com/images/user1.png"
                        alt="Icon"
                        className="rounded-circle"
                      />
                      <div className="info ms-2">
                        <h5>Akshay Arora</h5>
                        <h6>Telecom Industry</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Section5;
