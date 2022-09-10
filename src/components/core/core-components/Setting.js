import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isUserAdmin, logoutHelper } from "../../auth/AuthHelper";
import Base from "../Base";
import "./settingStyle.css";

const Setting = () => {
  const [displayPrivacy, setDisplayPrivacy] = useState(false);
  const navigate = useNavigate();
  const logOutHandler = () => {
    logoutHelper();
    navigate("/signup");
  };

  const privacyMessage = () => {
    return (
      <div className="setting-item">
        <div className="message">
          Freetify will never give your data to any third party. All your data
          will be used to improve your experience on freetify. All the songs on
          freetify are <span className="bold-text">non copyright</span>. We have
          your <span className="bold-text">mail id</span>,{" "}
          <span className="bold-text">name</span> and{" "}
          <span className="bold-text">display picture</span> associated with
          google account.
        </div>
      </div>
    );
  };
  return (
    <Base>
      <div className="setting-container">
        <div className="title">Settings</div>
        <div className="option-list">
          <div className="option-list-item">Account</div>
          <div className="option-list-item">Preferances</div>
          <div
            className="option-list-item cursor-pointer"
            onClick={() => {
              setDisplayPrivacy(!displayPrivacy);
            }}
          >
            Privacy policy
          </div>
          {displayPrivacy && privacyMessage()}
          <div className="option-list-item">History</div>
          {isUserAdmin() && (
            <Link to="/adminArea">
              <div className="option-list-item">Admin Area</div>
            </Link>
          )}
          <div
            className="option-list-item cursor-pointer"
            onClick={() => {
              logOutHandler();
            }}
          >
            Log out
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Setting;
