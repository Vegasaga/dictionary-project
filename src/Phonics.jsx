import React from "react";
import "./Phonics.css";
import audioIcon from "./audio.png";

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    let playAudio = new Audio(props.phonetics.audio);
    playAudio.play();
  }
  return (
    <div className="Word">
      <div className="audio-phonetic">
        <img
          src={audioIcon}
          alt="audio icon"
          className="word--audio-icon"
          onClick={playAudio}
          width="30"
        />
      </div>
      <h4 className="text-phonetic">/ {props.phonetics.text} /</h4>
    </div>
  );
}
