import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                <h1 className="pg-title">Welcome, Sukhad Gautam</h1>
                <p>
                  Accept payments online hassle-free with our QR code service.
                </p>
              </div>
              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>
        <div className="hk-pg-body pt-1">
          <div className="container-xxl px-0">
            <Row>
              <Col sm="12">
                <div className="card card-border overflow-hidden">
                  <div className="card-body">
                    <Row>
                      <Col
                        md="2"
                        sm="5"
                        className="position-absolute d-none d-md-block"
                      >
                        <div className="d-flex align-items-center justify-content-center w-100">
                          <div className="d-flex position-relative w-100"></div>
                          <img
                            className="w-sm-100 d-flex"
                            src="https://merchant.upigateway.com/new_assets/images/demo_aadhaar.png"
                            alt="Payment methods"
                          />
                        </div>
                      </Col>
                      <Col md="2" sm="5"></Col>
                      <Col md="7" sm="8">
                        <div className="d-flex align-items-start justify-content-center flex-column h-100 py-2">
                          <div className="d-flex flex-column align-items-start">
                            <h5 className="fw-medium text-dark">
                              Complete KYC process quickly in just 10 seconds
                            </h5>
                            <div className="fs-7">
                              Complete KYC Verification &amp; Enjoy
                              Uninterrupted Access to UPIGateway Services
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md="3" sm="4">
                        <div className="mt-3 mt-md-0 d-md-flex align-items-center justify-content-center flex-column h-100">
                          <a
                            className="d-flex flex-row"
                            id="aadhar_verify"
                            href="#"
                          >
                            <span className="icon me-1 text-center">
                              <span className="feather-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-check-circle"
                                >
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </span>
                            </span>
                            <span>
                              <u>Verify Now</u>
                            </span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm="12">
                <div className="card card-border">
                  <div className="card-body">
                    <Row>
                      <div className="col-md-2 col-sm-5">
                        <div className="d-flex align-items-center justify-content-sm-center">
                          <img
                            className="w-100"
                            src="https://merchant.upigateway.com/new_assets/images/yono_sbi_merchant.png"
                            alt="Payment methods"
                            style={{ maxHeight: "200px" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-8">
                        <div className="d-flex align-items-start justify-content-center flex-column h-100">
                          <div className="d-flex flex-column align-items-start">
                            <h5 className="fw-medium text-dark">
                              YONO SBI Merchant Live Now
                            </h5>
                            <div className="fs-7">
                              Accept payment seamlessly using a new YONO SBI
                              Merchant
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="mt-3 mt-md-0 d-md-flex align-items-center justify-content-center flex-column h-100">
                          <a
                            className="d-flex flex-row"
                            href="/user/merchant/setup_upi"
                          >
                            <span className="icon me-1 text-center">
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
                                  className="feather feather-link"
                                >
                                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </svg>
                              </span>
                            </span>
                            <span>
                              {" "}
                              <u>Connect Merchant</u>
                            </span>
                          </a>
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="mb-md-4 mb-3">
                <div className="card card-border">
                  <div className="card-body">
                    <div className="media d-flex align-items-center">
                      <div className="media-head me-3">
                        <div className="avatar">
                          <svg
                            className="avatar-img"
                            width="800"
                            height="800"
                            viewBox="0 0 800 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{color: "#15715B"}}
                          >
                            <path
                              d="M400.001 733.333C584.095 733.333 733.335 584.093 733.335 400C733.335 215.905 584.095 66.6667 400.001 66.6667C215.906 66.6667 66.668 215.905 66.668 400C66.668 584.093 215.906 733.333 400.001 733.333Z"
                              fill="#199B7B"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M312 290C312 277.85 321.85 268 334 268H466C478.15 268 488 277.85 488 290C488 302.15 478.15 312 466 312H422.237C432.845 328.073 438.173 346.766 438.486 365.259C438.893 389.331 430.822 413.986 413.687 433.076C404.323 443.507 392.579 451.912 378.731 457.619L415.556 494.444C424.148 503.035 424.148 516.965 415.556 525.556C406.965 534.148 393.035 534.148 384.444 525.556L321.119 462.233C313.297 454.405 312.897 443.706 316.234 436.109C319.485 428.706 327.028 422.287 337.125 421.949C337.129 421.948 337.133 421.948 337.137 421.948C358.131 421.24 372.137 413.495 380.944 403.684C390.017 393.577 394.728 379.971 394.492 366.004C394.256 352.048 389.097 338.654 379.603 328.88C370.372 319.377 355.789 312 334 312C321.85 312 312 302.15 312 290Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M312 366.522C312 354.371 321.85 344.522 334 344.522H466C478.15 344.522 488 354.371 488 366.522C488 378.672 478.15 388.522 466 388.522H334C321.85 388.522 312 378.672 312 366.522Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="fw-medium text-dark">₹ 0</div>
                        <div className="fs-7">Today Receive Amount</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4" className="mb-md-4 mb-3">
                <div className="card card-border">
                  <div className="card-body">
                    <div className="media d-flex align-items-center">
                      <div className="media-head me-3">
                        <div className="avatar">
                          <svg
                            className="avatar-img"
                            width="800"
                            height="800"
                            viewBox="0 0 800 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{color: "#15715B"}}

                          >
                            <path
                              d="M400.001 733.333C584.095 733.333 733.335 584.093 733.335 400C733.335 215.905 584.095 66.6667 400.001 66.6667C215.906 66.6667 66.668 215.905 66.668 400C66.668 584.093 215.906 733.333 400.001 733.333Z"
                              fill="#199B7B"
                            ></path>
                            <path
                              d="M357.917 491.249C351.583 491.249 345.25 488.915 340.25 483.915L290.25 433.915C280.583 424.249 280.583 408.249 290.25 398.582C299.917 388.915 315.917 388.915 325.583 398.582L357.917 430.915L473.583 315.25C483.25 305.583 499.25 305.583 508.917 315.25C518.583 324.917 518.583 340.917 508.917 350.583L375.583 483.915C370.583 488.915 364.25 491.249 357.917 491.249Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="fw-medium text-dark">0</div>
                        <div className="fs-7">Today Success Transaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4" className="mb-md-4 mb-3">
                <div className="card card-border">
                  <div className="card-body">
                    <div className="media d-flex align-items-center">
                      <div className="media-head me-3">
                        <div className="avatar">
                          <svg
                            className="avatar-img"
                            width="800"
                            height="800"
                            viewBox="0 0 800 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M400.001 733.333C584.095 733.333 733.335 584.093 733.335 400C733.335 215.905 584.095 66.6667 400.001 66.6667C215.906 66.6667 66.668 215.905 66.668 400C66.668 584.093 215.906 733.333 400.001 733.333Z"
                              fill="#199B7B"
                            ></path>
                            <path
                              d="M400 458.333C413.667 458.333 425 447 425 433.333V266.667C425 253 413.667 241.667 400 241.667C386.333 241.667 375 253 375 266.667V433.333C375 447 386.333 458.333 400 458.333Z"
                              fill="#15715B"
                            ></path>
                            <path
                              d="M430.668 520.663C429.001 516.663 426.668 512.997 423.668 509.663C420.335 506.663 416.668 504.33 412.668 502.663C404.668 499.33 395.335 499.33 387.335 502.663C383.335 504.33 379.668 506.663 376.335 509.663C373.335 512.997 371.001 516.663 369.335 520.663C367.668 524.663 366.668 528.997 366.668 533.33C366.668 537.663 367.668 541.997 369.335 545.997C371.001 550.33 373.335 553.663 376.335 556.997C379.668 559.997 383.335 562.33 387.335 563.997C391.335 565.663 395.668 566.663 400.001 566.663C404.335 566.663 408.668 565.663 412.668 563.997C416.668 562.33 420.335 559.997 423.668 556.997C426.668 553.663 429.001 550.33 430.668 545.997C432.335 541.997 433.335 537.663 433.335 533.33C433.335 528.997 432.335 524.663 430.668 520.663Z"
                              fill="#15715B"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="fw-medium text-dark">0</div>
                        <div className="fs-7">Today Pending Transaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/*<Row>
              <div className="col-xxl-9 col-lg-8 col-md-7 mb-md-4 mb-3">
                <div className="card card-border mb-0 h-100">
                  <div className="card-header card-header-action">
                    <h6 className="my-1 py-1">Last 10 Days Statistics</h6>
                    <div className="card-action-wrap"></div>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <div className="d-inline-block">
                        <span className="badge-status">
                          <span className="badge bg-primary badge-indicator badge-indicator-nobdr"></span>
                          <span className="badge-label">Received Amount</span>
                        </span>
                      </div>
                    </div>
                    <div id="column_chart_2" style="min-height: 365px;">
                      <div
                        id="apexcharts33lmwhmr"
                        className="apexcharts-canvas apexcharts33lmwhmr apexcharts-theme-light"
                        style="width: 924px; height: 350px;"
                      >
                        <div
                          className="apexcharts-legend"
                          style="max-height: 175px;"
                        ></div>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                          ></div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style="order: 1;"
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style="background-color: rgb(21, 113, 90);"
                            ></span>
                            <div
                              className="apexcharts-tooltip-text"
                              style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label"></span>
                                <span className="apexcharts-tooltip-text-y-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                <span className="apexcharts-tooltip-text-goals-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label"></span>
                                <span className="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-4 col-md-5 mb-md-4 mb-3">
                
              </div>
            </Row>*/}
            <Row>
              <Col md="12" className="mb-md-4 mb-3">
                <div className="card card-border mb-0 h-100">
                  <div className="card-header card-header-action d-flex align-items-center justify-content-between">
                    <h6>Recent Activity</h6>
                    <div className="card-action-wrap">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="/user/txn_report"
                      >
                        <span className="btn-text">View All Transactions</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="contact-list-view">
                      <div
                        className="table-responsive"
                        style={{minHeight: "200px"}}
                      >
                        <table className="table table-hover table-vcenter">
                          <thead>
                            <tr>
                              <th className="text-center" style={{width: "50px"}}>
                                #
                              </th>
                              <th>Customer Name</th>
                              <th>Client Txn ID</th>
                              <th>Amount</th>
                              <th style={{width: "110px"}}>Status</th>
                              <th style={{width: "20%"}}>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58545687">
                                  58545687
                                </a>
                              </td>
                              <td>Tariph </td>
                              <td>64df0496ac1d682f4f52ead7</td>
                              <td>₹ 10</td>
                              <td>
                                <span className="badge bg-info">Scanning</span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                18-08-2023 11:11 AM
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58501247">
                                  58501247
                                </a>
                              </td>
                              <td>Sarthak Sharma</td>
                              <td>64de3569ac1d682f4f5289bb</td>
                              <td>₹ 10</td>
                              <td>
                                <span className="badge bg-info">Scanning</span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                17-08-2023 8:27 PM
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58487713">
                                  58487713
                                </a>
                              </td>
                              <td>Tariph </td>
                              <td>64de1f8bac1d682f4f5266f7</td>
                              <td>₹ 100</td>
                              <td>
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                17-08-2023 6:54 PM
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58479796">
                                  58479796
                                </a>
                              </td>
                              <td>Parvez</td>
                              <td>64de10efac1d682f4f5266c6</td>
                              <td>₹ 500</td>
                              <td>
                                <span className="badge bg-info">Scanning</span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                17-08-2023 5:52 PM
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58465276">
                                  58465276
                                </a>
                              </td>
                              <td>rahul</td>
                              <td>64ddeadfac1d682f4f51f7e2</td>
                              <td>₹ 10</td>
                              <td>
                                <span className="badge bg-info">Scanning</span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                17-08-2023 3:09 PM
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58457897">
                                  58457897
                                </a>
                              </td>
                              <td>Boy</td>
                              <td>64ddd8fcac1d682f4f51f430</td>
                              <td>₹ 50</td>
                              <td>
                                <span className="badge bg-info">Scanning</span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                17-08-2023 1:53 PM
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center" scope="row">
                                <a href="/user/txn_report_detail/58431029">
                                  58431029
                                </a>
                              </td>
                              <td>Harish </td>
                              <td>64dd9f0cac1d682f4f519ee5</td>
                              <td>₹ 50</td>
                              <td>
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                17-08-2023 9:46 AM
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="12">
                <div className="card card-border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-2 col-sm-5">
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            className="w-50"
                            src="https://merchant.upigateway.com/new_assets/images/scam_alert.png"
                            alt="Payment methods"
                            style={{ maxHeight: "200px" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-10 col-sm-12">
                        <div className="d-flex align-items-start justify-content-center flex-column h-100">
                          <div className="d-flex flex-column align-items-start">
                            <div className="fs-7">
                              {" "}
                              <span className="text-danger fw-bold">
                                Alert :{" "}
                              </span>
                              <a
                                className="fw-medium"
                                href="javascript:void(0)"
                              >
                                UPIGateway.com{" "}
                              </a>
                              is the only official service; we do not have any
                              other services apart from this. Beware of{" "}
                              <span className="fw-bold">similar names </span>and{" "}
                              <span className="fw-bold">domains.</span> We do
                              not offer any form of{" "}
                              <span className="fw-bold">white-label </span>
                              service or have any{" "}
                              <span className="fw-bold">distributors. </span>
                              Stay alert and safeguard yourself from scams.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Dashboard;
