import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { Eye } from "react-bootstrap-icons";
// import "./style.css";

const SignUpForm = () => {
  return (
    <Form className="js-validation-signin w-100">
      <Row>
        <Col lg="10" className="mx-auto">
          <h4 className="mb-4">Register to your account</h4>
          <Row className=" gx-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="valid"
                type="text"
                name="name"
                placeholder="Enter Your number"
              />
            </Form.Group>
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="valid"
                type="email"
                name="email"
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
          <div className="d-flex justify-content-start">
            <div className="form-check form-check-sm mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="logged_in"
                checked=""
              />
              <Form.Check type={"checkbox"} />
              <label className="form-check-label text-muted fs-7">
                I agree to the following:{" "}
                <Link className="fs-7 fw-medium" to="/auth/forgot">
                  T&C
                </Link>{" "}
                and{" "}
                <Link className="fs-7 fw-medium" to="/auth/forgot">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
          <Button
            className="btn btn-primary text-uppercase btn-block fw-semibold"
            type="submit"
          >
            Register
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

export default SignUpForm;
