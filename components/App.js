import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        Links: <Link to="/">Home</Link> <Link to="/foo">Foo</Link>{" "}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => navigate("/foo")}>Go to /foo</button>
      </div>
      {/* The Outlet component will render the matched child route component. */}
      <div style={{ marginTop: "1.5em" }}>
        <Outlet />
      </div>
    </div>
  );
}
