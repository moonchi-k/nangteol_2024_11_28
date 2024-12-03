import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Desc from "./pages/Desc";
import Options from "./pages/Options";
import Success from "./pages/Success";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/desc" element={<Desc />}></Route>
        <Route path="/options" element={<Options />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
