import { Link, Outlet } from "react-router-dom";
//Nested Routing
export default function ContactUs() {
  return (
    <div>
      <h1>Thank you for Contacting us</h1>
      <h2>Check out other business too</h2>
      <Link to="otherbusiness">Other Business</Link>
      <Outlet />
    </div>
  );
}
