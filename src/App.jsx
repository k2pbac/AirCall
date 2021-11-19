import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header.jsx";
import CallItemList from "./Components/CallItemList/CallItemList.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import DetailedCall from "./Components/DetailedCall/DetailedCall.jsx";

const App = () => {
  const { callsData } = require("./Components/CallItemList/CallItemData");
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {/* <CallItemList callItemsData={callsData} /> */}
        <DetailedCall></DetailedCall>
      </div>
      <Footer></Footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
