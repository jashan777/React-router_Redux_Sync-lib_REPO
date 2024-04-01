import React from "react";
import { Link, Outlet } from "react-router-dom";
import { push } from "redux-first-history";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    // Dispatch the navigation event through redux
    dispatch(push("/foo"));
  };

  return (
    <div>
      <header>
        Links: <Link to="/">Home</Link> <Link to="/foo">Foo</Link>{" "}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={handleNavigate}>Go to /foo</button>
      </div>
      {/* The Outlet component will render the matched child route component. */}
      <div style={{ marginTop: "1.5em" }}>
        <Outlet />
      </div>
    </div>
  );
}
