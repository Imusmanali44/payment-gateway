import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Section6 = () => {
  return (
    <section className="section bg-primary start-now">
      <Container fluid="xxl" className="h-100 ">
        <Row className="align-items-center h-100">
          <Col lg="8">
            <div className="text-lg-start text-center">
              <h2>
                Start accepting error-free payments from your customers with
                UPIGateway's Dynamic QR.
              </h2>
            </div>
          </Col>
          <Col lg="4" className="text-lg-end text-center">
            <Link to={"/login"} className="try-it-now rounded d-inline-block mt-4 mt-lg-0">
            Try it now!
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section6;
