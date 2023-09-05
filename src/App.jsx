import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Layout from "./layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
};
