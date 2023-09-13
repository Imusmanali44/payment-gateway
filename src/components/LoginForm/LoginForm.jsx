import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { Eye } from "react-bootstrap-icons";
import "./style.css";
const LoginForm = () => {
  return (
    <Form className="js-validation-signin w-100">
      <Row>
        <Col lg="10" className="mx-auto">
          <h4 className="mb-4">Sign in to your account</h4>
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
              <div className="label-group d-flex justify-content-between">
                <Form.Label>Password</Form.Label>
                <Link className="fs-7 fw-medium" to="/forgot">
                  Forgot Password ?
                </Link>
              </div>

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
          <div className="d-flex justify-content-center">
            <div className="form-check form-check-sm mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="logged_in"
                checked=""
              />
              <Form.Check type={"checkbox"} />
              <label className="form-check-label text-muted fs-7">
                Keep me logged in
              </label>
            </div>
          </div>
          <Button
            className="btn btn-primary text-uppercase btn-block fw-semibold"
            type="submit"
          >
            Login
          </Button>
          <p className="p-sm mt-3 mb-1 text-center">New to UPIGateway? </p>
          <Link
            className="btn btn-soft-primary text-uppercase btn-block fw-semibold"
            to="/register"
          >
            Create new account
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
