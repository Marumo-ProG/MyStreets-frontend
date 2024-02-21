// React
import { Suspense, lazy } from "react";

// Routes
import { Routes, Route } from "react-router-dom";

// Components
import Loader from "./common/components/Loader";

// pages
import MainLayout from "./common/layouts/MainLayout";
import Overview from "./pages/overview";
import Products from "./pages/products";
import Product from "./pages/product";

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
          path="/products"
          element={
            <Suspense fallback={<Loader />}>
              {/* <RequireAuth> */}
              <Products />
              {/* </RequireAuth> */}
            </Suspense>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <Suspense fallback={<Loader />}>
              {/* <RequireAuth> */}
              <Product />
              {/* </RequireAuth> */}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
