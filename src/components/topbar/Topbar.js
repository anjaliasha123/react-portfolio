import React from "react";
import "./Topbar.scss";
import { AccountCircle } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfoli
          </a>
          <div className="person-icon">
            <AccountCircle />
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
