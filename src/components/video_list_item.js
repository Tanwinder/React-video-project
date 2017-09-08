import React from 'react';

const VideoListItem=(props)=> {
  const imgUrl = props.video.snippet.thumbnails.default.url;
  const kida = (e)=> {

    props.onselected(props.video);
    window.scrollTo(0,0);
  }
  return (
    <li className="video-list-items" onClick={(e)=> {kida(e)}}>
    <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imgUrl} />
            </div>
            <div className="media-body">
              <div className="media-heading">
              {props.video.snippet.title}
              </div>
            </div>
          </div>
    </li>
  );
}
export default VideoListItem;
