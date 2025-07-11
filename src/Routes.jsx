import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomePage from "pages/home-page";
import TravelPackagesCatalog from "pages/travel-packages-catalog";
import PackageDetailsBooking from "pages/package-details-booking";
import UserDashboard from "pages/user-dashboard";
import AboutUs from "pages/about-us";
import ContactUs from "pages/contact-us";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/travel-packages-catalog" element={<TravelPackagesCatalog />} />
        <Route path="/package-details-booking" element={<PackageDetailsBooking />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;