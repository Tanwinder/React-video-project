import React from 'react';

const VideoWithIcon = (props) => {
  const videosData = props.videosData;
  console.log(videosData);
  const c = videosData.map((item,i) => {
    if(i == 4) {
      return;
    }
    return(
      <div key={item.etag} className="video-outer">
      <img className="fourimage-video-image" src={item.snippet.thumbnails.default.url}/>
      <div className="video-title fourimage-video-title">
      <button type="button" className="video-play-button">
      <img className="video-play-button-icon" src="../images/play-icon.png" />
      </button>
      <p>{item.snippet.title}</p>
      </div>
      </div>
    );
  })
  return(
    <div className="videos-icon">
    {c}</div>
  );
}

export default VideoWithIcon;
