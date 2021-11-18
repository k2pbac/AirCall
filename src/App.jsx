import React from "react";
import ReactDOM from "react-dom";
import CallItem from "./Components/CallItem/CallItem.jsx";

import Header from "./Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <CallItem />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
