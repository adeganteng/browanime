"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const option = {
    width: "300",
    height: "250",
  };

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const HandleClosePlayer = () => {
    return (
      <div className="fixed bottom-2 right-4">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1 p-1 hover:bg-color-accent transition-all rounded-full"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() =>
            alert(`Video player is Broken. You can't wathch this trailer`)
          }
        />
      </div>
    );
  };
  const HandleOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-4 text-color-dark bg-color-primary hover:bg-color-accent hover:text-color-primary transition-all p-2 rounded-lg shadow-md"
      >
        Play trailer
      </button>
    );
  };
  return isOpen ? <HandleClosePlayer /> : <HandleOpenPlayer />;
};
export default VideoPlayer;
