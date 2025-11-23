import { useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import LandingPage from "../pages/LandingPage";
import { excludeFooter, excludeNavbar } from "../utils";

const RootWrapper = () => {
  const location = useLocation();

  const isNavBarHidden = excludeNavbar?.includes(location?.pathname);
  // const isFooterHidden = excludeFooter?.includes(location?.pathname);
  return (
    <>
      {!isNavBarHidden && <Navbar />}
      <LandingPage />
      {/* globalFooter when required */}
      {/* {!isFooterHidden && <Footer />} */}
    </>
  );
};

export default RootWrapper;
