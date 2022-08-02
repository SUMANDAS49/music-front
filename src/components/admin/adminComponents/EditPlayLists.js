import React, { useEffect, useState } from "react";
import { getAllAdminPlayListAPICall } from "../AdminApiCall";

import EditIcon from "@mui/icons-material/Edit";
import "./generalStyles.css";
import { Link } from "react-router-dom";
const EditPlayLists = () => {
  const [playLists, setPlayLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getAllAdminPlayListAPICall().then((res) => {
      if (res.err) {
        setError(true);
        setLoading(false);
      } else {
        setPlayLists(res.allLists);
        setLoading(false);
      }
    });
  }, []);

  const playListItem = (data) => {
    return (
      <div className="listItem">
        <div>{data.playListName}</div>
        <Link to={`/admin/editPlayList?id=${data._id}`}>
          <EditIcon />
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div>
        {playLists.map((playList) => {
          return playListItem(playList);
        })}
      </div>
    </div>
  );
};

export default EditPlayLists;
