import AppLayout from "../../layout/AppLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactUs = () => {
  return (
    <AppLayout>
      <div className="pg-app-body-wrapper">
        <section className="section contact-us">
          <Container>
            <Row>
              <Col lg="12">
                <div className="head text-center mb-5">
                  <h2>We're here to help</h2>
                  <p>Have any questions? We'd love to hear from you.</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="contact-us-form">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        className="py-4"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile No :</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter mobile no"
                        className="py-4"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="py-4"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter your message here"
                        rows={3}
                        className="py-4"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-primary "
                    >
                      Send Message
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col lg="6">
                <div className="contact-content mt-2">
                  <h3 className="mb-3">Contacts</h3>
                  <p>Feelfree to get in touch with us via send us a mail.</p>
                  <a href="mailto:support@upigateway.com">
                    support@upigateway.com
                  </a>

                  <p className="mt-5">
                    Feelfree to get in touch with us via send us a whatsapp
                    message or call.
                  </p>
                  <a href="tel:+919941593415">+91-9941593415</a>
                  <p>
                    Call us between 10 a.m. to 8 p.m. on all days except public
                    holidays.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </AppLayout>
  );
};

export default ContactUs;
