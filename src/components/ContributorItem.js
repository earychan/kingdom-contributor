import React from "react";
import Ebraj from "../images/ebraj.jpg";

const ContributorItem = () => {
  return (
    <div className="contributor__item">
      <div className="contributor__item--img">
        <img src={Ebraj} alt="Ebraj" />
      </div>
      <div className="contributor__item--desc">
        <h2>Ebraj Gurung</h2>
        <p>Enthusiastic Lad who loves designing & coding.</p>
      </div>
      <div className="contributor__item--social">
        <a href="https://github.com/ebraj" target="blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ebrajgrg/" target="blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContributorItem;
