// React
import { Suspense, lazy } from "react";

// Routes
import { Routes, Route } from "react-router-dom";

// Components
import Loader from "./common/components/Loader";

// pages
import MainLayout from "./common/layouts/MainLayout";
import Overview from "./pages/overview";
import Headphones from "./pages/headphones";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              {/* <RequireAuth> */}
              <Overview />
              {/* </RequireAuth> */}
            </Suspense>
          }
        />
        <Route
          path="/headphones"
          element={
            <Suspense fallback={<Loader />}>
              {/* <RequireAuth> */}
              <Headphones />
              {/* </RequireAuth> */}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
