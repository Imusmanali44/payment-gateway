import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Transaction = () => {
  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                <h1 className="pg-title">Transactions Report</h1>
                <p>
                  Track and manage your QR transactions efficiently with our
                  detailed Transactions Report
                </p>
              </div>

              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>
        <div className="tab-content mt-2">
          <div className="tab-pane fade show active" id="tab_block_1">
            <Row>
              <Col sm="12" className="mb-3">
                <div
                  className="tab_container row"
                  id="enterprise_tab_container"
                >
                  <Col sm="12" className="mb-md-4 mb-3">
                    <div className="card card-border mb-0 h-100">
                      <div className="card-header card-header-action">
                        <h6 className="my-1 py-1">Search</h6>
                        <div className="card-action-wrap"></div>
                      </div>
                      <div className="card-body">
                        <Form className="row g-3">
                          <Col md="4">
                            <Form.Group className="mb-0">
                              <Form.Label>From Date</Form.Label>
                              <Form.Control
                                className="valid"
                                type="text"
                                name="from_date"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group className="mb-0">
                              <Form.Label>To Date</Form.Label>
                              <Form.Control
                                className="valid"
                                type="text"
                                name="to_date"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group className="mb-0">
                              <Form.Label>Status</Form.Label>
                              <Form.Select id="status" name="status">
                                <option>Select Status</option>
                                <option value="created">Created</option>
                                <option value="scanning">Scanning</option>
                                <option value="success">Success</option>
                                <option value="failure">Failure</option>
                                <option value="close">Close</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group className="mb-0">
                              <Form.Label>Amount</Form.Label>
                              <Form.Control
                                id="amount"
                                type="text"
                                name="amount"
                                placeholder="Search transaction amount"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="4">
                            <Form.Group className="mb-0">
                              <Form.Label> Client Txn ID</Form.Label>
                              <Form.Control
                                id="amount"
                                type="text"
                                name="amount"
                                placeholder="Search transaction amount"
                              />
                            </Form.Group>
                          </Col>
                          <Col md="12" lg="4">
                            <div className="d-lg-flex flex-lg-row mt-lg-3 pt-lg-3">
                              <button
                                className="me-3 btn btn-primary mb-3 mb-sm-0"
                                type="submit"
                              >
                                Search
                              </button>
                              <button
                                className="me-3 btn btn-primary text-white mb-3 mb-sm-0"
                                name="export"
                                value="true"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                Export Report
                              </button>
                              <button
                                className="btn btn-outline-primary mb-3 mb-sm-0"
                                type="reset"
                              >
                                Reset
                              </button>
                            </div>
                          </Col>
                        </Form>
                      </div>
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <div className="card card-border">
                  <div className="card-body">
                    <div className="media align-items-center">
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
                        <div className="fs-7">Received Amount</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="card card-border">
                  <div className="card-body">
                    <div className="media align-items-center">
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
                              d="M698.999 533.333H600.999C558.665 533.333 533.332 558.667 533.332 601V699C533.332 741.333 558.665 766.667 600.999 766.667H698.999C741.332 766.667 766.665 741.333 766.665 699V601C766.665 558.667 741.332 533.333 698.999 533.333ZM720.999 615L641.999 707.333C638.999 711 634.332 713.333 629.665 713.333C629.332 713.333 629.332 713.333 628.999 713.333C624.332 713.333 619.999 711.667 616.665 708.333L580.332 672.333C573.665 665.667 573.665 654.667 580.332 648C586.999 641.333 597.999 641 604.665 648L627.999 671L694.665 593C700.999 585.667 711.665 585 718.999 591C726.332 597 726.999 608 720.999 615Z"
                              fill="#15715B"
                            ></path>
                            <path
                              d="M533.335 699V601C533.335 558.667 558.668 533.333 601.001 533.333H699.001C712.335 533.333 723.668 536 733.335 540.667C733.335 540.333 733.335 540 733.335 539.333V260.333C733.335 139 661.001 66.6667 539.668 66.6667H260.335C139.001 66.6667 66.668 139 66.668 260.333V539.333C66.668 661 139.001 733.333 260.335 733.333H539.335C539.668 733.333 540.001 733.333 540.668 733.333C536.001 723.667 533.335 712.333 533.335 699Z"
                              fill="#199B7B"
                            ></path>
                            <path
                              d="M233.332 475C219.665 475 208.332 463.667 208.332 450V350C208.332 336.333 219.665 325 233.332 325C246.999 325 258.332 336.333 258.332 350V450C258.332 463.667 246.999 475 233.332 475Z"
                              fill="#15715B"
                            ></path>
                            <path
                              d="M400 475C386.333 475 375 463.667 375 450V350C375 336.333 386.333 325 400 325C413.667 325 425 336.333 425 350V450C425 463.667 413.667 475 400 475Z"
                              fill="#15715B"
                            ></path>
                            <path
                              d="M566.668 475C553.001 475 541.668 463.667 541.668 450V350C541.668 336.333 553.001 325 566.668 325C580.335 325 591.668 336.333 591.668 350V450C591.668 463.667 580.335 475 566.668 475Z"
                              fill="#15715B"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="fw-medium text-dark">0</div>
                        <div className="fs-7">Number of Success Payment</div>
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

export default Transaction;
