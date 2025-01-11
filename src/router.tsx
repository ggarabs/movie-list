import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Detail from "./pages/Detail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/movie",
    element: (
      <>
        <Header />
        <Catalog />
        <Footer />
      </>
    ),
  },
  {
    path: "/tv",
    element: (
      <>
        <Header />
        <Detail />
        <Footer />
      </>
    ),
  },
]);

export default router;
