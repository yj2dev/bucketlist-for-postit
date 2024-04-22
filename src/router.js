import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/detail/:bucketId",
    element: (
      <Layout>
        <Detail />
      </Layout>
    ),
  },
]);

export default router;
