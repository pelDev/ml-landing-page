import { BrowserRouter, Routes, Route } from "react-router-dom";
// Route Constants
import LandingPageLayout from "../layouts/LandingPageLayout/LandingPageLayout";
import NotFound from "../pages/NotFound/NotFound";
import { AllRouteConstants } from "./RouteConstants";
import ScrollToTop from "../components/ScrollToTop";
import { AboutUs, ContactUs, HomePage } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Landing Page Routes */}
        <Route
          path={AllRouteConstants.landingPage.index}
          element={<LandingPageLayout />}
        >
          <Route
            path={AllRouteConstants.landingPage.home}
            element={<HomePage />}
          />
          <Route
            path={AllRouteConstants.landingPage.contactUs}
            element={<ContactUs />}
          />
          <Route
            path={AllRouteConstants.landingPage.aboutUs}
            element={<AboutUs />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
