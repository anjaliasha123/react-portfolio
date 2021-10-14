import React from "react";
import "./Topbar.scss";
import { AccountCircle } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfol.io
          </a>
          <div className="person-icon">
            <AccountCircle />
          </div>
        </div>
        <div className="right">this is right</div>
      </div>
    </div>
  );
};

export default Topbar;
