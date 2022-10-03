import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getUserDetails } from "../auth/AuthHelper";
import AddSong from "./adminComponents/AddSong";
import AllUsersList from "./adminComponents/AllUsersList";
import CreatePlayList from "./adminComponents/CreatePlayList";
import EditPlayLists from "./adminComponents/EditPlayLists";
import "./adminDashboardStyle.css";
const AdminDashBoard = () => {
  const [user, setUser] = useState({});
  const [taskNumber, setTaskNumber] = useState(0);
  useEffect(() => {
    setUser(getUserDetails());
  }, []);
  return (
    <div className="container">
      <div className="head">
        <div className="title">Admin Area</div>
        <div className="switch-user-mode"><Link className="Link" to="/setting">Back to user mode</Link></div>
        <div className="admin-details">
          <div className="admin-name">{user.name}</div>
          <img className="admin-pic" src={user.profilePic} />
        </div>
      </div>
      <div className="admin-body">
        <div className="left">
          <div
            className={taskNumber == 0 ? "select left-item" : "left-item"}
            onClick={() => {
              setTaskNumber(0);
            }}
          >
            Songs
          </div>
          <div
            className={taskNumber == 5 ? "select left-item" : "left-item"}
            onClick={() => {
              setTaskNumber(5);
            }}
          >
            Play Lists
          </div>
          <div
            className={taskNumber == 1 ? "select left-item" : "left-item"}
            onClick={() => {
              setTaskNumber(1);
            }}
          >
            Add song
          </div>
          <div className={taskNumber == 2 ? "select left-item" : "left-item"}>
            Edit songs
          </div>
          <div
            className={taskNumber == 3 ? "select left-item" : "left-item"}
            onClick={() => {
              setTaskNumber(3);
            }}
          >
            Create playlist
          </div>
          <div
            className={taskNumber == 4 ? "select left-item" : "left-item"}
            onClick={() => {
              setTaskNumber(4);
            }}
          >
            {" "}
            Users
          </div>
        </div>
        <div className="right">
          {taskNumber == 1 && <AddSong />}
          {taskNumber == 4 && <AllUsersList />}
          {taskNumber == 3 && <CreatePlayList />}
          {taskNumber == 5 && <EditPlayLists />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
