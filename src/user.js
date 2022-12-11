import { useParams, useNavigate } from "react-router-dom";
// Use of useParams to make dynamic pages with data and UseNavigate for programmatically navigation.
export default function User() {
  // const params = useParams();
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <>
      <h1 style={{ color: "blue" }}> This is {name}'s Page</h1>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </>
  );
}
