import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return (
    <div className="pg-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
