import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incrementByAmount, incremented } from "./redux/counter";
import "./styles.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Count is : {count}</h1>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement </button>
      <button onClick={() => dispatch(incrementByAmount(24))}>
        Increment by 24
      </button>
    </div>
  );
}
