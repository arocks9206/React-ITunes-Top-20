import React from 'react';

const SongDetail = (props) => {
  if(!props.song)return null;
  return(
    <div align="center">
    <img src={props.song["im:image"][2].label} alt=""/>
    <h2>{props.song["im:artist"].label}</h2>
    <h2>{props.song["im:name"].label}</h2>
    <audio src={props.song.link[1].attributes.href}
     controls type="audio/ogg"></audio>
    </div>
  )
}
export default SongDetail;
