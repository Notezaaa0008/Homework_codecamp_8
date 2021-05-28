import { useState, useReducer } from "react";
import Counter from "../components/Counter";
import ExtraCounter from "../components/ExtraCounter";
import { useCounter } from "../contexts/context"

import { increment, decrement, reset, addamount, decrementamount } from "../features/counter/counterSlice"
import { useDispatch, useSelector } from "react-redux"


function CounterPage() {

  //context + reducer  
  // const counter = useCounter();

  // const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)

  const [addAmount, setAddAmount] = useState(10);
  const [decrementAmount, setDecrementAmount] = useState(20);

  //วิธี context + reducer
  // return (
  //   <div>
  //     <h1>Counter page</h1>
  //     {toggle && <Counter counter={counter.state.counter}
  //       incrementCounter={() => counter.dispatch({ type: "increment" })}
  //       decrementCounter={() => counter.dispatch({ type: "decrement" })}
  //       resetCounter={() => counter.dispatch({ type: "reset" })}
  //     />}
  //     <h1>Show Counter: {counter.state.counter}</h1>
  //     <button onClick={() => setToggle(!toggle)}>Toggle</button>
  //   </div>
  // );

  return (
    <div>
      <h1>Counter page</h1>
      {toggle && <Counter counter={counter}
        incrementCounter={() => dispatch(increment())}
        decrementCounter={() => dispatch(decrement())}
        resetCounter={() => dispatch(reset())}
        //ค่าที่ส่งเข้าไป addamount(addAmount) addAmount จะเป็น state หรือ ค่าคงที่ หรือ input ก็ได้
        addamountCounter={() => dispatch(addamount(addAmount))}
        decrementamountCounter={() => dispatch(decrementamount(decrementAmount))}
      />}
      <h1>Show Counter: {counter}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default CounterPage;
