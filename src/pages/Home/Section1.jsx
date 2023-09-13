import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="section hero-section">
      <Container fluid="xxl" className="h-100 ">
        <Row className="align-items-center h-100">
          <Col lg="4">
            <div className="hero-content py-md-0 py-8">
              <h1 className="fw-bold">
                Accept payments Directly to your Account at
              </h1>
              <h2>0% Transaction Fee</h2>
              <h3 className="mt-3">
                Revolutionize Your Payment Process with Dynamic QR Codes
                Service.
              </h3>
              <p className="mt-2">
                *UPIGateway provides Dynamic QR Generating service. UPIGateway
                does not provide payment gateway service.
              </p>
              <Link to={"/login"}>
                <u>Start Accepting Payments</u>
              </Link>
            </div>
          </Col>
          <Col lg="8"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
