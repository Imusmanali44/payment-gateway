import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Forget from "./pages/Forgot";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Admin/Dashboard";
import ConnectMerchant from "./pages/Admin/ConnectMerchant";
import PaymentReport from "./pages/Admin/PaymentReport";
import PlanList from "./pages/Admin/PlanList";
import ActiveSubscription from "./pages/Admin/ActiveSubscription";
import PaymentSetting from "./pages/Admin/PaymentSetting";
import Transaction from "./pages/Admin/Transaction";

function App() {
  return (
    <>
      <Routes>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/"}
          element={<Home />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/faq"}
          element={<FAQ />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/contact_us"}
          element={<ContactUs />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/dashboard"}
          element={<Dashboard />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/txn_report"}
          element={<Transaction />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/plan_list"}
          element={<PlanList />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/active_subs"}
          element={<ActiveSubscription />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/merchant/setup_upi"}
          element={<ConnectMerchant />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/payment_report"}
          element={<PaymentReport />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/user/settings/payment_settings"}
          element={<PaymentSetting />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/login"}
          element={<Login />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/register"}
          element={<SignUp />}
        />

        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact={true}
          path={"/forgot"}
          element={<Forget />}
        />
      </Routes>
    </>
  );
}

export default App;
