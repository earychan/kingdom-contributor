import React from "react";
import ContributorLists from "./ContributorLists";

// Importing the Contributor Item
import ContributorItem from "./ContributorItem";

const ContributorContainer = () => {
  return (
    <div className="container-1200">
      <div className="contributor__container">
        {ContributorLists.map((ContributorList) => {
          return <ContributorItem allDetail={ContributorList} />;
        })}
      </div>
    </div>
  );
};

export default ContributorContainer;
