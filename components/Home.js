import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../actions/count";

function Home() {
  const number = useSelector((state) => state.count.number); // Access state with useSelector
  const dispatch = useDispatch(); // Dispatch actions with useDispatch

  return (
    <div>
      Some state changes:
      {number}
      <button onClick={() => dispatch(increase(1))}>Increase</button>
      <button onClick={() => dispatch(decrease(1))}>Decrease</button>
    </div>
  );
}

export default Home;
