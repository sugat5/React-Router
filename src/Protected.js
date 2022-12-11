import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Home component passed through login  protection.
export default function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}
