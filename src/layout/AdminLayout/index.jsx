import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AdminLayout = ({ children }) => {
  const [open, setIsOpen] = useState(true);

  return (
    <div className="ad-wrapper d-flex" data-layout-style={open ? "default" : "collapsed"} data-hover={open ? "" : "active"}>
      <Sidebar open={open} setIsOpen={setIsOpen} />
      <div className="pg-wrapper">
        <Header setIsOpen={setIsOpen} open={open}/>
        {children}
        <Footer />
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
