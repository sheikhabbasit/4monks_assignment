import React, { Fragment } from "react";
import Header from "src/components/common/Header";
import HomeViewComponent from "src/components/views/Home";
import Footer from "src/components/common/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <HomeViewComponent />
      <Footer />
    </Fragment>
  );
}

export default App;
