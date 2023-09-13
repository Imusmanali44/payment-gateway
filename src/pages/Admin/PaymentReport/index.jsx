import AdminLayout from "../../../layout/AdminLayout";
import Container from "react-bootstrap/Container";

const PaymentReport = () => {
  return (
    <AdminLayout>
      <Container fluid="xxl">
        <div className="ad-pg-header pg-header-wth-tab pt-5 border-0">
          <div className="d-flex mb-4">
            <div className="d-flex flex-wrap justify-content-between flex-1">
              <div className="mb-lg-0 mb-2 me-8">
                <h1 className="pg-title">Payment Report</h1>
                <p>Here, you can see the subscription purchase history</p>
              </div>

              <div className="pg-header-action-wrap"></div>
            </div>
          </div>
        </div>
        <div className="tab-content mt-2">
          <div className="tab-pane fade show active" id="tab_block_1">
            <div className="row">
              <div className="col-md-12 mb-md-4 mb-3">
                <div className="card card-border mb-0 h-100">
                  <div className="card-header card-header-action">
                    <h6>Payment Report</h6>
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
                              <th>Plan Name</th>
                              <th>Gateway Transaction ID</th>
                              <th>Transaction ID</th>
                              <th>Amount</th>
                              <th style={{width: "110px"}}>Status</th>
                              <th style={{width: "20%"}}>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="fw-semibold">
                                Enterprise Starter
                              </th>
                              <td>17821795469</td>
                              <td>17821795469</td>
                              <td>₹ 1299</td>
                              <td>
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                28-07-2023 8:10 AM
                              </td>
                            </tr>
                            <tr>
                              <th className="fw-semibold">
                                Enterprise Starter
                              </th>
                              <td>17282888032</td>
                              <td>17282888032</td>
                              <td>₹ 1299</td>
                              <td>
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                              <td style={{whiteSpace: "nowrap"}}>
                                02-05-2023 4:29 PM
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div></div>
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

export default PaymentReport;
