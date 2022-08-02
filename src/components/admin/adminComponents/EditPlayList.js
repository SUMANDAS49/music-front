import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { getAllSongs } from "../../songs/SongsHelper";
import { createAdminPlayListAPI } from "../AdminApiCall";
import "./createAdminPlayListStyles.css";
import { getAdminPlayListSongsAPICall } from "../../playList/AdminPlayListHelper";
const EditPlayList = () => {
  useEffect(() => {
    let params = queryString.parse(window.location.search);
    // console.log(params);
  }, []);

  const [allSongs, setAllSongs] = useState([]);
  const [name, setName] = useState("");
  const [songs, setSongs] = useState([]);
  const [apiRes, setApiRes] = useState({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const [displaySubmit, setDisplaySubmit] = useState(false);
  const [songsInPlayList, setSongsInPlayList] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectSong = (id) => {
    // console.log(id);
    setSongs([...songs, id]);
    // console.log(songs);
  };
  const unSelectSong = (id) => {
    const selectedSongs = songs;
    let afterSong = [];
    afterSong = selectedSongs.filter((s) => s != id);
    setSongs(afterSong);
    // console.log(songs);
  };

  useEffect(() => {
    setLoading(true);
    getAllSongs().then((res) => {
      if (res?.error == false) {
        setAllSongs(res.songs);
        getAdminPlayListSongsAPICall(
          queryString.parse(window.location.search).id
        ).then((response) => {
          console.log(response);
          if (response.playList.songs && response.playList.songs.length > 0) {
            response.playList.songs.forEach((element) => {
              setSongs([...songs, element._id]);
            });
            console.log(songs);
          }
          setLoading(false);
          setSongsInPlayList(response.playList.songs);
        });
      }
    });
  }, []);

  const submitHandler = () => {
    createAdminPlayListAPI(songs, name).then((res) => {
      setApiRes(res);
      if (res?.error) {
        setError(true);
      }
      setDone(true);
    });
  };

  const songCheckedOrNot = (id) => {
    let tempSongs = songs;
    for (let i = 0; i < tempSongs.length; i++) {
      if (tempSongs[i] == id) {
        return true;
      }
    }
    return false;
  };

  const playListItems = (data, checked) => {
    console.log(checked + " -------------------");
    return (
      <div className="play-list-item">
        <div>{data.title}</div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            e.target.checked ? selectSong(data._id) : unSelectSong(data._id);
          }}
        />
      </div>
    );
  };
  if (loading == false) {
    return (
      <div className="create-play-list-container">
        {!done && (
          <div className="create-play-list-form">
            <span>Play list name:</span>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div>Select songs</div>
            <div className="play-list-container">
              {allSongs.map((song) => {
                return playListItems(song, songCheckedOrNot(song._id));
              })}
            </div>
            {name.length >= 1 && songs.length >= 1 && (
              <button
                onClick={() => {
                  submitHandler();
                }}
              >
                Submit
              </button>
            )}
          </div>
        )}
        {done && !error && <h1>Success</h1>}
        {done && error && <h1>Failed</h1>}
      </div>
    );
  } else if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
};

export default EditPlayList;
