import { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";

const ConnectMerchant = () => {
  const [key, setKey] = useState("english");
  const [merchantTab, setMerchantTab] = useState("start-connect");

  const [infoModal, setInfoModal] = useState(false);

  const handleLangTabChange = (tabName) => {
    setKey(tabName);
  };

  const handleSelectMerchant = () => {
    setInfoModal(true);
  };

  const handleAgreeCondition = () => {
    setInfoModal(false);
    setMerchantTab("select");
  };

  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                {merchantTab === "start-connect" ? (
                  <>
                    <h1 className="pg-title">Connect UPI Merchant</h1>
                    <p>
                      Connect your Merchant App to the UPIGateway and accept
                      payments online.
                    </p>
                  </>
                ) : merchantTab === "select" ? (
                  <>
                    <a
                      className="back_select_merchant_btn mb-2 d-flex align-items-center"
                      href="#"
                    >
                      <span className="icon me-1 d-flex align-items-center">
                        <span className="feather-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-left"
                          >
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                        </span>
                      </span>
                      <div className="back_select_merchant_btn">
                        Select UPI Merchant
                      </div>
                    </a>
                    <div className="d-flex flex-column js-validation-yono-sbi">
                      <h1 className="pg-title">Select UPI Merchant</h1>
                      <p>
                        Select the Merchant App that you want to connect with
                        the UPIGateway
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <a
                      className="back_select_merchant_btn mb-2 d-flex align-items-center"
                      href="#"
                    >
                      <span className="icon me-1 d-flex align-items-center">
                        <span className="feather-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-left"
                          >
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                        </span>
                      </span>
                      <div className="back_select_merchant_btn">
                        Back to Select Merchant
                      </div>
                    </a>
                    <div className="d-flex flex-column js-validation-yono-sbi">
                      <h1 className="pg-title">
                        YONO SBI Merchant Sub User Login
                      </h1>
                      <p>
                        Enter the YONO SBI Sub User account details to connect
                        YONO SBI with the UPIGateway.
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>
        <div className="tab-content mt-2">
          <div className="tab-pane fade show active" id="tab_block_1">
            {merchantTab === "start-connect" && (
              <>
                <Row className="info_div">
                  <Col sm="12">
                    <div className="card card-border">
                      <div className="card-body">
                        <Row className="row">
                          <Col md="8" className="flex-column">
                            <div className="d-flex flex-column ms-2">
                              <h1 className="mb-1 content-heading">
                                You are one step
                              </h1>
                              <h1 className="mb-1 content-heading">
                                away from accepting
                              </h1>
                              <h1 className="mb-3 content-heading">
                                the payment via QR
                              </h1>
                              <p className="text-muted mb-5">
                                Available Merchant: PhonePe Business, HDFC Bank
                                SmartHub Vyapar, YONO SBI Merchant
                              </p>
                              <div className="d-flex">
                                <div className="d-flex position-relative">
                                  <div
                                    className="animate-ping border-primary position-absolute w-100 h-100 top-0 left-0"
                                    onClick={handleSelectMerchant}
                                    style={{
                                      opacity: ".5",
                                      borderRadius: "0.5rem",
                                      border: "1px solid",
                                      cursor: "pointer",
                                    }}
                                  ></div>
                                  <button
                                    className="p-0 select_merchant_btn mb-5 mb-md-0 btn btn-primary"
                                    type="button"
                                    onClick={handleSelectMerchant}
                                  >
                                    <span className="px-3 py-2 d-block">
                                      <span className="btn-text">
                                        Select Merchant
                                      </span>
                                      <span className="icon ms-2">
                                        <span className="feather-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-arrow-right"
                                          >
                                            <line
                                              x1="5"
                                              y1="12"
                                              x2="19"
                                              y2="12"
                                            ></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="4">
                            <div className="d-flex justify-content-center align-items-center flex-column h-100">
                              <img
                                className="border rounded-4 w-100"
                                src="https://merchant.upigateway.com/imgs/auth_hero.png"
                                alt="Woocommerce Logo"
                                style={{ borderColor: "#eaeaea!important" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="info_div">
                  <Col sm="12">
                    <div className="d-flex mb-md-4 mb-3 pt-md-6 mt-md-0 mt-4">
                      <div className="d-flex flex-wrap justify-content-between flex-1">
                        <div className="mb-lg-0 mb-2 me-8">
                          <h4 className="pg-title">
                            How UPIGateway - Merchant Connect Work!
                          </h4>
                          <p>
                            By following the below steps, you can get a better
                            understanding of the functioning of the UPIGateway
                            service.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm="12">
                    <div className="card card-border overflow-hidden">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="d-flex justify-content-start align-items-center flex-column text-center w-100 h-100">
                              <img
                                className="w-100 p-1 border rounded-4 step_to_login_img"
                                src="https://merchant.upigateway.com/imgs/all_step_1.png"
                                alt=""
                                style={{ maxWidth: "256px!important" }}
                              />
                              <p className="fw-bold step_to_login_p px-sm-4 text-muted mt-3">
                                Step 1
                              </p>
                              <p
                                className="w-100 step_to_login_p px-sm-4 text-muted mt-1 mb-4 mb-md-0"
                                style={{ maxWidth: "290px" }}
                              >
                                You must have a UPI Merchant account that is
                                supported by UPIGateway to use our service.
                                Create new merchant account if you don't have
                                one.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="d-flex justify-content-start align-items-center flex-column text-center w-100 h-100">
                              <img
                                className="w-100 p-1 border rounded-4 step_to_login_img"
                                src="https://merchant.upigateway.com/imgs/all_step_2.png"
                                alt=""
                                style={{ maxWidth: "256px!important" }}
                              />
                              <p className="fw-bold step_to_login_p px-sm-4 text-muted mt-3">
                                Step 2
                              </p>
                              <p
                                className="w-100 step_to_login_p px-sm-4 text-muted mt-1 mb-4 mb-md-0"
                                style={{ maxWidth: "290px" }}
                              >
                                <a
                                  href="#"
                                  style={{ textDecoration: "underline" }}
                                >
                                  Connect your preferred UPI Merchant account{" "}
                                </a>
                                with UPIGateway, and{" "}
                                <a
                                  href="/user/api_docs"
                                  style={{ textDecoration: "underline" }}
                                >
                                  integrate our API
                                </a>
                                with your portal for seamless integration of our
                                UPIGateway service.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="d-flex justify-content-start align-items-center flex-column text-center w-100 h-100">
                              <img
                                className="w-100 p-1 border rounded-4 step_to_login_img"
                                src="https://merchant.upigateway.com/imgs/all_step_3.png"
                                alt=""
                                style={{ maxWidth: "256px!important" }}
                              />
                              <p className="fw-bold step_to_login_p px-sm-4 text-muted mt-3">
                                Step 3
                              </p>
                              <p
                                className="w-100 step_to_login_p px-sm-4 text-muted mt-1 mb-4 mb-md-0"
                                style={{ maxWidth: "290px" }}
                              >
                                We will create the QR code for your merchant
                                account on your behalf as part of our service,
                                which will allow you to receive UPI payments
                                effortlessly.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="d-flex justify-content-start align-items-center flex-column text-center w-100 h-100">
                              <img
                                className="w-100 p-1 border rounded-4 step_to_login_img"
                                src="https://merchant.upigateway.com/imgs/all_step_4.png"
                                alt=""
                                style={{ maxWidth: "256px!important" }}
                              />
                              <p className="fw-bold step_to_login_p px-sm-4 text-muted mt-3">
                                Step 4
                              </p>
                              <p
                                className="w-100 step_to_login_p px-sm-4 text-muted mt-1 mb-4 mb-md-0"
                                style={{ maxWidth: "290px" }}
                              >
                                Our QR code enables easy and secure payment
                                acceptance from any UPI app, with automatic
                                transaction confirmation via
                                <a
                                  href="/user/api_credentials"
                                  style={{ textDecoration: "underline" }}
                                >
                                  Webhook.
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </>
            )}

            {merchantTab === "select" && (
              <div
                className="raw select_merchant_div flex-column flex-md-row"
                id="select_merchant_form"
              >
                <Row>
                  <Col md="6" className="mb-md-1 mb-3">
                    <div className="merchant_section">
                      <div className="mb-3 d-flex align-items-center flex-row w-100">
                        <Form.Group
                          controlId="merchantTypeYonoSbi"
                          className="w-100"
                        >
                          <Form.Check
                            type="radio"
                            value="yono_sbi"
                            name="merchant_type"
                            label={
                              <>
                                <div
                                  className="hk-ribbon-type-1 ribbon-wth-icon ribbon-wth-flag end-touch"
                                  style={{ top: "8px" }}
                                >
                                  <span>New</span>
                                </div>
                                <img
                                  className="border rounded-7 merchant_type_icon"
                                  src="https://merchant.upigateway.com/imgs/yono_sbi.png"
                                  alt=""
                                  style={{ borderColor: "#eaeaea!important" }}
                                />
                                <span className="d-block text-start">
                                  <h5 className="pg-title ms-3 text-start d-block fs-6 mb-0 mt-0">
                                    YONO SBI Merchant
                                  </h5>
                                </span>
                              </>
                            }
                            className="merchant_type_radio"
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="col-md-6 mb-md-1 mb-3">
                    <div className="merchant_section">
                      <div className="mb-3 d-flex align-items-center flex-row w-100">
                        <Form.Group
                          controlId="merchantTypeHdfc"
                          className="w-100"
                        >
                          <Form.Check
                            type="radio"
                            value="hdfc"
                            name="merchant_type"
                            label={
                              <>
                                <div
                                  className="hk-ribbon-type-1 ribbon-wth-icon ribbon-wth-flag end-touch"
                                  style={{ top: "8px" }}
                                >
                                  <span>Recommended</span>
                                </div>
                                <img
                                  className="border rounded-7 merchant_type_icon"
                                  src="https://merchant.upigateway.com/imgs/hdfc_hub.png"
                                  alt=""
                                  style={{ borderColor: "#eaeaea!important" }}
                                />
                                <span className="d-block text-start">
                                  <h5 className="pg-title ms-3 text-start d-block fs-6 mb-0 mt-0">
                                    HDFC Bank SmartHub Vyapar
                                  </h5>
                                </span>
                              </>
                            }
                            className="merchant_type_radio"
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-6 mb-md-1 mb-3">
                    <div className="merchant_section">
                      <div className="mb-3 d-flex align-items-center flex-row w-100">
                        <Form.Group
                          controlId="merchantTypePhonepeBusiness"
                          className="w-100"
                        >
                          <Form.Check
                            type="radio"
                            value="phonepe_business"
                            name="merchant_type"
                            label={
                              <>
                                <img
                                  className="border rounded-7 merchant_type_icon"
                                  src="https://merchant.upigateway.com/imgs/phonepe_business.png"
                                  alt=""
                                  style={{ borderColor: "#eaeaea!important" }}
                                />
                                <span className="d-block text-start">
                                  <h5 className="pg-title ms-3 text-start d-block fs-6 mb-0 mt-0">
                                    PhonePe Business
                                  </h5>
                                </span>
                              </>
                            }
                            className="merchant_type_radio"
                          />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-4 mb-md-1 mb-3">
                    <div className="d-flex">
                      <div className="d-flex position-relative">
                        <button
                          className="px-3 py-2 mb-5 mb-md-0 btn btn-primary"
                          id="merchant_btn"
                          type="button"
                          onClick={() => setMerchantTab("connecting")}
                        >
                          <span>
                            <span className="btn-text">Next</span>
                            <span className="icon ms-2">
                              <span className="feather-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-arrow-right"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            )}
            {merchantTab === "connecting" && (
              <div className="row merchant_div flex-column flex-md-row">
                <div className="col-12 yono_sbi_div">
                  <Form
                    className="mb-md-6 mb-5 js-validation-yono-sbi"
                    id="upi_yono_sbi_merchant_login"
                  >
                    <Row id="js-validation-yono-sbi">
                      <Col sm="12" className="stretch-card">
                        <Row className="flex-grow-1">
                          <Col md="12" className="grid-margin stretch-card">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <Row>
                                  <Col sm="12" md="2">
                                    <div className="d-flex justify-content-center align-items-start">
                                      <img
                                        className="d-md-none"
                                        src="https://merchant.upigateway.com/imgs/md_yono_sbi_connect.png"
                                        alt=""
                                      />
                                      <img
                                        className="d-none d-md-flex"
                                        src="https://merchant.upigateway.com/imgs/yono_sbi_connect.png"
                                        alt=""
                                      />
                                    </div>
                                  </Col>
                                  <Col
                                    sm="12"
                                    md="8"
                                    className="d-flex justify-content-center flex-column ms-md-5 mt-4 mt-md-0"
                                  >
                                    <Row>
                                      <Col lg="6">
                                        <Form.Group
                                          className="mb-4"
                                          controlId="tid"
                                        >
                                          <Form.Label>
                                            UPI Merchant
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Form.Label>

                                          <Form.Select
                                            id="upi_merchant"
                                            name="upi_merchant"
                                            aria-label="Default select example"
                                            data-placeholder="Choose one.."
                                            disabled
                                          >
                                            <option value="html">
                                              YONO SBI Merchant
                                            </option>
                                          </Form.Select>
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-4"
                                          controlId="tid"
                                        >
                                          <Form.Label>
                                            Sub User TID
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Form.Label>
                                          <Form.Control
                                            type="text"
                                            name="tid"
                                            id="tid"
                                            placeholder="Enter Sub User TID"
                                          />
                                          <Form.Control
                                            type="hidden"
                                            name="provider_id"
                                            placeholder="Enter Sub User TID"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-4"
                                          controlId="password"
                                        >
                                          <Form.Label>
                                            Sub User Password
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </Form.Label>
                                          <Form.Control
                                            type="text"
                                            name="password"
                                            id="password"
                                            placeholder="Enter Sub User Password"
                                          />
                                        </Form.Group>
                                      </Col>
                                    </Row>
                                    <Row className="items-push">
                                      <Col lg="12">
                                        <button
                                          className="btn btn-primary"
                                          type="submit"
                                        >
                                          Submit
                                        </button>
                                        <button
                                          className="back_select_merchant_btn ms-2 btn btn-outline-primary"
                                          type="button"
                                        >
                                          Back
                                        </button>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                  <div className="d-flex mb-md-4 mb-3 pt-md-6 pt-5 yono_sbi_div border-top">
                    <div className="d-flex flex-wrap justify-content-between flex-1">
                      <div className="mb-lg-0 mb-2 me-8">
                        <h4 className="pg-title">
                          How to create "Sub User" in YONO SBI Merchant App ?
                        </h4>
                        <p>
                          Follow the below steps to create a YONO SBI Merchant
                          Sub User account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Row className="row yono_sbi_div">
                    <div className="col-12 col-xl-12 stretch-card">
                      <div className="row flex-grow-1">
                        <div className="col-md-12 grid-margin stretch-card">
                          <div className="card card-border mb-0 h-100">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-12">
                                  <div
                                    className="alert alert-success d-flex align-items-center mb-4 mb-0"
                                    role="alert"
                                  >
                                    <div className="flex-shrink-0">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user"
                                      >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                      </svg>
                                    </div>
                                    <div className="flex-grow-1 ms-1">
                                      <p className="mb-0">
                                        If you face problem in creating an
                                        account through YONO SBI Merchant App,
                                        you can contact your home branch to
                                        create an account.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      1. Download{" "}
                                      <a
                                        className="fw-medium"
                                        href="https://play.google.com/store/apps/details?id=com.synergy.sbimerchant&amp;hl=en_IN&amp;gl=US"
                                      >
                                        YONO SBI Merchant App{" "}
                                      </a>
                                      on playstore. Login or Create an account
                                      in YONO SBI Merchant App.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      {" "}
                                      2. Click "☰" button on navigation bar and
                                      select "Sub User".
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      3. Now click on the "Create Sub User".
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      4. Enter Sub User details and click on
                                      "Submit". (Use own other mobile number for
                                      Sub User)
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      5. Enter the OTP received on the
                                      registered mobile number and click on
                                      "VERIFY".
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      6. Sub User account created successfully.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      7. Click "☰" button on navigation bar and
                                      select "Sub User &gt; Modify Sub User".
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      8. Copy the Sub User TID and Logout
                                      Merchant account from the app.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      9. Login Sub User account in YONO SBI
                                      Merchant App.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      {" "}
                                      10. Enter &amp; Verify OTP.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      11. Set Password (this password required
                                      at login time in UPIGateway).
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 col-lg-4">
                                  <div className="d-flex justify-content-center align-items-center flex-column text-center">
                                    <img
                                      src="https://merchant.upigateway.com/imgs/step1.png"
                                      alt=""
                                      style={{ width: "250px" }}
                                    />
                                    <p className="px-sm-4 text-muted mb-5 mt-3">
                                      12. After login successfully, Now logout
                                      Sub User account from the app and login
                                      sub user account in UPIGateway.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* terms & condition Modal */}
      <Modal show={infoModal}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>

          <div className="d-flex flex-row ms-auto">
            <Nav
              variant="tabs"
              className="nav-line nav-light justify-content-end"
            >
              <Nav.Item>
                <Nav.Link
                  className={key === "english" ? "active" : ""}
                  onClick={() => handleLangTabChange("english")}
                >
                  English
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={key === "hindi" ? "active" : ""}
                  onClick={() => handleLangTabChange("hindi")}
                >
                  Hindi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="english" title="English">
              <div className="row mb-2 pb-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M216.665 666.667H416.665V133.333H216.665C142.999 133.333 83.332 193 83.332 266.667V533.333C83.332 607 142.999 666.667 216.665 666.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M600 666.667H500V133.333H600C673.667 133.333 733.333 193 733.333 266.667V533.333C733.333 607 673.667 666.667 600 666.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M500 733.333C486.333 733.333 475 722 475 708.333V91.6665C475 77.9998 486.333 66.6665 500 66.6665C513.667 66.6665 525 77.9998 525 91.6665V708.333C525 722 513.667 733.333 500 733.333Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M268.591 267H230.409C208.645 267 197 278.455 197 300.409V338.591C197 360.545 208.645 372 230.409 372H268.591C290.355 372 302 360.545 302 338.591V300.409C302 278.455 290.355 267 268.591 267Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M268.591 428H230.409C208.645 428 197 439.455 197 461.409V499.591C197 521.545 208.645 533 230.409 533H268.591C290.355 533 302 521.545 302 499.591V461.409C302 439.455 290.355 428 268.591 428Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          We generate QR codes on your behalf so that you can
                          accept payments with ease.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M733.335 258.997V299.997H66.668V251.33C66.668 174.997 128.668 113.33 205.001 113.33H533.335V198.997C533.335 241.33 558.668 266.663 601.001 266.663H699.001C712.335 266.663 723.668 264.33 733.335 258.997Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M66.668 300V548.667C66.668 625 128.668 686.667 205.001 686.667H595.001C671.335 686.667 733.335 625 733.335 548.667V300H66.668ZM266.668 575H200.001C186.335 575 175.001 563.667 175.001 550C175.001 536.333 186.335 525 200.001 525H266.668C280.335 525 291.668 536.333 291.668 550C291.668 563.667 280.335 575 266.668 575ZM483.335 575H350.001C336.335 575 325.001 563.667 325.001 550C325.001 536.333 336.335 525 350.001 525H483.335C497.001 525 508.335 536.333 508.335 550C508.335 563.667 497.001 575 483.335 575Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M698.999 33.3335H600.999C558.665 33.3335 533.332 58.6668 533.332 101V199C533.332 241.333 558.665 266.667 600.999 266.667H698.999C741.332 266.667 766.665 241.333 766.665 199V101C766.665 58.6668 741.332 33.3335 698.999 33.3335ZM711.332 183C714.999 187.333 716.999 192 716.999 197.667C716.999 202.333 714.999 207.667 711.332 211.333C703.665 219 690.665 219 682.999 211.333L649.999 178.333L617.332 211.667C609.665 219.333 596.665 219.333 588.665 211.333C580.999 203.667 580.999 190.667 588.665 183L621.999 150.333L588.999 117.333C581.332 109.667 580.999 96.6668 588.665 88.6668C596.332 80.6668 609.332 81.0002 617.332 89.0002L649.999 122L683.332 88.6668C690.999 81.0002 703.999 81.0002 711.665 88.6668C715.332 93.0002 716.999 98.0002 717.332 103.333C717.332 108 715.332 113.333 711.999 117.333L678.665 150.667L711.332 183Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          We do not provide payment gateway services, and we are
                          not involved in the payment process in any way.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.8"
                            d="M712.363 379.67V579.337C712.363 671.337 637.697 746.004 545.697 746.004H254.362C162.362 746.004 87.6953 671.337 87.6953 579.337V382.004C113.029 409.337 149.029 425.004 188.029 425.004C230.029 425.004 270.362 404.004 295.695 370.337C318.362 404.004 357.03 425.004 400.03 425.004C442.697 425.004 480.697 405.004 503.697 371.67C529.363 404.67 569.03 425.004 610.363 425.004C650.697 425.004 687.363 408.67 712.363 379.67Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M745.328 275.667L735.661 183.333C721.661 82.6665 675.995 41.6665 578.328 41.6665H450.328L474.995 291.666C475.328 295 475.661 298.666 475.661 305C477.661 322.333 482.995 338.333 490.995 352.666C514.995 396.666 561.661 425 610.328 425C654.661 425 694.661 405.333 719.661 370.666C739.661 344 748.661 310.333 745.328 275.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M219.655 41.6665C121.655 41.6665 76.3217 82.6665 61.9883 184.333L52.9883 276C49.655 311.666 59.3217 346.333 80.3217 373.333C105.655 406.333 144.655 425 187.988 425C236.655 425 283.322 396.667 306.988 353.333C315.655 338.333 321.322 321 322.988 303L348.99 41.9998H219.655V41.6665Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M378.305 555.333C335.971 559.667 303.973 595.667 303.973 638.333V746H495.638V650C495.971 580.333 454.971 547.333 378.305 555.333Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M499.647 41.6665H299.645L274.979 287C272.979 309.666 276.312 331 284.645 350.333C303.979 395.666 349.313 425 399.98 425C451.313 425 495.647 396.333 515.647 350.667C521.647 336.333 525.313 319.666 525.647 302.666V296.333L499.647 41.6665Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          The payment made by the user through the QR code will
                          be received in your merchant account.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M733.335 300V500C733.335 616.667 666.668 666.667 566.668 666.667H324.668C330.334 651 333.335 634.333 333.335 616.667C333.335 534 266.335 466.667 183.335 466.667C136.335 466.667 94.0013 488.667 66.668 522.667V300C66.668 183.333 133.335 133.333 233.335 133.333H566.668C666.668 133.333 733.335 183.333 733.335 300Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M400.001 483.333C446.025 483.333 483.335 446.023 483.335 400C483.335 353.977 446.025 316.667 400.001 316.667C353.978 316.667 316.668 353.977 316.668 400C316.668 446.023 353.978 483.333 400.001 483.333Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M616.668 491.667C603.001 491.667 591.668 480.333 591.668 466.667V333.333C591.668 319.667 603.001 308.333 616.668 308.333C630.335 308.333 641.668 319.667 641.668 333.333V466.667C641.668 480.333 630.335 491.667 616.668 491.667Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M183.332 466.667C136.332 466.667 93.9987 488.667 66.6654 522.667C45.6654 548.333 33.332 581 33.332 616.667C33.332 699.666 100.665 766.667 183.332 766.667C248.665 766.667 304.332 725 324.665 666.667C330.332 651 333.332 634.333 333.332 616.667C333.332 534 266.332 466.667 183.332 466.667ZM271.998 682C270.998 684 269.665 686.333 267.998 688L240.998 714.667C237.665 718.333 232.998 720 228.331 720C223.331 720 218.666 718.333 215.333 714.667C209.333 709 208.665 700 212.332 693.333H136.998C112.998 693.333 93.3317 673.666 93.3317 649.333V645.667C93.3317 635.333 101.665 627.333 111.665 627.333C121.665 627.333 129.999 635.333 129.999 645.667V649.333C129.999 653.333 132.998 656.667 136.998 656.667H212.332C208.665 649.667 209.333 641 215.333 635C222.333 628 233.998 628 240.998 635L267.998 662C269.665 663.667 270.998 665.667 271.998 668C273.664 672.333 273.664 677.333 271.998 682ZM273.332 587.666C273.332 598 264.999 606 254.999 606C244.999 606 236.665 598 236.665 587.666V584C236.665 580 233.666 576.666 229.666 576.666H154.332C157.999 583.666 157.331 592.333 151.331 598.333C147.998 601.667 143.333 603.667 138.333 603.667C133.666 603.667 128.999 601.667 125.666 598.333L98.666 571.333C96.9994 569.666 95.6664 567.666 94.6664 565.333C92.9997 561 92.9997 556 94.6664 551.333C95.6664 549.333 96.9994 547 98.666 545.333L125.666 518.667C132.666 511.333 144.331 511.333 151.331 518.667C157.331 524.333 157.999 533.333 154.332 540H229.666C253.666 540 273.332 559.667 273.332 584V587.666Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          We are not liable for any fraudulent activity that
                          takes place with your merchant account.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M725.351 530.667L512.018 146.667C483.351 94.9998 443.684 66.6665 400.018 66.6665C356.351 66.6665 316.683 94.9998 288.017 146.667L74.6835 530.667C47.6835 579.667 44.6835 626.667 66.3502 663.667C88.0168 700.667 130.683 721 186.683 721H613.351C669.351 721 712.018 700.667 733.685 663.667C755.351 626.667 752.351 579.333 725.351 530.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M400 491.667C386.333 491.667 375 480.333 375 466.667V300C375 286.333 386.333 275 400 275C413.667 275 425 286.333 425 300V466.667C425 480.333 413.667 491.667 400 491.667Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M400.001 600.003C398.001 600.003 395.668 599.67 393.335 599.337C391.335 599.003 389.335 598.337 387.335 597.337C385.335 596.67 383.335 595.67 381.335 594.337C379.668 593.003 378.001 591.67 376.335 590.337C370.335 584.003 366.668 575.337 366.668 566.67C366.668 558.003 370.335 549.337 376.335 543.003C378.001 541.67 379.668 540.337 381.335 539.003C383.335 537.67 385.335 536.67 387.335 536.003C389.335 535.003 391.335 534.337 393.335 534.003C397.668 533.003 402.335 533.003 406.335 534.003C408.668 534.337 410.668 535.003 412.668 536.003C414.668 536.67 416.668 537.67 418.668 539.003C420.335 540.337 422.001 541.67 423.668 543.003C429.668 549.337 433.335 558.003 433.335 566.67C433.335 575.337 429.668 584.003 423.668 590.337C422.001 591.67 420.335 593.003 418.668 594.337C416.668 595.67 414.668 596.67 412.668 597.337C410.668 598.337 408.668 599.003 406.335 599.337C404.335 599.67 402.001 600.003 400.001 600.003Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          We are not responsible for the suspension of your
                          merchant account due to any reasons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="hindi" title="Hindi">
              <div className="row mb-2 pb-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M216.665 666.667H416.665V133.333H216.665C142.999 133.333 83.332 193 83.332 266.667V533.333C83.332 607 142.999 666.667 216.665 666.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M600 666.667H500V133.333H600C673.667 133.333 733.333 193 733.333 266.667V533.333C733.333 607 673.667 666.667 600 666.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M500 733.333C486.333 733.333 475 722 475 708.333V91.6665C475 77.9998 486.333 66.6665 500 66.6665C513.667 66.6665 525 77.9998 525 91.6665V708.333C525 722 513.667 733.333 500 733.333Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M268.591 267H230.409C208.645 267 197 278.455 197 300.409V338.591C197 360.545 208.645 372 230.409 372H268.591C290.355 372 302 360.545 302 338.591V300.409C302 278.455 290.355 267 268.591 267Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M268.591 428H230.409C208.645 428 197 439.455 197 461.409V499.591C197 521.545 208.645 533 230.409 533H268.591C290.355 533 302 521.545 302 499.591V461.409C302 439.455 290.355 428 268.591 428Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          हम आपकी ओर से QR Code जनरेट करते हैं ताकि आप आसानी से
                          भुगतान स्वीकार कर सकें।
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M733.335 258.997V299.997H66.668V251.33C66.668 174.997 128.668 113.33 205.001 113.33H533.335V198.997C533.335 241.33 558.668 266.663 601.001 266.663H699.001C712.335 266.663 723.668 264.33 733.335 258.997Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M66.668 300V548.667C66.668 625 128.668 686.667 205.001 686.667H595.001C671.335 686.667 733.335 625 733.335 548.667V300H66.668ZM266.668 575H200.001C186.335 575 175.001 563.667 175.001 550C175.001 536.333 186.335 525 200.001 525H266.668C280.335 525 291.668 536.333 291.668 550C291.668 563.667 280.335 575 266.668 575ZM483.335 575H350.001C336.335 575 325.001 563.667 325.001 550C325.001 536.333 336.335 525 350.001 525H483.335C497.001 525 508.335 536.333 508.335 550C508.335 563.667 497.001 575 483.335 575Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M698.999 33.3335H600.999C558.665 33.3335 533.332 58.6668 533.332 101V199C533.332 241.333 558.665 266.667 600.999 266.667H698.999C741.332 266.667 766.665 241.333 766.665 199V101C766.665 58.6668 741.332 33.3335 698.999 33.3335ZM711.332 183C714.999 187.333 716.999 192 716.999 197.667C716.999 202.333 714.999 207.667 711.332 211.333C703.665 219 690.665 219 682.999 211.333L649.999 178.333L617.332 211.667C609.665 219.333 596.665 219.333 588.665 211.333C580.999 203.667 580.999 190.667 588.665 183L621.999 150.333L588.999 117.333C581.332 109.667 580.999 96.6668 588.665 88.6668C596.332 80.6668 609.332 81.0002 617.332 89.0002L649.999 122L683.332 88.6668C690.999 81.0002 703.999 81.0002 711.665 88.6668C715.332 93.0002 716.999 98.0002 717.332 103.333C717.332 108 715.332 113.333 711.999 117.333L678.665 150.667L711.332 183Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          हम Payment Gateway सेवाएं प्रदान नहीं करते हैं, और हम
                          किसी भी तरह से भुगतान प्रक्रिया में शामिल नहीं हैं।
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.8"
                            d="M712.363 379.67V579.337C712.363 671.337 637.697 746.004 545.697 746.004H254.362C162.362 746.004 87.6953 671.337 87.6953 579.337V382.004C113.029 409.337 149.029 425.004 188.029 425.004C230.029 425.004 270.362 404.004 295.695 370.337C318.362 404.004 357.03 425.004 400.03 425.004C442.697 425.004 480.697 405.004 503.697 371.67C529.363 404.67 569.03 425.004 610.363 425.004C650.697 425.004 687.363 408.67 712.363 379.67Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M745.328 275.667L735.661 183.333C721.661 82.6665 675.995 41.6665 578.328 41.6665H450.328L474.995 291.666C475.328 295 475.661 298.666 475.661 305C477.661 322.333 482.995 338.333 490.995 352.666C514.995 396.666 561.661 425 610.328 425C654.661 425 694.661 405.333 719.661 370.666C739.661 344 748.661 310.333 745.328 275.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M219.655 41.6665C121.655 41.6665 76.3217 82.6665 61.9883 184.333L52.9883 276C49.655 311.666 59.3217 346.333 80.3217 373.333C105.655 406.333 144.655 425 187.988 425C236.655 425 283.322 396.667 306.988 353.333C315.655 338.333 321.322 321 322.988 303L348.99 41.9998H219.655V41.6665Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M378.305 555.333C335.971 559.667 303.973 595.667 303.973 638.333V746H495.638V650C495.971 580.333 454.971 547.333 378.305 555.333Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M499.647 41.6665H299.645L274.979 287C272.979 309.666 276.312 331 284.645 350.333C303.979 395.666 349.313 425 399.98 425C451.313 425 495.647 396.333 515.647 350.667C521.647 336.333 525.313 319.666 525.647 302.666V296.333L499.647 41.6665Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          उपयोगकर्ता द्वारा QR Code के माध्यम से किया गया भुगतान
                          आपके मर्चेंट खाते में प्राप्त होगा।
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M733.335 300V500C733.335 616.667 666.668 666.667 566.668 666.667H324.668C330.334 651 333.335 634.333 333.335 616.667C333.335 534 266.335 466.667 183.335 466.667C136.335 466.667 94.0013 488.667 66.668 522.667V300C66.668 183.333 133.335 133.333 233.335 133.333H566.668C666.668 133.333 733.335 183.333 733.335 300Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M400.001 483.333C446.025 483.333 483.335 446.023 483.335 400C483.335 353.977 446.025 316.667 400.001 316.667C353.978 316.667 316.668 353.977 316.668 400C316.668 446.023 353.978 483.333 400.001 483.333Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M616.668 491.667C603.001 491.667 591.668 480.333 591.668 466.667V333.333C591.668 319.667 603.001 308.333 616.668 308.333C630.335 308.333 641.668 319.667 641.668 333.333V466.667C641.668 480.333 630.335 491.667 616.668 491.667Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M183.332 466.667C136.332 466.667 93.9987 488.667 66.6654 522.667C45.6654 548.333 33.332 581 33.332 616.667C33.332 699.666 100.665 766.667 183.332 766.667C248.665 766.667 304.332 725 324.665 666.667C330.332 651 333.332 634.333 333.332 616.667C333.332 534 266.332 466.667 183.332 466.667ZM271.998 682C270.998 684 269.665 686.333 267.998 688L240.998 714.667C237.665 718.333 232.998 720 228.331 720C223.331 720 218.666 718.333 215.333 714.667C209.333 709 208.665 700 212.332 693.333H136.998C112.998 693.333 93.3317 673.666 93.3317 649.333V645.667C93.3317 635.333 101.665 627.333 111.665 627.333C121.665 627.333 129.999 635.333 129.999 645.667V649.333C129.999 653.333 132.998 656.667 136.998 656.667H212.332C208.665 649.667 209.333 641 215.333 635C222.333 628 233.998 628 240.998 635L267.998 662C269.665 663.667 270.998 665.667 271.998 668C273.664 672.333 273.664 677.333 271.998 682ZM273.332 587.666C273.332 598 264.999 606 254.999 606C244.999 606 236.665 598 236.665 587.666V584C236.665 580 233.666 576.666 229.666 576.666H154.332C157.999 583.666 157.331 592.333 151.331 598.333C147.998 601.667 143.333 603.667 138.333 603.667C133.666 603.667 128.999 601.667 125.666 598.333L98.666 571.333C96.9994 569.666 95.6664 567.666 94.6664 565.333C92.9997 561 92.9997 556 94.6664 551.333C95.6664 549.333 96.9994 547 98.666 545.333L125.666 518.667C132.666 511.333 144.331 511.333 151.331 518.667C157.331 524.333 157.999 533.333 154.332 540H229.666C253.666 540 273.332 559.667 273.332 584V587.666Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          आपके मर्चेंट खाते के साथ होने वाली किसी भी धोखाधड़ी
                          गतिविधि के लिए हम उत्तरदायी नहीं हैं।
                        </p>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div
                        className="d-flex w-100 border-bottom"
                        style={{ borderStyle: "dashed!important" }}
                      ></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div className="d-flex align-items-center justify-content-center">
                        <svg
                          className="w-100 avatar-img"
                          viewBox="0 0 800 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M725.351 530.667L512.018 146.667C483.351 94.9998 443.684 66.6665 400.018 66.6665C356.351 66.6665 316.683 94.9998 288.017 146.667L74.6835 530.667C47.6835 579.667 44.6835 626.667 66.3502 663.667C88.0168 700.667 130.683 721 186.683 721H613.351C669.351 721 712.018 700.667 733.685 663.667C755.351 626.667 752.351 579.333 725.351 530.667Z"
                            fill="#199B7B"
                          ></path>
                          <path
                            d="M400 491.667C386.333 491.667 375 480.333 375 466.667V300C375 286.333 386.333 275 400 275C413.667 275 425 286.333 425 300V466.667C425 480.333 413.667 491.667 400 491.667Z"
                            fill="#15715B"
                          ></path>
                          <path
                            d="M400.001 600.003C398.001 600.003 395.668 599.67 393.335 599.337C391.335 599.003 389.335 598.337 387.335 597.337C385.335 596.67 383.335 595.67 381.335 594.337C379.668 593.003 378.001 591.67 376.335 590.337C370.335 584.003 366.668 575.337 366.668 566.67C366.668 558.003 370.335 549.337 376.335 543.003C378.001 541.67 379.668 540.337 381.335 539.003C383.335 537.67 385.335 536.67 387.335 536.003C389.335 535.003 391.335 534.337 393.335 534.003C397.668 533.003 402.335 533.003 406.335 534.003C408.668 534.337 410.668 535.003 412.668 536.003C414.668 536.67 416.668 537.67 418.668 539.003C420.335 540.337 422.001 541.67 423.668 543.003C429.668 549.337 433.335 558.003 433.335 566.67C433.335 575.337 429.668 584.003 423.668 590.337C422.001 591.67 420.335 593.003 418.668 594.337C416.668 595.67 414.668 596.67 412.668 597.337C410.668 598.337 408.668 599.003 406.335 599.337C404.335 599.67 402.001 600.003 400.001 600.003Z"
                            fill="#15715B"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex align-items-center justify-content-start h-100">
                        <p className="text-muted m-0">
                          किसी भी कारण से आपके मर्चेंट अकाउंट को बंद कर दिया
                          जाता है तो उसके लिए हम ज़िम्मेदार नहीं हैं।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
          <Row>
            <Col sm="12" className="d-flex justify-content-start flex-column">
              <div className="mb-0">
                <p className="text-muted"></p>
                <Form.Group className="mb-3" controlId="accept_warn_tc_btn">
                  <Form.Check
                    checked
                    type="checkbox"
                    name="accept_warn_tc_btn"
                    label="I have read and accept to the terms and conditions of
                  UPIGateway service."
                  />
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleAgreeCondition}>
            Agree And Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
};

export default ConnectMerchant;
