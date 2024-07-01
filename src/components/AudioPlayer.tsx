import React from 'react';
import '../styles.css';

type AudioPlayerProps = {
  audio: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio }) => {
  const playAudio = () => {
    new Audio(audio).play();
  };

  return (
    <button onClick={playAudio} className="audio-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
        <g fill="#A445ED" fill-rule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
    </button>
  );
};

export default AudioPlayer;
