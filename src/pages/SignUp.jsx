import AuthLayout from "../layout/AuthLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QRImage from "../assets/image.jpg";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <AuthLayout>
      <div className="pg-auth-body-wrapper">
        <Container fluid="xxl" className="h-100">
          <Row className="align-items-center h-100">
            <Col
              xl="7"
              lg="6"
              className="d-lg-block d-none v-separator separator-sm border-right-1"
            >
              <div className="auth-content py-md-0 py-8">
                <div className="row">
                  <Col xxl="10" xl="8" lg="11" className="text-center mx-auto">
                    <div className="img-fluid w-100 mb-3" id="auth_hero_added">
                      <img src={QRImage} alt="image" />
                    </div>
                    <p className="w-xxl-75 w-100 mx-auto">
                      Accept payments from your customers through our <br />
                      easy-to-use QR code service, with 0% transaction fees.
                    </p>
                  </Col>
                </div>
              </div>
            </Col>
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10 position-relative mx-auto pt-3">
              <div className="auth-content py-md-0 py-5">
                <SignUpForm />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </AuthLayout>
  )
}

export default SignUp