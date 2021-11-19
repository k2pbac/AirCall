import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header.jsx";
import CallItemList from "./Components/CallItemList/CallItemList.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import DetailedCall from "./Components/DetailedCall/DetailedCall.jsx";
import Error from "./Components/Error/Error.jsx";

const App = () => {
  const { callsData } = require("./Components/CallItemList/CallItemData");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <CallItemList
                  setActiveTab={() => setActiveTab(1)}
                  callItemsData={callsData}
                />
              );
            }}
          />
          <Route
            path="/call/:id"
            render={(props) => <DetailedCall {...props}></DetailedCall>}
          />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer setActiveTab={setActiveTab} activeTab={activeTab}></Footer>
    </div>
  );
};

export default App;
