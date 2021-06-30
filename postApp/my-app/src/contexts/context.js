import React, { useReducer, useContext } from "react"

//สร้างประตูไปที่ไหนก็ได้
const CounterContext = React.createContext();

const INITIAL_STATE = {
  counter: 0
};

//ใช้ Reducer เมื่อมี state เยอะ ๆ 
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return { counter: 0 };
    default:
      return state;
  };
};

function CounterProvider(props) {
  //dispatch เป็น function ที่ส่ง action ออกไป
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);


  const counterContextValue = {
    state,
    dispatch
  }
  //ส่งค่าเข้าไปในประตูไปที่ไหนก็ได้ (Provider)
  return <CounterContext.Provider value={counterContextValue}>
    {props.children}
  </CounterContext.Provider>
}

//Consumer
function useCounter() {
  const context = useContext(CounterContext);
  return context
}

export { CounterProvider, useCounter }