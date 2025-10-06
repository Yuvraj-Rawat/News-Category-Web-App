import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./category/Home";
import Science from "./category/Science";
import Technology from "./category/Technology";
import Bussiness from "./category/Bussiness";
import Health from "./category/Health";
import Sports from "./category/Sports";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/science" element={<Science />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/bussiness" element={<Bussiness />}></Route>
          <Route path="/health" element={<Health />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
