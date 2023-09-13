import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const PaymentSetting = () => {
  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                <h1 className="pg-title">Payment Settings</h1>
                <p>Manage your payment settings and preferences in one place</p>
              </div>

              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>

        <div className="tab-content mt-2">
          <div className="tab-pane fade show active" id="tab_block_1">
            <Row>
              <Col sm="12" className="mb-3">
                <div className="card card-border">
                  <div className="card-body">
                    <Row className="row">
                      <Col md="8" className="flex-column">
                        <h3 className="mb-1 content-heading">
                          Cancel Button Setting
                        </h3>
                        <p className="text-muted mb-2">
                          If you want to hide the cancel button on the QR page,
                          you can toggle the switch below.
                        </p>
                        <div className="row">
                          <div className="col-lg-12">
                            <hr />
                          </div>
                          <div className="col-lg-8">
                            <p className="text-muted mt-2"></p>
                            <Form.Group
                              controlId="setting_hide_cancel_btn"
                              className="w-100"
                            >
                              <Form.Check
                                id="setting_hide_cancel_btn"
                                type="switch"
                                name="hide_cancel_btn"
                                label="Button Show"
                                checked
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                          <img
                            className="border rounded-4 mt-5 mt-md-0 mx-md-0 mx-5 w-100"
                            src="https://merchant.upigateway.com/imgs/qr_cancel_btn.png"
                            alt="Woocommerce Logo"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default PaymentSetting;
