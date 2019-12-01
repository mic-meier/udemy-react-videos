/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
