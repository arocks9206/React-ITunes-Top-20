import React from 'react';


const SongSelector = (props) => {

  const options = props.songs.map(song => {
    return <option value={song.id.attributes['im:id']} key={song.id.attributes['im:id']} >{song.title.label}</option>
  })

  function handleChange(event){
    props.onSongSelected(event.target.value)
  }

  return(
    <select id="SongSelector" defaultValue="default" onChange={handleChange} >
    <option disabled value="default">Choose a Song...</option>
    {options}
    </select>
  )

}
export default SongSelector;
