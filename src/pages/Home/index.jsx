import AppLayout from "../../layout/AppLayout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const Home = () => {
  return (
    <AppLayout>
      <div className="pg-app-body-wrapper">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </AppLayout>
  );
};

export default Home;
