import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./pages/Hello";
import Counter from "./pages/Counter";
import UserInput from "./pages/UserInput";
import ListOfItem from "./pages/ListOfItem";
import Toggle from "./pages/Toggle";
import FetchApi from "./pages/FetchApi";
import Timer from "./pages/Timer";
import BackgroundChanger from "./pages/BackgroundChanger";
import BasicRoute from "./pages/Routing/BasicRoute";
import LoginReg from "./pages/LoginReg";
const App = () => {
  return (
    <>
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <UserInput />
      <ListOfItem />
      <Toggle />
      <FetchApi /> */}
      {/* <Timer/>
      <BackgroundChanger/>
      <BasicRoute/> */}
      <LoginReg/>
      
    </>
  );
};

export default App;
