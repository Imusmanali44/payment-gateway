import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { Eye } from "react-bootstrap-icons";
// import "./style.css";

const ForgotPasswordForm = () => {
  return (
    <Form className="js-validation-signin w-100">
      <Row>
        <Col lg="10" className="mx-auto">
          <h4 className="mb-4">Forgot Password</h4>
          <Row className=" gx-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                className="valid"
                type="text"
                name="username"
                placeholder="Enter Mobile number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>

              <InputGroup>
                <div className="input-affix-wrapper">
                  <Form.Control
                    className="valid border-right-0"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <div className="form-button input-suffix text-muted">
                    <Eye />
                  </div>
                </div>
              </InputGroup>
            </Form.Group>
          </Row>

          <Button
            className="btn btn-primary text-uppercase btn-block fw-semibold"
            type="submit"
          >
            Next
          </Button>
          <p className="p-sm mt-3 mb-1 text-center">
            Have an account? {""}
            <Link className="fs-7 fw-medium" to="/login">
              <u>Login</u>
            </Link>
          </p>
        </Col>
      </Row>
    </Form>
  );
};

export default ForgotPasswordForm;
