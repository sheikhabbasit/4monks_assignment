import React, { Fragment } from "react";
import Header from "./components/common/Header";
import HomeViewComponent from "./components/views/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <HomeViewComponent />
    </Fragment>
  );
}

export default App;
