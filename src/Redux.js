import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "./features/customCounter/customCounterSlice";

const Redux = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux integratoin test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>
          incrementByAmount
        </button>
        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Redux;
