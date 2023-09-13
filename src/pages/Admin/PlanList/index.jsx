import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PlanList = () => {
  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                <h1 className="pg-title">Choose a plan</h1>
                <p>Flexible pricing solutions for your business</p>
              </div>

              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>
        <Row>
          <Col xl="12">
            <div
              className="alert alert-danger alert-wth-icon alert-dismissible bg-red-light-4 fade show"
              role="alert"
            >
              <span className="alert-icon-wrap">
                <i className="zmdi zmdi-close"></i>
              </span>
              On Purchase of New Plans, Old Plan will be Overwrite. Once the
              Plan is Purchase no Refund will be Given and Plans cannot be
              converted to Other Plan
            </div>
          </Col>
        </Row>
        <div className="tab-content mt-2">
          <div className="tab-pane fade show active" id="tab_block_1">
            <div className="row">
              <div className="col-12 mb-3">
                <div
                  className="tab_container row"
                  id="enterprise_tab_container"
                >
                  <div className="col-12 mb-md-4 mb-3">
                    <div className="card card-border mb-0 h-100">
                      <div className="card-header card-header-action">
                        <h6 className="my-1 py-1">Monthly Plan</h6>
                        <div className="card-action-wrap"></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-xxl-3 pb-5 stretch-card grid-margin grid-margin-md-0">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Starter
                                </h4>
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
                                  className="feather feather-award text-primary icon-xxl d-block mx-auto my-3"
                                >
                                  <circle cx="12" cy="8" r="7"></circle>
                                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                                <h1 className="text-center">₹ 1299</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 28 Days
                                </p>
                                <h5 className="text-primary text-center mb-4">
                                  4,999 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary text-white mt-4 buy_plan"
                                    data-id="6"
                                    data-amount="1299"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-xxl-3 pb-5 stretch-card grid-margin grid-margin-md-0">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Startup
                                </h4>
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
                                  className="feather feather-star text-primary icon-xxl d-block mx-auto my-3"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <h1 className="text-center">₹ 1999</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 28 Days
                                </p>
                                <h5 className="text-primary text-center mb-4">
                                  8,599 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary text-white mt-4 buy_plan"
                                    data-id="7"
                                    data-amount="1999"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-xxl-3 pb-5 stretch-card grid-margin grid-margin-md-0">
                            <div
                              className="card card-border mb-0 h-100"
                              style={{position: "relative"}}
                            >
                              <div
                                className="hk-ribbon-type-1 ribbon-wth-icon ribbon-wth-flag end-touch"
                                style={{top: "8px"}}
                              >
                                <span>Recommended</span>
                              </div>
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Business
                                </h4>
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
                                  className="feather feather-briefcase icon-xxl d-block mx-auto my-3"
                                  style={{color:"#199B7B"}}
                                >
                                  <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                                <h1 className="text-center">₹ 2499</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 28 Days
                                </p>
                                <h5
                                  className="text-center mb-4"
                                  style={{color:"#199B7B"}}
                                >
                                  11,999 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn text-white mt-4 buy_plan"
                                    data-id="8"
                                    data-amount="2499"
                                    style={{backgroundColor:"#199B7B"}}
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-xxl-3 pb-5 stretch-card">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Business +
                                </h4>
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
                                  className="feather feather-archive text-primary icon-xxl d-block mx-auto my-3"
                                >
                                  <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                  <rect
                                    x="1"
                                    y="3"
                                    width="22"
                                    height="5"
                                  ></rect>
                                  <line x1="10" y1="12" x2="14" y2="12"></line>
                                </svg>
                                <h1 className="text-center">₹ 4999</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 28 Days
                                </p>
                                <h5 className="text-primary text-center mb-4">
                                  24,999 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary text-white mt-4 buy_plan"
                                    data-id="9"
                                    data-amount="4999"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-md-4 mb-3" id="quarterly_plan">
                    <div className="card card-border mb-0 h-100">
                      <div className="card-header card-header-action">
                        <h6 className="my-1 py-1">Quarterly Plan</h6>
                        <div className="card-action-wrap"></div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-xxl-3 pb-lg-0 pb-5 stretch-card grid-margin grid-margin-md-0">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Starter
                                </h4>
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
                                  className="feather feather-award text-primary icon-xxl d-block mx-auto my-3"
                                >
                                  <circle cx="12" cy="8" r="7"></circle>
                                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                                <h1 className="text-center">₹ 3899</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 84 Days
                                </p>
                                <h5 className="text-primary text-center mb-4">
                                  16,499 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary text-white mt-4 buy_plan"
                                    data-id="22"
                                    data-amount="3899"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-xxl-3 pb-lg-0 pb-5 stretch-card grid-margin grid-margin-md-0">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Startup
                                </h4>
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
                                  className="feather feather-star text-primary icon-xxl d-block mx-auto my-3"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <h1 className="text-center">₹ 5999</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 84 Days
                                </p>
                                <h5 className="text-primary text-center mb-4">
                                  28,399 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary text-white mt-4 buy_plan"
                                    data-id="23"
                                    data-amount="5999"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-xxl-3 pb-lg-0 pb-5 stretch-card grid-margin grid-margin-md-0">
                            <div
                              className="card card-border mb-0 h-100"
                              style={{position: "relative"}}
                            >
                              <div
                                className="hk-ribbon-type-1 ribbon-wth-icon ribbon-wth-flag end-touch"
                                style={{top: "8px"}}
                              >
                                <span>Recommended</span>
                              </div>
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Business
                                </h4>
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
                                  className="feather feather-briefcase icon-xxl d-block mx-auto my-3"
                                  style={{color:"#199B7B"}}
                                >
                                  <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                                <h1 className="text-center">₹ 7499</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 84 Days
                                </p>
                                <h5
                                  className="text-center mb-4"
                                  style={{color:"#199B7B"}}
                                >
                                  39,599 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn text-white mt-4 buy_plan"
                                    data-id="24"
                                    data-amount="7499"
                                    style={{backgroundColor: "#199B7B"}}
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-xxl-3 pb-lg-0 pb-5 stretch-card">
                            <div className="card card-border mb-0 h-100">
                              <div className="card-body">
                                <h4 className="text-center mt-3 mb-4">
                                  Business +
                                </h4>
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
                                  className="feather feather-archive text-primary icon-xxl d-block mx-auto my-3"
                                >
                                  <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                  <rect
                                    x="1"
                                    y="3"
                                    width="22"
                                    height="5"
                                  ></rect>
                                  <line x1="10" y1="12" x2="14" y2="12"></line>
                                </svg>
                                <h1 className="text-center">₹ 14999</h1>
                                <p className="text-muted text-center mb-4 fw-light">
                                  per 84 Days
                                </p>
                                <h5 className="text-primary text-center mb-4">
                                  82,499 QR Code Request
                                </h5>
                                <table className="mx-auto">
                                  <tbody>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>0 Transaction Fee*</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Realtime Transaction</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>No Amount Limit</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Zero Setup Charge</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Migration Assistance</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>24*7 Whatsapp Support</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Remove Branding</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Direct Intent *</p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
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
                                          className="feather feather-check icon-md text-primary me-2"
                                        >
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                      </td>
                                      <td>
                                        <p>Incognito Payment URL</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div className="d-grid">
                                  <button
                                    className="btn btn-primary text-white mt-4 buy_plan"
                                    data-id="25"
                                    data-amount="14999"
                                  >
                                    Buy Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default PlanList;
