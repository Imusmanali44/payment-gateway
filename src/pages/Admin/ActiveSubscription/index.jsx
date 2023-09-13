import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActiveSubscription = () => {
  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                <h1 className="pg-title">Active Subscription</h1>
                <p>
                  Here, you can view your account's active subscription and
                  upgrade it as well
                </p>
              </div>

              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>
        <div className="container-xxl px-0">
          <Row>
            <Col sm="12">
              <div className="card card-border">
                <div className="card-body">
                  <Row>
                    <Col sm="12" className="col-12">
                      <div className="d-flex flex-column justify-content-center align-items-center pb-4 m-4">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg
                            width="100"
                            height="100"
                            viewBox="0 0 800 800"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="40"
                              y="127"
                              width="720"
                              height="546"
                              rx="241"
                              fill="#199B7B"
                            ></rect>
                            <path
                              d="M290.333 547.667C371.703 547.667 437.667 481.704 437.667 400.334C437.667 318.963 371.703 253 290.333 253C208.963 253 143 318.963 143 400.334C143 481.704 208.963 547.667 290.333 547.667Z"
                              fill="#15715B"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-center mt-4 mb-1 content-heading">
                          Your plan has expired. Please Renew your plan.
                        </h3>
                        <small className="text-center text-muted">
                          Kindly go to plan page and renew plan.
                        </small>
                        <a
                          className="mt-4 btn btn-primary"
                          href="/user/plan_list"
                        >
                          Renew Plan
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default ActiveSubscription;
