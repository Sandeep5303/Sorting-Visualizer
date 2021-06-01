import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

import Sound from 'react-sound';
import music from '../sound/music.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button
        className='btn btn-light btn-music'
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying ? <FaPlay className='play' /> : <FaPause />}
      </button>

      <Sound
        url={music}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
    </div>
  );
};

export default PlaySound;
