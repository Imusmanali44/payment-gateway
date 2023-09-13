import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div className="pg-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
