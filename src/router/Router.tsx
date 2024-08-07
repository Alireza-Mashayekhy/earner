import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/layouts";
import ActivityReport from "@/pages/ActivityReport";
import Earn from "@/pages/Earn";
import FinancialReport from "@/pages/FinancialReport";
import Home from "@/pages/Home";
import Upgrade from "@/pages/Upgrade";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/activity-report"
        element={
          <Layout>
            <ActivityReport />
          </Layout>
        }
      />
      <Route
        path="/financial-report"
        element={
          <Layout>
            <FinancialReport />
          </Layout>
        }
      />
      <Route
        path="/earn"
        element={
          <Layout>
            <Earn />
          </Layout>
        }
      />
      <Route
        path="/upgrade"
        element={
          <Layout>
            <Upgrade />
          </Layout>
        }
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
