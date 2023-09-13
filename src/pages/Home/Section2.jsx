import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Section2 = () => {
return (
<section className="section">
    <Container fluid="xxl" className="h-100 ">
        <Row className="align-items-center h-100">
            <Col lg="12">
            <div className="text-center">
                <h5>How it works</h5>
                <h2>How does UPIGateway Dynamic QR work?</h2>
            </div>
            </Col>
        </Row>

        <section className="sub-section">
            <Row className="align-items-center h-100">
                <Col lg="6">
                </Col>
                <Col lg="6">
                <div className="QR-work d-flex flex-column">
                    <div className="step d-flex align-items-center justify-content-between">
                        <div className="step-no rounded-circle d-flex align-items-center justify-content-center">
                            <h3 className="rounded-circle d-flex align-items-center justify-content-center">
                                1
                            </h3>
                        </div>
                        <p>
                            Customer will select the product on your website and proceed
                            to checkout.
                        </p>
                    </div>
                    <div className="step d-flex align-items-center justify-content-between">
                        <div className="step-no rounded-circle d-flex align-items-center justify-content-center">
                            <h3 className="rounded-circle d-flex align-items-center justify-content-center">
                                1
                            </h3>
                        </div>
                        <p>
                            Customer will select the product on your website and proceed
                            to checkout.
                        </p>
                    </div>
                    <div className="step d-flex align-items-center justify-content-between">
                        <div className="step-no rounded-circle d-flex align-items-center justify-content-center">
                            <h3 className="rounded-circle d-flex align-items-center justify-content-center">
                                1
                            </h3>
                        </div>
                        <p>
                            Customer will select the product on your website and proceed
                            to checkout.
                        </p>
                    </div>
                    <div className="step d-flex align-items-center justify-content-between">
                        <div className="step-no rounded-circle d-flex align-items-center justify-content-center">
                            <h3 className="rounded-circle d-flex align-items-center justify-content-center">
                                1
                            </h3>
                        </div>
                        <p>
                            Customer will select the product on your website and proceed
                            to checkout.
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

export default Section2;