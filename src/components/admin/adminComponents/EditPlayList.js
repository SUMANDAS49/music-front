import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { getAdminPlayListSongsAPICall } from "../../playList/AdminPlayListHelper";
import { getAllSongs } from "../../songs/SongsHelper";
import { updatePlayListApi } from "../AdminApiCall";
import { Link } from "react-router-dom";
import "./editPlayListStyle.css";
import Loader from "../../util/Loader";
const EditPlayList = () => {
  const [songsInPlayList, setSongsInPlayList] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [playListName, setPlayListName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let params = queryString.parse(window.location.search);
    // console.log(params);
    //first get all the songs in the playlist
    getAdminPlayListSongsAPICall(params.id).then((result) => {
      console.log(result);
      setSongsInPlayList(result.playList.songs);
      setPlayListName(result.playList.playListName);
      // console.log(songsInPlayList);
      getAllSongs().then((result) => {
        let tempAllSongs = [];
        for (let i = 0; i < result.songs.length; i++) {
          let notMatched = false;
          for (let j = 0; j < songsInPlayList.length; j++) {
            if (songsInPlayList[j]._id === result.songs[i]._id) {
              notMatched = true;
            }
          }
          if (!notMatched) {
            tempAllSongs.push(result.songs[i]);
          }
        }
        setAllSongs(tempAllSongs);
      });
      setLoading(false);
    });
  }, []);

  const transferToAllSongs = (target) => {
    let temp = [];
    temp = songsInPlayList.filter((song) => song._id !== target._id);
    setSongsInPlayList(temp);
    let temp2 = [];
    temp2 = allSongs;
    temp2.push(target);
    setAllSongs(temp2);
  };
  const transferToSongsInPlayList = (target) => {
    let temp = [];
    temp = allSongs.filter((song) => song._id !== target._id);
    setAllSongs(temp);
    let temp2 = [];
    temp2 = songsInPlayList;
    temp2.push(target);
    setSongsInPlayList(temp2);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
    updatePlayListApi(
      playListName,
      songsInPlayList,
      queryString.parse(window.location.search).id
    ).then((res) => {
      console.log(res);
      window.alert("Updated successfully");
    });
  };

  return (
    <div className="edit-playList-container">
      <div className="edit-playList-header">
        <Link className="Link" to="/adminArea">
          Go Back
        </Link>
        <p className="heading">Edit The playlist here</p>
        <div></div>
      </div>
      {loading && <Loader />}
      {!loading && (
        <div className="playlist-contents">
          <input
            value={playListName}
            onChange={(e) => {
              setPlayListName(e.target.value);
            }}
          />
          <button
            className="submit-button"
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            Submit
          </button>
          <h2>Songs in the playList</h2>
          <div className="selected-songs-container">
            {songsInPlayList.map((song, key = song._id) => {
              return (
                <h4
                  className="item"
                  onClick={() => {
                    transferToAllSongs(song);
                  }}
                >
                  {song.title}
                </h4>
              );
            })}
          </div>
        </div>
      )}
      {!loading && (
        <div>
          <h2 style={{ color: "white" }}>
            All songs (accept the playlist songs)
          </h2>
          <div className="all-song-container">
            {allSongs !== undefined &&
              allSongs.length >= 1 &&
              allSongs.map((song) => {
                return (
                  <h4
                    className="item"
                    onClick={() => {
                      transferToSongsInPlayList(song);
                    }}
                  >
                    {song.title}
                  </h4>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPlayList;
