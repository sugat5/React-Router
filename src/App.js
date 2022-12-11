import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import NavBar from "./NavBar";
import Page404 from "./page404";
import User from "./user";
import ContactUs from "./ContactUs";
import OtherBusiness from "./OtherBusiness";
import Login from "./Login";
import Protected from "./Protected";
//routing
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/contactus" element={<ContactUs />}>
            <Route path="otherbusiness" element={<OtherBusiness />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
