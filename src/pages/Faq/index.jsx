import AppLayout from "../../layout/AppLayout";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

const Faq = () => {
  return (
    <AppLayout>
      <div className="pg-app-body-wrapper">
        <section className="section faq">
          <Container>
            <div className="head text-center mb-5">
              <h2>Frequently Asked Questions</h2>
              <p>Can’t find the answer you’re looking for? Contact Us</p>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is UPIGateway</Accordion.Header>
                <Accordion.Body>
                  UPIGateway is a platform that generates dynamic QR codes,
                  which helps businesses accept payments through UPI with 0%
                  transaction fee.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How does UPIGateway work?</Accordion.Header>
                <Accordion.Body>
                  UPIGateway is a platform that generates dynamic QR codes to
                  enable businesses to accept payments from customers through
                  various UPI-enabled apps at 0% transaction fee. At the time of
                  checkout, UPIGateway generates a unique QR code that is
                  displayed on the website. Customers can scan the QR code and
                  make payment through any UPI app. Once the payment is made,
                  UPIGateway verifies the transaction and sends a status
                  response through webhook.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What type of payments can be accepted through UPIGateway QR?
                </Accordion.Header>
                <Accordion.Body>
                  UPIGateway QR supports payments through all UPI-enabled apps
                  and bank accounts, including Paytm, Google Pay, PhonePe, BHIM,
                  and more.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What kind of businesses can use UPIGateway?
                </Accordion.Header>
                <Accordion.Body>
                  UPIGateway is suitable for all types of businesses, including
                  small and medium-sized enterprises, startups, and established
                  enterprises.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How do I get started with UPIGateway?
                </Accordion.Header>
                <Accordion.Body>
                  To get started with UPIGateway, sign up for an account on our
                  website and follow the steps to integrate QR service into your
                  website or app.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Is UPIGateway secure?</Accordion.Header>
                <Accordion.Body>
                  Yes, UPIGateway uses advanced security measures to protect
                  your transactions and sensitive information.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What is the price of UPIGateway plan?
                </Accordion.Header>
                <Accordion.Body>
                  You can see the plan price details by logging in and going to
                  the 'Buy Plan' section.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Does UPIgateway provide a payment gateway service?
                </Accordion.Header>
                <Accordion.Body>
                  No, UPIgateway provides only Dynamic QR code service.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </div>
    </AppLayout>
  );
};

export default Faq;
