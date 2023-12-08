import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RenderInput from "./RenderInput";
import FrameworkList from "./FrameworkList";
import MockServer from "./MockServer";
import Redux from "./Redux";
import ReduxAsync from "./ReduxAsync";
import CustomHooks from "./CustomHooks";

function App() {
  /*追加 output関数*/
  const output = (text) => {
    console.log(text);
  };
  const data = [
    {
      id: 1,
      item: "react",
    },
    {
      id: 2,
      item: "go",
    },
    {
      id: 3,
      item: "python",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RenderInput outputConsole={output} />
        <FrameworkList frameworks={data} />
        <MockServer />
        <Redux />
        <ReduxAsync />
        <CustomHooks />
      </header>
    </div>
  );
}

export default App;
