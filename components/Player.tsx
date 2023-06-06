import React from "react";
import {
  ArrowsUpDownIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";

const isPlaying = false;

const Player = () => {
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      {/* Left */}
      <div className="flex items-center space-x-4">SELECTED SONG</div>
      {/* Center */}
      <div className="flex justify-evenly items-center">
        <ArrowsUpDownIcon className="icon-playback" />
        <BackwardIcon className="icon-playback" />
        {isPlaying ? (
          <PauseIcon className="icon-playback" />
        ) : (
          <PlayIcon className="icon-playback" />
        )}
        <ForwardIcon className="icon-playback" />
        <ArrowUturnLeftIcon className="icon-playback" />
      </div>
      {/* Right */}
      <div className="flex justify-end items-center pr-5 space-x-3 md:space-x-4">
        <SpeakerWaveIcon className="icon-playback" />
        <input type="range" min={0} max={100} className="w-20 md:w-auto" />
      </div>
    </div>
  );
};

export default Player;
