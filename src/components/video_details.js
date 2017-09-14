import React from 'react';

const VideoDetails = ({video}) => {
  if(!video){
    return <div>loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return(
    <div className="video-display-container">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
          <div className="details">
            <div className="video-title">{video.snippet.title}</div>
            <div className="video-desc">{video.snippet.description}</div>
          </div>
        </div>
  );
}
export default VideoDetails;
