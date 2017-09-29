import React from 'react';

const VideoWithIcon = (props) => {
  const videosData = props.videosData;
  const playVideo = (e) => {
    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.classList.add("otherclass");
  }
  const closeVideo = (e) => {
    console.log(e.target.parentNode);
    e.target.parentNode.classList.remove("otherclass");
    e.target.parentNode
  }

  const c = videosData.map((item,i) => {
    const videoId = item.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    if(i == 4) {
      return;
    }
    return(
      <div key={item.etag} className="video-outer">
      <img className="fourimage-video-image" src={item.snippet.thumbnails.default.url}/>
      <div className="video-title fourimage-video-title">
      <button type="button" className="close-btn" onClick={(e)=> closeVideo(e)}>close</button>
      <button onClickCapture={(e)=> playVideo(e)} type="button" className="video-play-button">
      <img className="video-play-button-icon" src="../images/play-icon.png" />
      </button>
      <p>{item.snippet.title}</p>
      </div>
      <div className="video-player embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      </div>
    );
  });

  return(
    <div className="videos-icon">
    {c}</div>
  );
}

export default VideoWithIcon;
