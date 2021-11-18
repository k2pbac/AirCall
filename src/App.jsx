import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import CallItemList from "./Components/CallItemList/CallItemList.jsx";

const App = () => {
  const { callsData } = require("./Components/CallItemList/CallItemData");
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <CallItemList callItemsData={callsData} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
