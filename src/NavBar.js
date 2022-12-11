import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// use of Navbar from react bootstrap.
// Use of link routing.
// use of Navlink to get inline style of links.
export default function NavBar() {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <NavLink style={{ textDecoration: "none" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          Login
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/product">
          Product
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/user/Nilesh">
          Nilesh
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/user/Sonali">
          Sonali
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contactus">
          Contact Us
        </NavLink>
      </Container>
    </Navbar>
  );
}
