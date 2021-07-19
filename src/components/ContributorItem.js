import React from "react";
import Ebraj from "../images/ebraj.jpg";

const ContributorItem = (props) => {
  const { allDetail } = props;
  const { shortForm, name, intro, githubLink, linkedInLink, instagramLink } =
    allDetail;
  console.log(allDetail);
  return (
    <div className="contributor__item">
      <div className="contributor__item--img">{shortForm}</div>
      <div className="contributor__item--desc">
        <h2>{name}</h2>
        <p>{intro}</p>
      </div>
      <div className="contributor__item--social">
        <a href={githubLink} target="blank">
          GitHub
        </a>
        <a href={linkedInLink} target="blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContributorItem;
