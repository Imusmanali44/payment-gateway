import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ open, setIsOpen }) => {
  const location = useLocation();

  const handleSidebar = () => {
    setIsOpen(!open);
  };
  return (
    <div className="ad-menu d-print-none">
      <div className="menu-header">
        <span>
          <a className="navbar-brand" href="/user/dashboard">
            <img
              className="brand-img img-fluid"
              src="https://merchant.upigateway.com/new_assets/dist/img/brand-sm.svg"
              alt="UPI"
            />
            <img
              className="brand-img img-fluid"
              src="https://merchant.upigateway.com/new_assets/dist/img/upigate.svg"
              alt="Gateway"
            />
          </a>
          <button
            className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle mt-1"
            aria-label="Toggle navigation"
            onClick={handleSidebar}
          >
            <span className="icon">
              <span className="svg-icon fs-5">
                <svg
                  className="icon icon-tabler icon-tabler-arrow-bar-to-left"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="10" y1="12" x2="20" y2="12"></line>
                  <line x1="10" y1="12" x2="14" y2="16"></line>
                  <line x1="10" y1="12" x2="14" y2="8"></line>
                  <line x1="4" y1="4" x2="4" y2="20"></line>
                </svg>
              </span>
            </span>
          </button>
        </span>
      </div>

      <div className="nicescroll-bar" data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div
              className="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                className="simplebar-content-wrapper"
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div className="menu-content-wrap">
                    <div className="menu-group">
                      <ul className="navbar-nav flex-column">
                        <li
                          className={
                            "nav-item " +
                            (location.pathname === "/user/dashboard"
                              ? "active"
                              : "")
                          }
                        >
                          <Link className={"nav-link"} to="/user/dashboard">
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-layout-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <rect
                                    x="4"
                                    y="4"
                                    width="6"
                                    height="5"
                                    rx="2"
                                  ></rect>
                                  <rect
                                    x="4"
                                    y="13"
                                    width="6"
                                    height="7"
                                    rx="2"
                                  ></rect>
                                  <rect
                                    x="14"
                                    y="4"
                                    width="6"
                                    height="7"
                                    rx="2"
                                  ></rect>
                                  <rect
                                    x="14"
                                    y="15"
                                    width="6"
                                    height="5"
                                    rx="2"
                                  ></rect>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">Dashboard</span>
                          </Link>
                        </li>
                        <li
                          className={
                            "nav-item " +
                            (location.pathname === "/user/merchant/setup_upi"
                              ? "active"
                              : "")
                          }
                        >
                          <Link
                            className={"nav-link "}
                            to="/user/merchant/setup_upi"
                          >
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-building-store"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="44"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <line x1="3" y1="21" x2="21" y2="21"></line>
                                  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                                  <line x1="5" y1="21" x2="5" y2="10.85"></line>
                                  <line
                                    x1="19"
                                    y1="21"
                                    x2="19"
                                    y2="10.85"
                                  ></line>
                                  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">
                              Connect Merchant
                            </span>
                            <span
                              className="ms-auto text-info"
                              id="merchant_menu_label"
                              style={{ fontSize: "1.5rem" }}
                            >
                              {" "}
                              <span className="svg-icon d-flex align-items-center badge-soft-danger text-danger">
                                <svg
                                  className="mr-0 icon icon-tabler icon-tabler-link bg-danger p-1 rounded bg-opacity-10"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                                  <line x1="16" y1="21" x2="16" y2="19"></line>
                                  <line x1="19" y1="16" x2="21" y2="16"></line>
                                  <line x1="3" y1="8" x2="5" y2="8"></line>
                                  <line x1="8" y1="3" x2="8" y2="5"></line>
                                </svg>
                              </span>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-gap"></div>
                    <div className="menu-group">
                      <div className="nav-header">
                        <span>Reports</span>
                      </div>
                      <ul className="navbar-nav flex-column">
                        <li
                          className={
                            "nav-item " +
                            (location.pathname === "/user/txn_report"
                              ? "active"
                              : "")
                          }
                        >
                          <Link className={"nav-link "} to="/user/txn_report">
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-arrow-autofit-height"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="44"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"></path>
                                  <path d="M18 14v7"></path>
                                  <path d="M18 3v7"></path>
                                  <path d="M15 18l3 3l3 -3"></path>
                                  <path d="M15 6l3 -3l3 3"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">Transaction</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-gap"></div>
                    <div className="menu-group">
                      <div className="nav-header">
                        <span>Plans</span>
                      </div>
                      <ul className="navbar-nav flex-column">
                        <li
                          className={
                            "nav-item " +
                            (location.pathname === "/user/plan_list"
                              ? "active"
                              : "")
                          }
                        >
                          <Link className={"nav-link "} to="/user/plan_list">
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-shopping-cart"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="44"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <circle cx="6" cy="19" r="2"></circle>
                                  <circle cx="17" cy="19" r="2"></circle>
                                  <path d="M17 17h-11v-14h-2"></path>
                                  <path d="M6 5l14 1l-1 7h-13"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">Buy Plan</span>
                          </Link>
                        </li>
                        <li
                          className={
                            "nav-item " +
                            (location.pathname === "/user/active_subs"
                              ? "active"
                              : "")
                          }
                        >
                          <Link className={"nav-link "} to="/user/active_subs">
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-toggle-right"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="44"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <circle cx="16" cy="12" r="2"></circle>
                                  <rect
                                    x="2"
                                    y="6"
                                    width="20"
                                    height="12"
                                    rx="6"
                                  ></rect>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">
                              Active Subscription
                            </span>
                          </Link>
                        </li>
                        <li
                          className={
                            "nav-item " +
                            (location.pathname === "/user/payment_report"
                              ? "active"
                              : "")
                          }
                        >
                          <Link
                            className={"nav-link "}
                            to="/user/payment_report"
                          >
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-file-invoice"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="44"
                                  height="44"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                  <line x1="9" y1="7" x2="10" y2="7"></line>
                                  <line x1="9" y1="13" x2="15" y2="13"></line>
                                  <line x1="13" y1="17" x2="15" y2="17"></line>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">
                              Payment Report
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-gap"></div>
                    <div className="menu-group">
                      <div className="nav-header">
                        <span>Settings</span>
                      </div>
                      <ul className="navbar-nav flex-column">
                        <li
                          className={
                            "nav-item " +
                            (location.pathname ===
                            "/user/settings/payment_settings"
                              ? "active"
                              : "")
                          }
                        >
                          <Link
                            className={"nav-link "}
                            to="/user/settings/payment_settings"
                          >
                            <span className="nav-icon-wrap">
                              <span className="svg-icon">
                                <svg
                                  className="icon icon-tabler icon-tabler-settings"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              </span>
                            </span>
                            <span className="nav-link-text">
                              Payment Settings
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
