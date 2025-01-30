import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
