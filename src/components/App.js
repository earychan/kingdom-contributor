import React from "react";
import "./App.scss";

// Importing the header
import Header from "./Header";
import ContributorContainer from "./ContributorContainer";

const App = () => {
  return (
    <div>
      <Header />
      <ContributorContainer />
    </div>
  );
};

export default App;
