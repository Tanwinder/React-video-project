import React, { Component } from 'react';     // class based component
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const c = props.videos.map((item)=>{
    return (<VideoListItem
    key={item.etag}
    onselected={props.onselected}
    video={item}/>
  );
  });
  return(
    <ul className="video-list">
     {c}
    </ul>
  );
}


export default VideoList;
