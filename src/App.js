import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import { ToastContainer } from "react-toastify";
import ModalMenu from "./modal-menu/ModalMenu";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className="tokyo_tm_all_wrap">
      <AllRoutes />
      <ToastContainer />
    </div>
      {/* <ModalMenu /> */}
    </>
  );
};

export default App;
