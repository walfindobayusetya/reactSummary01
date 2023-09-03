import "./App.css";
// import {DemoComponent} from "./components/DemoComponent";
// import ProfilePics from "../src/images/PasFoto.jpeg";
// import { TitleComponent } from "./components/TitleComponent";
// import ClickEventHandler from "./components/ClickEventHandler";
// import UserLogin from "./components/UserLogin";
// import EmployeeList from "./components/EmployeeList";
// import RegularStyleSheet from "./components/RegularStyleSheet";
// import Inline from "./components/Inline";
// import './appStyles.css';
// import moduleStyles from './myAppStyles.module.css';
import FormInput from "./components/FormInput";

// import React, { useReducer } from "react";
// import ComponentA from "./hooks/useContextWithReducer/ComponentA";
// import ComponentX from "./hooks/useContextWithReducer/ComponentX";
// import ComponentZ from "./hooks/useContextWithReducer/ComponentZ";
import "./App.css";
// import Count from "./hooks/Counter";
// import Counter2 from './hooks/Counter2';
// import Counter3 from './hooks/Counter3';
// import HookStateArray from './hooks/HookStateArray';

// import Counter from "./hooks/UseStatePractice.js/Counter";
// import Counter2 from "./hooks/UseStatePractice.js/Counter2";
// import Counter3 from "./hooks/UseStatePractice.js/Counter3";
// import HookStateArray from "./hooks/UseStatePractice.js/HookStateArray";
// import EffectExample1 from './hooks/UseEffectPractice/EffectExample1';
// import EffectExample2 from './hooks/UseEffectPractice/EffectExample2';
// import EffectExample3 from './hooks/UseEffectPractice/EffectExample3';
// import MouseContainer from './hooks/UseEffectPractice/MouseContainer';
// import FetchMultiplePosts from "./hooks/UseEffectPractice/FetchMultiplePosts";
// import FetchSinglePost from "./hooks/UseEffectPractice/FetchSinglePost";
// import ComponentC from "./hooks/ComponentC";
// import MyCounter1 from "./hooks/useReducerPractice/MyCounter1";
// import MyCounter2 from "./hooks/useReducerPractice/MyCounter2";
// import MyCounter3 from "./hooks/useReducerPractice/MyCounter3";

// export const PriceContext = React.createContext();
// export const ItemContext = React.createContext();

// export const CountContext = React.createContext()
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// import UseStateDataFetch from "./hooks/useStateAndUseReducer/UseStateDataFetch";
// import UseReducerDataFetch from "./hooks/useStateAndUseReducer/UseReducerDataFetch";

// import MainComponent from "./hooks/UseCallBackPractice/MainComponent";
// import MyMemoCounter from "./hooks/useMemoPractice/MyMemoCounter";
// import FocusInput from "./hooks/useRefPractice/FocusInput";
import Timer from "./hooks/useRefPractice/Timer";

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  // <CountContext.Provider
  //   value={{ countState: count, countDispatch: dispatch }}
  // >
  return (
    <div className="App">
      {/* <DemoComponent name="Walfindo" country="Indonesia!" />
      <DemoComponent name="Syaiful" country="Jepang!" />
      <DemoComponent name="Juanda" country="Malaysia!" />
      <DemoComponent name="Nova" country="Amerika!" />
      <p>I am a react developer</p>
      <p>I am 24 years old</p>
      <img src={ProfilePics} alt="" /> */}
      {/* </DemoComponent> */}
      {/* <ClickEventHandler /> */}
      {/* <UserLogin /> */}
      {/* <EmployeeList /> */}
      {/* <RegularStyleSheet primary = {true} /> */}
      {/* <Inline />
      <h2 className="error">Error!!</h2>
      <h2 className={moduleStyles.sucess}>Success</h2> */}
      <FormInput />
      {/* <Count /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <MouseContainer /> */}
      {/* <FetchMultiplePosts /> */}
      {/* <FetchSinglePost /> */}
      {/* <PriceContext.Provider value={"$200"}>
        <ItemContext.Provider value={"Apple"}>
          <ComponentC />
        </ItemContext.Provider>
      </PriceContext.Provider> */}
      {/* <MyCounter1 /> */}
      {/* <MyCounter2 /> */}
      {/* <MyCounter3 /> */}
      {/* Count: {count}
        <ComponentA />
        <ComponentX />
        <ComponentZ /> */}
      {/* <UseStateDataFetch /> */}
      {/* <UseReducerDataFetch /> */}
      {/* <MainComponent /> */}
      {/* <MyMemoCounter /> */}
      {/* <FocusInput /> */}
      <Timer />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
