import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/layouts";
import ActivityReport from "@/pages/ActivityReport";
import FinancialReport from "@/pages/FinancialReport";
import Home from "@/pages/Home";

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
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
